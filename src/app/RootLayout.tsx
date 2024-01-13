import { Toaster } from '@/components/ui/toaster';
import { TanstackProvider } from '@/providers/tanstack-provider';
import { Navbar } from './_components/navbar';
import { exo } from './layout';

export default async function RootLayout({ children }: WithChildren) {
  try {
    const session = await getServerSession(authOptions);

    return (
      <TanstackProvider>
        <html
          lang="pt-br"
          className="scroll-smooth"
          suppressHydrationWarning={true}
        >
          <body className={exo.className}>
            <main className="w-full min-h-screen relative">
              <Navbar session={session} />
              <div className="w-full absolute top-[120px] left-0">
                {children}
              </div>
            </main>
            <Toaster />
          </body>
        </html>
      </TanstackProvider>
    );
  } catch (error) {
    console.error(error);

    return (
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}
