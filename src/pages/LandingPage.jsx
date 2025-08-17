import React from "react";
import Hero from "../components/HeroSection";
import DemoGrid from "./DemoGrid";
import { Helmet } from "react-helmet";

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Lodex Studio Cards Demo</title>
        
        <meta
          name="description"
          content="Collection of 6 interactive card components built with React, Framer Motion and Tailwind CSS. Perfect for portfolios, landing pages, and creative UI."
        />
        
        {/* Open Graph (usado por Instagram, WhatsApp, LinkedIn, Facebook...) */}
        <meta property="og:title" content="Lodex Studio Cards Demo" />
        <meta
          property="og:description"
          content="6 unique interactive card components: Tilt, Swipe, Drag, Shimmer, Outline, and Color Change."
        />
        <meta property="og:image" content="/demo-grid-screenshot.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lodex Studio" />
      </Helmet>

      <DemoGrid />
    </>
  );
}

export default LandingPage;
