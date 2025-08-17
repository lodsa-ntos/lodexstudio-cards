import React from "react";
import GlobalContainer from "../utils/GlobalContainer";
import SwipeCards from "./cards/SwipeCards";
import TiltShineCard from "./cards/TiltShineCard";
import ShimmerBorderCard from "./cards/ShimmerBorderCard";
import DragCards from "./cards/DragCards";
import OutlineCards from "./cards/OutlineCards";
import ColorChangeCards from "./cards/ColorChangeCards";


function HeroSection() {
  return (
    <GlobalContainer>
      <section className="flex flex-col items-center justify-center min-h-screen overflow-hidden bg-neutral-50 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4 drop-shadow-lg">
            Lodex Studio Cards
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            A visually striking collection of 6 interactive card UI components for modern web projects.
          </p>
          <div className="flex justify-center">
            <img src="/lodex-badge.svg" alt="by LodeX Studio" className="h-8" />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center w-full">
          <ColorChangeCards />
          <OutlineCards />
          <DragCards />
          <ShimmerBorderCard>
            <h1 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">Shimmer Border Card</h1>
            <p className="relative z-10 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat est iusto praesentium reiciendis minima numquam iste, quos nostrum impedit sed natus corrupti aspernatur aperiam beatae, aliquid, veritatis deleniti? Id!</p>
          </ShimmerBorderCard>
          <TiltShineCard />
          <SwipeCards />
        </div>
      </section>
    </GlobalContainer>
  );
}

export default HeroSection;
