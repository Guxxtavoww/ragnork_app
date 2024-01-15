import { z } from 'zod';

export const registerFormSchema = z
  .object({
    email: z
      .string({ required_error: 'Insira seu e-mail' })
      .min(3, 'E-mail deve ter no mínimo 3 caracteres')
      .email('Insira um e-mail válido'),
    name: z.string().optional(),
    password: z
      .string({ required_error: 'Senha é obrigatória' })
      .min(8, 'Senha deve conter no mínimo 8 caracteres')
      .refine(
        (value) => {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
          return regex.test(value);
        },
        {
          message:
            'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.',
        }
      ),
    confirm_password: z.string({ required_error: 'Confirme sua senha' }),
    country: z.string().optional().default('brazil'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Senhas não são iguais',
    path: ['confirm_password'],
  });

export type RegisterFormType = z.infer<typeof registerFormSchema>;
