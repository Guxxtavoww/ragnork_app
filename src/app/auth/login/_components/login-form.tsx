'use client';

import { useForm } from 'react-hook-form';
import { FaDiscord } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

import { LoginFormType, loginFormSchema } from './login-form.schema';

export function LoginForm() {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <Button
          variant="outline"
          onClick={() =>
            signIn('discord', {
              callbackUrl: window.location.origin,
            })
          }
        >
          <FaDiscord />
        </Button>
      </form>
    </Form>
  );
}
