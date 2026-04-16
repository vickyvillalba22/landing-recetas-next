import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {

  return (
    <div className="w-[90%] flex flex-col content-center">
      <Navbar />
      <HeroSection />
    </div>
  );
}
