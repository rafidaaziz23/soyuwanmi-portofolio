import Book from "@/components/book";
import "../styles/globals.css";
import hero1 from "../assets/images/hero-1.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full h-screen bg-pink-500 flex items-center justify-center sticky top-0 z-10 hero">
        {/* <h2 className="text-white text-3xl font-bold hero-h2">Soyu's Days</h2> */}
        <Image
          src={hero1}
          alt="Hero Image"
          width={1000}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </section>

      <section className="w-full min-h-screen bg-blue-300 rounded-t-[50px] flex items-center justify-center sticky top-0 z-20 ">
        <h2 className="text-white text-3xl font-bold">Dialog Section</h2>
      </section>

      <section className="w-full min-h-screen bg-white rounded-t-[50px] sticky top-0 z-30 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className=" max-h-screen min-h-max w-fit drop-shadow-2xl">
            <Book />
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen bg-teal-500 rounded-t-[50px] flex items-center justify-center sticky top-0 z-40 ">
        <h2 className="text-white text-3xl font-bold">Contact Section</h2>
      </section>
    </main>
  );
}
