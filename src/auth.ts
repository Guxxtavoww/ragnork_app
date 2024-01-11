import NextAuth from 'next-auth';
import Discord from 'next-auth/providers/discord';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { db, performDatabaseOperation } from './server/lib/database.lib';

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  providers: [
    Discord({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),
  ],
  callbacks: {
    signIn: async (payload) => {
      return false;
    },
  },
  events: {
    linkAccount: async ({ user }) => {
      await performDatabaseOperation(async (prisma) => {});
    },
  },
  adapter: PrismaAdapter(db),
});
