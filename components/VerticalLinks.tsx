'use client'

import Link from "next/link"

export default function VerticalLinks() {
  return (
  <div className="social-links flex flex-col gap-4 text-base font-mono">
    {/* Social Links */}
        <Link 
          href="https://webshell.aditi.codes" 
          target="_blank"
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
          webshell
        </Link>
        <Link 
          href="https://x.com/halfacupoftea_" 
          target="_blank"
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
          x (twitter)
        </Link>
        <Link 
          href="https://linkedin.com/in/aditi-bindal" 
          target="_blank"
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
          linkedin
        </Link>
        <Link 
          href="https://github.com/aditi-dsi"
          target="_blank" 
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
          github
        </Link>
        <Link 
          href="mailto:aditii.b6@gmail.com" 
          target="_blank"
          className="hover:text-gray-400 transition-colors underline underline-offset-4"
        >
          email
        </Link>
  </div>
)
}