"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(122,88,58,0.14)] bg-[rgba(250,245,238,0.85)] backdrop-blur-md">
      <div className="shell flex items-center gap-4 py-3.5">
        <Link href="/" className="flex items-center gap-3 font-display text-[17px] font-semibold text-inkbright">
          <span className="monogram">DG</span>
          <span className="hidden sm:inline">Digvijay Gupta</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={"navlink " + (pathname === l.href ? "navlink-active" : "")}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="ml-auto grid h-9 w-9 place-items-center rounded-lg border border-[rgba(122,88,58,0.14)] text-muted md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[rgba(122,88,58,0.14)] md:hidden">
          <nav className="shell flex flex-col py-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={"navlink " + (pathname === l.href ? "navlink-active" : "")}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
