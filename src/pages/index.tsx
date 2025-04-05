"use client";

import { useEffect, useRef, useState } from "react";
import Book from "@/components/book";
import pinad1 from "../assets/images/pinad-1.png";
import Image from "next/image";
import TypewriterDialog from "@/components/typingtext";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  const handleScroll = () => {
    if (!sectionRef.current) return;

    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    const progress = 1 - Math.min(Math.max(sectionTop / windowHeight, 0), 1);

    const maxTranslate = 60;
    setParallaxY(progress * maxTranslate);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="w-full h-screen bg-pink-500 flex items-center justify-center sticky top-0 z-10 hero">
        <h2 className="text-white text-3xl font-bold hero-h2">Soyu's Days</h2>
      </section>

      {/* DIALOG */}
      <section
        ref={sectionRef}
        className="w-full min-h-screen rounded-t-[50px] flex items-end justify-center sticky top-0 z-20 dialog mt-[50px]"
      >
        <div
          className="w-[70vw] min-h-[25vh] mb-[50px] flex dialog-box items-center  transition-transform duration-300"
          style={{
            transform: `translateY(${parallaxY - 30}px)`,
          }}
        >
          <TypewriterDialog
            texts={[
              " Halo, namaku Soyu!",
              " Ini adalah Portofolioku.",
              " Ayo kita mulai petualangan!",
              " Aku Ingin Mualaf",
            ]}
            typingSpeed={40}
            onComplete={() => console.log("Dialog selesai!")}
          />
        </div>

        <div
          className="flex-1 min-h-[25vh] transition-transform duration-300"
          style={{
            transform: `translateY(${parallaxY * 0.6}px)`,
          }}
        >
          <div className="flex items-end justify-center h-full mb-[-40px]">
            <Image src={pinad1} alt="Pinad Image 1" className="bottom-0" />
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section className="w-full min-h-screen bg-white rounded-t-[50px] sticky top-0 z-30 flex flex-col mt-[50px]">
        <div className="flex-1 flex items-center justify-center">
          <div className=" max-h-screen min-h-max w-fit drop-shadow-2xl">
            <Book />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="w-full min-h-screen bg-teal-500 rounded-t-[50px] flex items-center justify-center sticky top-0 z-40 mt-[50px]">
        <h2 className="text-white text-3xl font-bold">Contact Section</h2>
      </section>
    </main>
  );
}
