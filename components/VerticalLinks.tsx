'use client'

import Link from "next/link"

export default function VerticalLinks() {
  return (
  <div className="social-links flex flex-col gap-4 text-base font-mono">
    {/* Social Links */}
        <Link 
          href="#work-experience" 
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
        work experience
        </Link>
        <Link 
          href="#projects" 
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
          projects
        </Link>
        <Link 
          href="#blogs" 
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
          blogs
        </Link>
        <Link 
          href="#links" 
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
          links
        </Link>
        <Link 
          href="https://webshell.aditi.codes" 
          target="_blank"
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
          webshell
        </Link>
  </div>
)
}