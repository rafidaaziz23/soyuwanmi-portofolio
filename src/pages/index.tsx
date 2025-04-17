"use client";

import { useEffect, useRef, useState } from "react";
import Book from "@/components/book";
import pinad1 from "../assets/images/pinad-idle.png";
import pinad2 from "../assets/images/pinad-twink.png";
import board from "../assets/images/hero/board.png";
import pict from "../assets/images/hero/pict.png";
import Image from "next/image";
import TypewriterDialog from "@/components/typingtext";
import Hero from "../assets/images/hero.png";
import contactme1 from "../assets/images/contact/contactme_1.png";
import contactme2 from "../assets/images/contact/contactme_2.png";
import contactme3 from "../assets/images/contact/contactme_3.png";
import contactme4 from "../assets/images/contact/contactme_4.png";
import contactme5 from "../assets/images/contact/contactme_5.png";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const pinad1Ref = useRef<HTMLImageElement>(null);
  const pinad2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const pinad1: any = pinad1Ref.current;
    const pinad2: any = pinad2Ref.current;

    const handleMouseEnter = () => {
      pinad1.style.opacity = "1";
      pinad2.style.opacity = "2";
      if (pinad1 && pinad2) {
        pinad2.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (pinad1 && pinad2) {
        // pinad1.style.opacity = "1";
        pinad2.style.opacity = "0";
      }
    };

    const container = pinad1?.parentElement;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="w-full h-screen bg-[#f5ece1] flex items-center justify-center sticky top-0 z-10 hero ">
        {/* <h2 className="text-white text-3xl font-bold hero-h2">Soyu's Days</h2> */}
        <Image src={board} alt="Pinad Image" className="w-[80vw]" />
        <Image
          src={pict}
          alt="Pinad Image"
          className="w-[95vw] absolute z-11 mb-[25px]"
        />
      </section>

      {/* DIALOG */}
      <section className="w-full min-h-screen rounded-t-[50px]  sticky top-0 z-20 dialog mt-[300px] flex flex-col drop-shadow-2xl">
        <div className="flex items-end justify-center flex-col-reverse sm:flex-col-reverse md:flex-row min-h-[95vh]">
          <div
            className="w-[70vw] min-h-[25vh] flex dialog-box items-center transition-transform duration-300"
            style={{}}
          >
            <TypewriterDialog
              texts={[
                "Halo, namaku Soyu!",
                "Ini adalah Portofolioku.",
                "Ayo kita mulai petualangan!",
              ]}
              typingSpeed={40}
              onComplete={() => console.log("Dialog selesai!")}
            />
          </div>

          <div className="flex-1 min-h-[25vh] transition-transform duration-300 relative flex justify-center items-end mb-[-2vh]">
            <Image
              ref={pinad1Ref}
              src={pinad1}
              alt="Pinad 1"
              width={500}
              className="absolute transition-opacity duration-300 opacity-100"
            />
            <Image
              ref={pinad2Ref}
              src={pinad2}
              alt="Pinad 2"
              width={500}
              className="absolute"
            />
          </div>
        </div>
        <div className="min-h-[5vh] bg-[#e0ccbc] border-t-3 border-slate-800 z-10 relative"></div>
      </section>

      {/* BOOK */}
      <section className="w-full min-h-screen bg-[#e0ccbc] rounded-t-[50px] sticky top-0 z-30 flex flex-col mt-[300px] drop-shadow-2xl">
        <div className="flex-1 flex items-center justify-center">
          <div className=" max-h-screen min-h-max w-fit drop-shadow-2xl">
            <Book />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="w-full min-h-screen bg-[#e0ccbc] rounded-t-[50px] flex items-center justify-center sticky top-0 z-40 mt-[300px] drop-shadow-2xl ">
        {/* contactme1 - pojok kanan bawah */}
        <div className="absolute bottom-0 right-0  w-[25vw]">
          <Image src={contactme1} alt="contactme1" layout="responsive" />
        </div>

        {/* contactme2 - pojok kiri bawah */}
        <div className="absolute bottom-0 left-0 w-[15vw]">
          <Image src={contactme2} alt="contactme2" layout="responsive" />
        </div>

        {/* contactme3 - di atas contactme1, ada jarak */}
        <div className="absolute top-0 right-0  w-[25vw]">
          <Image src={contactme3} alt="contactme3" layout="responsive" />
        </div>

        {/* contactme4 - tengah agak ke kanan + hover scale */}
        <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2   transition-transform duration-300 hover:scale-110 w-[10vw]">
          <Image src={contactme4} alt="contactme4" layout="responsive" />
        </div>

        {/* contactme5 - kanan dari contactme2 + hover scale */}
        <div className="absolute bottom-0 left-100 top-40 w-[18vw]   transition-transform duration-300 hover:scale-110">
          <Image src={contactme5} alt="contactme5" layout="responsive" />
        </div>
      </section>
    </main>
  );
}
