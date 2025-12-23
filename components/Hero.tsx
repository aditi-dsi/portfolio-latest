"use client";

import NET from "vanta/src/vanta.net";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import VerticalLinks from "./VerticalLinks";
import MobileNav from "./MobileNav";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  /* Background 3D animator object */
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
      <header className="fixed top-4 right-4 z-50"><MobileNav /></header>
      <div className="mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-32">
        <h1 className="text-gray-200 tracking-wider font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Aditi Bindal
        </h1>
        <h2 className="text-gray-200 tracking-wider text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mt-4 font-semilight">
          Software Engineer | AI/ML
        </h2>
      </div>

      {/* Social Links - For larger screens */}
      <div className="hidden lg:block  fixed right-20 top-3/4 transform -translate-y-1/2">
        <VerticalLinks />
      </div>
    </div>
  );
}

