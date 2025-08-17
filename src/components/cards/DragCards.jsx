import React, { useRef, useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Draggable Cards
function DragCards() {
  return (
    <div className="relative grid w-full place-content-center overflow-hidden min-h-screen ">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-500 md:text-[190px]">
        LodeX Studio
      </h2>
      <FloatingImages />
    </div>
  );
}

// Floating Images
const FloatingImages = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <InteractiveCard
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1532798369041-b33eb576ef16?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <InteractiveCard
        containerRef={containerRef}
        src="/lodexstudio-logo.png"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <InteractiveCard
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <InteractiveCard
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <InteractiveCard
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1646602481827-0fc1d2344687?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
        title="Example image"
      />
      <InteractiveCard
        containerRef={containerRef}
        src="/Lodney-Santos-anime.png"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

// Interactive Card Component
const InteractiveCard = ({ containerRef, src, alt, top, left, rotate, className }) => {
    // State for z-index
  const [zIndex, setZIndex] = useState(0);

  // Update z-index on mouse down
  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    // Find the highest z-index among siblings
    let maxZIndex = -Infinity;

    // Find the highest z-index among siblings
    els.forEach((el) => {
      let zIndex = parseInt(
        // Get the computed z-index of the element
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      // Update the z-index state
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};

export default DragCards;
