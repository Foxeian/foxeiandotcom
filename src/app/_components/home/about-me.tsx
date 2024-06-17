"use client";

import { type JSX, useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

export default function AboutMe() {
  const refs = useRef([]);

  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    animation();
  }, []);

  const animation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        // start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (text: string) => {
    const body: JSX.Element[] = [];

    text.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="m-0 mr-3 text-5xl">
          {letters}
        </p>,
      );
    });
    return body;
  };

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          className="opacity-20"
          ref={(el: never) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>,
      );
    });
    return letters;
  };

  return (
    <section className="flex justify-center p-20 text-[#d3d3d3]">
      <div className="h-[675px] w-[675px]">
        <Image
          src="/assets/images/immanuel.jpg"
          alt="Immanuel Ehsan"
          className="h-full w-full object-cover object-[-290px]"
          width={1334}
          height={750}
          quality={100}
          priority
        />
      </div>
      <div className="ml-20 flex w-full flex-wrap content-center">
        <div ref={container} className="flex flex-wrap">
          {splitWords(
            "Immanuel Ehsan is a front-end developer with 2+ years of experience based in Russia. Specialized in immersive web experiences. I create a digital experience that borders on efficiency, aesthetics and functionality those are projects that have a soul.",
          )}
        </div>
      </div>
    </section>
  );
}
