'use client';

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { TbLogout2 } from 'react-icons/tb';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useMutation } from '@tanstack/react-query';

export function UserAvatarMenu({ session }: { session: Session }) {
  const { mutate, isPending } = useMutation({
    mutationKey: ['log-out'],
    mutationFn: () => signOut({ callbackUrl: window.location.origin }),
  });

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={session.user?.image?.toString()} />
          <AvatarFallback>{session.user?.name}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <Button
          className="w-full inline-flex items-center gap-2"
          onClick={() => mutate()}
          disabled={isPending}
        >
          <TbLogout2 />
          Sair
        </Button>
      </PopoverContent>
    </Popover>
  );
}
