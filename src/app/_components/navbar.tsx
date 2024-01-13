'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoChevronDown } from 'react-icons/io5';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/utils/shadcn.util';
import { navbarLinks } from '@/data/navabar-links.data';

import { AuthControls } from './auth-controls';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="z-20 w-full bg-white flex items-center justify-center h-[120px] fixed top-0 left-0 navbar-padding shadow-sm">
      <div className="w-full h-full px-2">
        <div className="flex justify-between items-center border-b py-2">
          <Link href="/">
            <h1 className="animate-text bg-gradient-to-r from-sky-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-2xl font-black uppercase">
              Ragnork
            </h1>
          </Link>
          <SignedOut>
            <AuthControls />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
        <div className="flex justify-start pt-2 gap-3">
          {navbarLinks.map((link, index) =>
            link.href && !link.subMenuLinks ? (
              <Link
                href={link.href}
                key={index}
                className={cn(
                  'px-2 py-4 rounded-sm hover:bg-slate-300 transition-all',
                  {
                    'bg-slate-300': pathname === link.href,
                  }
                )}
              >
                {link.linkLabel}
              </Link>
            ) : (
              <HoverCard
                key={index}
                defaultOpen={false}
                openDelay={0}
                closeDelay={0}
              >
                <HoverCardTrigger
                  className={cn(
                    'px-2 py-4 flex items-center gap-2 rounded-sm cursor-pointer hover:bg-slate-300 transition-all',
                    {
                      'bg-slate-300': pathname === link.href,
                    }
                  )}
                >
                  <span>{link.linkLabel}</span>
                  <IoChevronDown />
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col rounded-md p-2 bg-white max-w-[220px]">
                  {link.subMenuLinks?.map(({ icon: Icon, ...subLink }, idx) => (
                    <Link
                      href={subLink.href}
                      className="inline-flex p-2 rounded-sm items-center gap-2 hover:bg-slate-300 transition-all w-full"
                      key={idx}
                    >
                      {Icon && <Icon />}
                      {subLink.label}
                    </Link>
                  ))}
                </HoverCardContent>
              </HoverCard>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
