import React from 'react'

import HeroSection from "@/components/HeroSection";
import CardsGrid from "@/components/CardsGrid";

const HomeContainer = () => {
  return (
    <div className="w-[90%] flex flex-col content-center">
      <HeroSection />

      <section>
          <CardsGrid />
      </section>

    </div>
  )
}

export default HomeContainer