"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import "@/styles/navbar.css";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Bebas_Neue } from "next/font/google";
import { navigation } from "@/data/navigation";
import { socialMediaLinks } from "@/data/social-media-links";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const tl = useRef<gsap.core.Timeline | undefined>();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useGSAP(
    () => {
      gsap.set(".nav-link-tog", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".nav-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".nav-link-tog", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container },
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <nav ref={container}>
      <div className="fixed left-0 top-0 z-10 flex w-screen items-center justify-between p-8 text-black">
        <div
          className={`${bebasNeue.className} cursor-pointer text-xl tracking-widest underline underline-offset-4`}
        >
          <Link href="/">FOXEIAN</Link>
        </div>
        <div onClick={toggleMenu}>
          <p className="cursor-pointer">Menu</p>
        </div>
      </div>
      <div className="nav-overlay fixed left-0 top-0 z-20 flex h-screen w-screen bg-black p-8 text-white">
        <div className="absolute flex w-full justify-between pr-20">
          <div
            className={`${bebasNeue.className} cursor-pointer text-xl tracking-widest underline underline-offset-4`}
          >
            <Link href="/">FOXEIAN</Link>
          </div>
          <div onClick={toggleMenu}>
            <p className="cursor-pointer">Close</p>
          </div>
        </div>
        <div className="hidden flex-[2] items-end text-8xl lg:flex">
          <p className="cursor-pointer" onClick={toggleMenu}>
            &#x2715;
          </p>
        </div>
        <div className="flex flex-[4] flex-col justify-between pt-32 lg:pt-8">
          <div className="flex flex-col gap-8">
            {navigation.map((link, index) => (
              <div className="nav-link w-max" key={index}>
                <div className="nav-link-tog relative" onClick={toggleMenu}>
                  <Link
                    href={link.path}
                    className="text-6xl font-normal leading-[85%] tracking-tight hover:underline lg:text-7xl"
                  >
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <div className="flex flex-[1] flex-col justify-end gap-1.5 transition-[0.5s] duration-[ease-in-out]">
              {socialMediaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="w-fit hover:underline"
                  target="_blank"
                >
                  {link.name} &#8599;
                </Link>
              ))}
            </div>
            <div className="flex flex-[1] flex-col justify-end gap-1.5 transition-[0.5s] duration-[ease-in-out]">
              <a
                className="w-fit hover:underline"
                href={"mailto: immanuel@foxeian"}
              >
                Immanuel@foxeian.ru
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-[4] items-end justify-end">
          <Link
            className="cursor-pointer hover:underline"
            href="https://github.com/Foxeian/foxeiandotcom"
            target="_blank"
          >
            View Source Code
          </Link>
        </div>
      </div>
    </nav>
  );
}
