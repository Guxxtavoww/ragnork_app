import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: 'Insira seu e-mail' })
    .min(3, 'E-mail deve ter no mínimo 3 caracteres')
    .email('Insira um e-mail válido'),
  password: z.string({ required_error: 'Senha é obrigatória' }).min(3),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;
