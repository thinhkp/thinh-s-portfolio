import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-primary flex flex-col items-center h-screen ">
        <Hero />
      </main>
    </>
  );
}
