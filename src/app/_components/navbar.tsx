'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoChevronDown } from 'react-icons/io5';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/utils/shadcn.util';
import { navbarLinks } from '@/data/navabar-links.data';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="z-20 w-full bg-white flex items-center justify-center h-[120px] fixed top-0 left-0 navbar-padding">
      <div className="w-full h-full px-2">
        <div className="flex justify-between items-center border-b py-2">
          <Link href="/">
            <h1 className="animate-text bg-gradient-to-r from-sky-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-2xl font-black uppercase">
              Ragnork
            </h1>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/auth/register"
              className="font-semibold hover:text-cyan-400 transition-all"
            >
              Registrar
            </Link>
            |
            <Link
              href="/auth/register"
              className="font-semibold hover:text-cyan-400 transition-all"
            >
              Entrar
            </Link>
          </div>
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
              <Popover key={index} defaultOpen={false}>
                <PopoverTrigger
                  className={cn(
                    'px-2 py-4 flex items-center gap-2 rounded-sm hover:bg-slate-300 transition-all',
                    {
                      'bg-slate-300': pathname === link.href,
                    }
                  )}
                >
                  <span>{link.linkLabel}</span>
                  <IoChevronDown />
                </PopoverTrigger>
                <PopoverContent className="flex flex-col rounded-md p-2 bg-white max-w-[220px]">
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
                </PopoverContent>
              </Popover>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
