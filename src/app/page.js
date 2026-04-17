import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CardsGrid from "@/components/CardsGrid";

export default function Home() {

  //capaz el navbar se puede poner directamente en layout.js
  return (

    <div className="w-[90%] flex flex-col content-center">

      <HeroSection />

      <section>
          <CardsGrid />
      </section>

    </div>

  );
}
