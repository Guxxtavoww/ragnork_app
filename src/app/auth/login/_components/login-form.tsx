'use client';

import { useForm } from 'react-hook-form';
import { FaDiscord } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { LoginFormType, loginFormSchema } from './login-form.schema';

export function LoginForm() {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <div className="wrapper flex justify-center">
      <Card className="w-full max-w-3xl">
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col items-center gap-3 py-2 justify-center"
              onSubmit={form.handleSubmit((data) => console.log(data))}
            >
              <h2 className="font-bold text-4xl">Logar</h2>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Insira seu e-mail"
                        {...field}
                        className="input-field"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Insira sua senha"
                        {...field}
                        className="input-field"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full" variant="default">
                Entrar
              </Button>
              <Button
                variant="outline"
                type="button"
                className="bg-[#5865f2] w-full hover:bg-indigo-500"
                onClick={() =>
                  signIn('discord', {
                    callbackUrl: window.location.origin,
                  })
                }
              >
                <FaDiscord color="#fff" size={24} />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
