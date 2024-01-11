import { z } from 'zod';

export const envSchema = z.object({
  RAGNORK_DATABASE_URL: z.string(),
  RAGNORK_DATABASE_NAME: z.string(),
  RAGNORK_DATABASE_ROOT_PASS: z.string(),
  DISCORD_ID: z.string(),
  DISCORD_SECRET: z.string(),
});

export type EnvType = z.infer<typeof envSchema>;
