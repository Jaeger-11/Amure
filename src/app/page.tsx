import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* <div className="h-5 bg-gray"></div>
      <div className="h-10 bg-black text-white">AMURE</div>
      <div className="h-20 bg-white">
        
      </div>
      <div className="h-10 bg-secondary"></div> */}
      <Navbar/>
      <Hero/>
    </main>
  );
}
