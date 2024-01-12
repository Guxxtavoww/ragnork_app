import Link from 'next/link';

export function AuthControls() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/auth/register"
        className="font-semibold hover:text-cyan-400 transition-all"
      >
        Registrar
      </Link>
      |
      <Link
        href="/auth/login"
        className="font-semibold hover:text-cyan-400 transition-all"
      >
        Entrar
      </Link>
    </div>
  );
}
