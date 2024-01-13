import { z } from 'zod';

export const envSchema = z.object({
  RAGNORK_DATABASE_URL: z.string(),
  RAGNORK_DATABASE_NAME: z.string(),
  RAGNORK_DATABASE_ROOT_PASS: z.string(),
  DISCORD_ID: z.string(),
  DISCORD_SECRET: z.string(),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  CLERK_SECRET_KEY: z.string(),
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string(),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string(),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string(),
  WEBHOOK_SECRET: z.string(),
});

export type EnvType = z.infer<typeof envSchema>;
