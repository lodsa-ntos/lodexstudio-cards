import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";

// Sample data for the swipe cards "array"
const swipeCardsData = [
  {
    id: 1,
    url: "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1706550632237-24b904d8097a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1706550632260-ced24a56f19a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1647412967532-427ac4c6f16c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1579675109935-a12dd235c97f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1604272490759-7c465473958a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Function to render each clothing card
function ClothesCard({ id, url, setCards, cards }) {
  // State to manage the dragging state
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  // Calculate the rotation and opacity based on the drag position
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  // Determine if the card is the front card
  const isFront = id === cards[cards.length - 1].id;

  // Calculate the rotation of the card
  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  // Handle the end of the drag event
  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards(prev => {
        const remaining = prev.filter(v => v.id !== id);
        // If all cards are gone, restart deck after a short delay
        if (remaining.length === 0) {
          setTimeout(() => {
            setCards(swipeCardsData);
          }, 300);
        }
        return remaining;
      });
    }
    // Reset the position if the card is not swiped
    setIsDragging(false);
  };

  // Handle the start of the drag event
  const handleDragStart = () => {
    setIsDragging(true);
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className="w-[300px] h-[400px] rounded-lg object-cover absolute select-none"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        cursor: isFront ? (isDragging ? "grabbing" : "grab") : "default",
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    />
  );
};

// Function to render the swipe cards
function SwipeCards() {
  // State to manage the images
  const [imagesCard, setImagesCard] = useState(swipeCardsData);

  return (
    <div
      className="grid h-[500px] w-full place-items-center bg-neutral-100"
      style={{
        // Set the background image and its properties
        backgroundImage:
          "linear-gradient(135deg, rgba(15,32,39,0.85) 0%, rgba(120, 144, 194, 1) 50%, rgba(0,85,190,12) 100%), url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Render the clothing cards */}
      {imagesCard.map((card) => {
        return (
          <ClothesCard
            key={card.id}
            cards={imagesCard}
            setCards={setImagesCard}
            {...card}
          />
        );
      })}
    </div>
  );
};

export default SwipeCards;
