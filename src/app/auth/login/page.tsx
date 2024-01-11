import { getAuthSession } from '@/server/lib/auth.lib';
import { LoginForm } from './_components/login-form';

export default async function Page() {
  const session = await getAuthSession();

  return session ? (
    <pre>{JSON.stringify(session, null, 2)}</pre>
  ) : (
    <LoginForm />
  );
}
