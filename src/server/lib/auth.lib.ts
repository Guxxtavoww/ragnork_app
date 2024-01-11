import { getServerSession } from 'next-auth';

import { authOptions } from '@/utils/auth.util';

export async function getAuthSession() {
  const session = await getServerSession(authOptions);

  return session;
}
