import NextAuth from 'next-auth/next';

import { authOptions } from '@/utils/auth.util';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
