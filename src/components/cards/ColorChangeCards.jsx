import React from "react";

function ColorChangeCards() {
  const cards = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1673139301825-aaceb3df6a18?q=80&w=1073&auto=format&fit=crop",
      title: ["Color", "Change"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid distinctio obcaecati quisquam veritatis mollitia quod dolorum recusandae libero illum fugit voluptas.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1755004609166-f20e6ecd22c4?q=80&w=1073&auto=format&fit=crop",
      title: ["Color", "Change"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid distinctio obcaecati quisquam veritatis mollitia quod dolorum recusandae libero illum fugit voluptas.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1728942756635-0407678db122?q=80&w=1170&auto=format&fit=crop",
      title: ["Color", "Change"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid distinctio obcaecati quisquam veritatis mollitia quod dolorum recusandae libero illum fugit voluptas.",
    },
    {
      id: 4,
      img: "https://plus.unsplash.com/premium_photo-1719862007265-34e67f3943b3?q=80&w=1332&auto=format&fit=crop",
      title: ["Color", "Change"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid distinctio obcaecati quisquam veritatis mollitia quod dolorum recusandae libero illum fugit voluptas.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
      {cards.map((card) => {
        const titleId = `color-change-title-${card.id}`;
        const descId = `color-change-desc-${card.id}`;
        return (
          <article key={card.id} className="w-full h-64">
            <a
              href="#"
              className="group relative block w-full h-full rounded-lg overflow-hidden focus:outline-none focus-visible:ring-4 ring-indigo-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900"
              aria-labelledby={titleId}
              aria-describedby={descId}
            >
              <figure className="absolute inset-0">
                <img
                  src={card.img}
                  alt="Vibrant abstract color gradient background"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out filter grayscale group-hover:grayscale-0 motion-safe:group-hover:scale-110"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-slate-900/50 transition-colors duration-500 group-hover:bg-slate-900/0"
                />
              </figure>

              <div className="relative z-10 h-full p-4 text-slate-100 flex flex-col justify-between">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-3xl transition-transform duration-500 ml-auto group-hover:-rotate-45 group-focus-visible:-rotate-45"
                  height="1em"
                  width="1em"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>

                <div>
                  <h2
                    id={titleId}
                    className="inline-flex items-center gap-2 text-3xl font-semibold"
                  >
                    <span className="relative inline-block h-[1.2em] overflow-hidden">
                      <span className="block transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-[1.2em] motion-reduce:transform-none">
                        {card.title.map((line) => (
                          <span key={line} className="block leading-[1.2]">
                            {line}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span className="sr-only">card</span>
                  </h2>
                  <p
                    id={descId}
                    className="mt-2 text-base leading-relaxed text-slate-100/90 max-w-prose"
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            </a>
          </article>
        );
      })}
    </div>
  );
}

export default ColorChangeCards;
