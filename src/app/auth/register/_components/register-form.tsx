'use client';

import { FaDiscord } from 'react-icons/fa';

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

import { useRegisterForm } from './register-form.hook';

export function RegiserForm() {
  const {
    isPending,
    pendingVerification,
    registerForm,
    registerWithDiscord,
    regiter,
    isLoaded,
    codeForm,
    onCodeFormSubmit,
  } = useRegisterForm();

  return (
    <div className="wrapper flex justify-center">
      <Card className="w-full max-w-3xl">
        <CardContent>
          {!pendingVerification ? (
            <Form {...registerForm}>
              <form
                className="flex flex-col items-center gap-3 py-2 justify-center"
                onSubmit={registerForm.handleSubmit((data) => {
                  if (!isLoaded) return;

                  regiter(data);
                })}
              >
                <h2 className="font-bold text-4xl">Cadastrar-se</h2>
                <FormField
                  control={registerForm.control}
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
                  control={registerForm.control}
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
                  control={registerForm.control}
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
                  control={registerForm.control}
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
                  onClick={registerWithDiscord}
                >
                  <FaDiscord color="#fff" size={24} />
                </Button>
                <Button
                  className="w-full rounded-full"
                  variant="default"
                  disabled={isPending}
                >
                  Cadastrar
                </Button>
              </form>
            </Form>
          ) : (
            <div className="space-y-8">
              <h3>Verifique seu e-mail</h3>
              <Form {...codeForm}>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={codeForm.handleSubmit(onCodeFormSubmit)}
                >
                  <FormField
                    control={codeForm.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            placeholder="Insira o código de verificação"
                            {...field}
                            className="input-field"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" variant="outline">
                    Verificar Email
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
