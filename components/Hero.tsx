"use client";

import NET from "vanta/src/vanta.net";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xFF007F,
          backgroundColor: 0x000000,
        })
      );
    }
  }, [vantaEffect]);

  return (
    <div
      className=" min-h-screen w-full flex flex-col justify-center items-start text-gray-200 relative"
      ref={vantaRef}
    >
      <div className="mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-32">
        <h1 className="text-gray-200 tracking-wider font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Aditi Bindal
        </h1>
        <h2 className="text-gray-200 tracking-wider text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mt-4 font-semilight">
          DevRel | Developer | Web3 | AI
        </h2>
      </div>

      {/* Social Links */}
      <div className="fixed right-20 top-3/4 transform -translate-y-1/2 flex flex-col gap-4 text-base font-mono">
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
    </div>
  );
}

