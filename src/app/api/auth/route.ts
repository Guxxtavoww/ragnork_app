import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs';
import { WebhookEvent } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    await import('@/server/actions/user/delete-user.action').then(
      ({ deleteUser }) => {
        return deleteUser(id!);
      }
    );
  }

  if (eventType === 'user.created') {
    const { id, email_addresses, image_url } = evt.data;

    const newUser = await import(
      '@/server/actions/user/create-user.action'
    ).then(({ createUser }) => {
      return createUser({
        email: email_addresses[0].email_address,
        last_ip: req.headers.get('x-forwarded-for')?.split(',')[0] || '',
        id,
        photo_url: image_url,
      });
    });

    if (newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          id: newUser.userid,
        },
      });
    }

    return NextResponse.json({ message: 'OK', user: newUser });
  }
}
