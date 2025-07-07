'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 rounded-md focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-64 bg-black border border-gray-700 shadow-xl rounded-md p-6 space-y-4 font-mono text-base">
          {[
            { href: '#work-experience', label: 'work experience' },
            { href: '#projects', label: 'projects' },
            { href: '#blogs', label: 'blogs' },
            { href: '#links', label: 'links' },
            { href: 'https://webshell.aditi.codes', label: 'webshell', external: true },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              onClick={() => setIsOpen(false)}
              className="block hover:text-gray-400 underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
