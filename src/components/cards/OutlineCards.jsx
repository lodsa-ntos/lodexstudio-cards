import React from 'react'

function OutlineCards() {
    const cards = [
        { id: 1, title: 'Outline Card', img: '/Lodney-Santos-anime.png' },
        { id: 2, title: 'Outline Card', img: '/Lodney-Santos-anime.png' },
        { id: 3, title: 'Outline Card', img: '/Lodney-Santos-anime.png' }
    ]

    return (
      <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-8 sm:flex-row">
        {cards.map((card) => (
          <a
            key={card.id}
            href="#"
            className="group relative flex w-full flex-col overflow-hidden rounded-lg shadow-xl shadow-neutral-900/30"
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

export default OutlineCards