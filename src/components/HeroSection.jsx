import React from "react";
import GlobalContainer from "../utils/GlobalContainer";
import SwipeCards from "./cards/SwipeCards";
import TiltShineCard from "./cards/TiltShineCard";

function HeroSection() {
  return (
    <GlobalContainer>
      <div className="flex items-center justify-center min-h-screen ">
        <TiltShineCard />
        {/* <SwipeCards /> */}  
      </div>
    </GlobalContainer>
  );
}

export default HeroSection;
