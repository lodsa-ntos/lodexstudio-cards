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
      <section className="flex items-center justify-center min-h-screen overflow-hidden bg-neutral-50">
        <ColorChangeCards />
        {/*<OutlineCards />*/}
        {/*<DragCards />*/}
        {/* 
        <ShimmerBorderCard>
          <p className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">Shimmer Border Card</p>
          <p className="relative z-10 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quaerat est iusto praesentium reiciendis minima numquam iste, quos nostrum impedit sed natus corrupti aspernatur aperiam beatae, aliquid, veritatis deleniti? Id!</p>
        </ShimmerBorderCard>
        */}
        {/* <TiltShineCard /> */}
        {/* <SwipeCards /> */}
      </section>
    </GlobalContainer>
  );
}

export default HeroSection;
