'use client';

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CodeFormType,
  RegisterFormType,
  codeFormSchema,
  registerFormSchema,
} from './register-form.schema';

export function useRegisterForm() {
  const [pendingVerification, setPendingVerification] = useState(false);

  const router = useRouter();
  const { signUp, setActive, isLoaded } = useSignUp();

  const { isPending: isPendingDefultRegister, mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: async (data: RegisterFormType) => {
      await signUp?.create({
        password: data.password,
        emailAddress: data.email,
        username: data.name,
      });

      await signUp
        ?.prepareEmailAddressVerification({ strategy: 'email_code' })
        .then(() => {
          setPendingVerification(true);
        });
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ['register-with-discord'],
    mutationFn: async () =>
      signUp?.authenticateWithRedirect({
        strategy: 'oauth_discord',
        redirectUrl: '/api/discord',
        redirectUrlComplete: '/',
      }),
  });

  const registerForm = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
  });

  const codeForm = useForm<CodeFormType>({
    resolver: zodResolver(codeFormSchema),
  });

  const onCodeFormSubmit = useCallback(
    async (data: CodeFormType) => {
      try {
        const completeSignUp = await signUp?.attemptEmailAddressVerification({
          code: data.code,
        });

        if (completeSignUp?.status !== 'complete') {
          codeForm.setError('code', {
            message:
              'Não foi possivel seu e-mail. Cheque o código e coloque novamente',
          });

          return;
        }

        await setActive?.({ session: completeSignUp.createdSessionId });
        router.replace('/');
      } catch (err) {
        codeForm.setError('code', {
          message:
            'Não foi possivel seu e-mail. Cheque o código e coloque novamente ' +
            String(err),
        });
      }
    },
    [signUp, codeForm, setActive, router]
  );

  return {
    registerForm,
    isPending: isPending || isPendingDefultRegister,
    registerWithDiscord: () => mutateAsync(),
    pendingVerification,
    regiter: mutate,
    isLoaded,
    codeForm,
    onCodeFormSubmit,
  };
}
