import React from "react";
import GlobalContainer from "../utils/GlobalContainer";
import SwipeCards from "./cards/SwipeCards";

function HeroSection() {
  return (
    <GlobalContainer>
      <div className="flex items-center justify-center min-h-screen ">
        <SwipeCards />
      </div>
    </GlobalContainer>
  );
}

export default HeroSection;
