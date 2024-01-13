'use client';

import { useSignUp } from '@clerk/nextjs';
import { useForm } from 'react-hook-form';
import { FaDiscord } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

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

import { RegisterFormType, registerFormSchema } from './register-form.schema';

export function RegiserForm() {
  const { signUp } = useSignUp();

  const { isPending: isPendingDefultRegister, mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: async (data: RegisterFormType) => {
      const response = await signUp?.create({
        password: data.password,
        emailAddress: data.email,
        username: data.name,
      });

      return;
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ['register-with-discord'],
    mutationFn: async () =>
      signUp?.create({
        strategy: 'oauth_discord',
      }),
  });

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
  });

  return (
    <div className="wrapper flex justify-center">
      <Card className="w-full max-w-3xl">
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col items-center gap-3 py-2 justify-center"
              onSubmit={form.handleSubmit((data) => mutate(data))}
            >
              <h2 className="font-bold text-4xl">Cadastrar-se</h2>
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
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Insira seu nome (opcional)"
                        {...field}
                        className="input-field"
                        type="text"
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
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Confirme sua senha"
                        {...field}
                        className="input-field"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="outline"
                type="button"
                className="bg-[#5865f2] rounded-full w-full hover:bg-indigo-500"
                disabled={isPending}
                onClick={() => mutateAsync()}
              >
                <FaDiscord color="#fff" size={24} />
              </Button>
              <Button
                className="w-full rounded-full"
                variant="default"
                disabled={isPendingDefultRegister}
              >
                Cadastrar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
