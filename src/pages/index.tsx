"use client";

import { useEffect, useRef, useState } from "react";
import Book from "@/components/book";
import pinad1 from "../assets/images/pinad-idle.png";
import pinad2 from "../assets/images/pinad-twink.png";
import Image from "next/image";
import TypewriterDialog from "@/components/typingtext";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="w-full h-screen bg-[#f5ece1] flex items-center justify-center sticky top-0 z-10 hero">
        {/* <h2 className="text-white text-3xl font-bold hero-h2">Soyu's Days</h2> */}
      </section>

      {/* DIALOG */}
      <section className="w-full min-h-screen rounded-t-[50px]  sticky top-0 z-20 dialog mt-[50px] flex flex-col">
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

          <div className="flex-1 min-h-[25vh] transition-transform duration-300 relative">
            <Image
              src={isHovered ? pinad2 : pinad1}
              alt="Pinad Image"
              className="transition duration-300 mb-[-19px] z-30 relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </div>
        <div className="min-h-[5vh] bg-[#e0ccbc] border-2 border-black z-10 relative"></div>
      </section>

      {/* BOOK */}
      <section className="w-full min-h-screen bg-[#e0ccbc] rounded-t-[50px] sticky top-0 z-30 flex flex-col mt-[50px]">
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
