'use server';

import { performDatabaseOperation } from '@/server/lib/database.lib';

import type { CreateUserParams } from './user-actions.types';

export async function createUser({
  email,
  id,
  last_ip,
  photo_url,
}: CreateUserParams) {
  return performDatabaseOperation(async (prisma) => {
    const newUser = prisma.login.create({
      data: {
        userid: id,
        email: email,
        last_ip,
        photo_url,
      },
      select: {
        userid: true,
        account_id: true,
        last_ip: true,
      },
    });

    return Promise.resolve(newUser);
  });
}
