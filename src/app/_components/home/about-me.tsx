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
        <p
          key={word + "_" + i}
          className="m-0 mr-2 text-3xl sm:mr-3 sm:text-5xl"
        >
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
    <section className="flex flex-wrap-reverse justify-center gap-20 p-4 pb-20 pt-20 text-[#d3d3d3] sm:p-20">
      <div className="h-[475px] w-full sm:h-[675px] xl:w-[480px]">
        <Image
          src="/assets/images/immanuel.jpg"
          alt="Immanuel Ehsan"
          className="h-full w-full object-cover object-center"
          width={1334}
          height={750}
          quality={100}
          priority
        />
      </div>
      <div className="flex w-full flex-wrap content-center xl:w-1/2">
        <div ref={container} className="flex flex-wrap">
          {splitWords(
            "Immanuel Ehsan is a front-end developer with 2+ years of experience based in Russia. Specialized in immersive web experiences. I create a digital experience that borders on efficiency, aesthetics and functionality those are projects that have a soul.",
          )}
        </div>
      </div>
    </section>
  );
}
