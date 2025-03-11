import Book from "@/components/book";

export default function Home() {
  return (
    <main className="w-full">
      {/* Section 1: Pink hero section */}
      <section className="w-full h-screen bg-pink-500 flex items-center justify-center sticky top-0 z-10">
        <h2 className="text-white text-3xl font-bold">Hero Section</h2>
      </section>

      <section className="w-full min-h-screen bg-blue-300 rounded-t-[50px] flex items-center justify-center sticky top-0 z-20 mt-[-50px]">
        <h2 className="text-white text-3xl font-bold">Dialog Section</h2>
      </section>

      <section className="w-full min-h-screen bg-white rounded-t-[50px] flex items-center justify-center sticky top-0 z-30 mt-[-50px]">
        {/* <Book /> */}
        <h2 className="text-rose-500 text-3xl font-bold">Buku Section</h2>
      </section>

      <section className="w-full min-h-screen bg-teal-500 rounded-t-[50px] flex items-center justify-center sticky top-0 z-40 mt-[-50px]">
        <h2 className="text-white text-3xl font-bold">Contact Section</h2>
      </section>
    </main>
  );
}
