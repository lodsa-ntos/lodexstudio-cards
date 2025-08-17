import React, { useEffect, useState } from "react";

function OutlineCards() {
  const cards = [
    {
      id: 1,
      title: "Popular fair",
      img: "https://plus.unsplash.com/premium_photo-1701454740269-633e9e0a3912?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Summer beach",
      img: "https://images.unsplash.com/photo-1754901350480-c0fdd1a427b4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Culture",
      img: "https://images.unsplash.com/photo-1742201473141-07daabc7a327?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Cursor state
  const [isHovered, setIsHovered] = useState(false);
  // Cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Follow the mouse position
  useEffect(() => {
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-8 sm:flex-row">
      {/* Cursor custom */}
      { !isHovered && (
        <div
        className="fixed w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none transition-transform duration-500"
        style={{ left: position.x - 16, top: position.y - 16 }}
      >
      </div>
      )}

      {/* Card links */}
      {cards.map((card) => (
        <a
          key={card.id}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="#"
          className="group relative flex w-full flex-col overflow-hidden rounded-lg shadow-xl shadow-neutral-900/30  hover:outline hover:outline-4 hover:outline-purple-500"
        >
          {/* Image wrapper: remove fixed square, let image ratio define height. Use object-cover for better fit. */}
          <img
            src={card.img}
            alt={card.title}
            loading="lazy"
            className="h-full w-full max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient + content overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5">
            <h3 className="text-xl font-medium text-white md:text-2xl drop-shadow">
              {card.title}
            </h3>

            {/* Card icon */}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white drop-shadow"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}

export default OutlineCards;
