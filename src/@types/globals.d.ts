import { ReactNode } from 'react';

import type { EnvType } from '@/config/env.config';

declare global {
  export type Maybe<T> = T | null | undefined;

  export type WithChildren<T extends Record<string, any> = {}> = T & {
    children: ReactNode;
  };

  namespace NodeJS {
    interface ProcessEnv extends EnvType {}
  }
}
