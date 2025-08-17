import TiltShineCard from "../components/cards/TiltShineCard";
import ShimmerBorderCard from "../components/cards/ShimmerBorderCard";
import DragCards from "../components/cards/DragCards";
import OutlineCards from "../components/cards/OutlineCards";
import ColorChangeCards from "../components/cards/ColorChangeCards";
import SwipeCards from "../components/cards/SwipeCards";
import { Helmet } from "react-helmet";

export default function DemoGrid() {
  // Section definitions
  const sections = [
    {
      title: "Interactive Effects",
      subtitle: "Tilt & Shimmer based interactions",
      items: [
        { Comp: TiltShineCard, label: "Tilt Shine Card" },
        { Comp: ShimmerBorderCard, label: "Shimmer Border Card" },
        // { Comp: HoverCard, label: "Hover Effect Card" } // (future)
      ],
    },
    {
      title: "Motion Cards",
      subtitle: "Drag & Swipe kinetic UI patterns",
      items: [
        { Comp: DragCards, label: "Drag Cards" },
        { Comp: SwipeCards, label: "Swipe Cards" },
        // { Comp: ShuffleCards, label: "Shuffle Cards" } // (future)
      ],
    },
    {
      title: "Content / UI Cards",
      subtitle: "Layout, outline and color adaptation for UI.",
      items: [
        { Comp: OutlineCards, label: "Outline Cards" },
        { Comp: ColorChangeCards, label: "Color Change Cards" },
      ],
    },
  ];

  const CardPreview = ({ Comp, label }) => (
    <div className="flex flex-col items-center justify-start gap-4">
      <p className="text-center text-sm md:text-base text-gray-300">{label}</p>
      <Comp />
      {Comp}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Lodex Studio Cards Demo</title>
        <meta
          name="description"
          content="Collection of 6 interactive React card components with Framer Motion + Tailwind CSS. Perfect for portfolios, landing pages, and creative UI."
        />
        <meta property="og:title" content="Lodex Studio Cards Demo" />
        <meta
          property="og:description"
          content="6 interactive card components for modern React projects."
        />
        <meta property="og:image" content="/public/demo-grid-screenshot.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 py-16 px-4">
        {/* Hero */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-4 pb-16">
          <img
            src="/lodexstudio-logo-secundario.png"
            alt="lodex.studio logo"
            className="h-8 md:h-10 lg:h-12 w-auto object-contain"
          />
          <h1 className="text-4xl font-bold text-center text-white tracking-tight">
            Lodex Studio Cards Demo
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-400 max-w-2xl">
            Collection of interactive cards built with React, Framer Motion &
            Tailwind CSS. Organised by purpose for quick discovery.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-40 py-20max-w-7xl mx-auto">
          {sections.map(({ title, subtitle, items }, i) => (
            <section key={title + i} className="space-y-10">
              <header className="px-2 md:px-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {title}
                </h2>
                <p className="mt-2 text-gray-400 text-sm md:text-base max-w-2xl">
                  {subtitle}
                </p>
              </header>

              {title === "Interactive Effects" ? (
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
                  {items.map(({ Comp, label }, j) => (
                    <CardPreview key={label + j} Comp={Comp} label={label} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-20">
                  {items.map(({ Comp, label }, j) => (
                    <CardPreview key={label + j} Comp={Comp} label={label} />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-28 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center lg:flex-row gap-2 text-xs">
            <p className="text-gray-400 transition-colors duration-500 text-sm font-Satoshi mr-2">
              © {new Date().getFullYear()} LodeX Studio. All rights reserved.
            </p>
            <div className="flex justify-center flex-wrap items-center gap-2">
              <a
                href="https://github.com/lodsa-ntos/lodexstudio-cards"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="https://lodexstudio.com/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Site
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="https://www.instagram.com/lodex.studio/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="italic">
            <p className="text-gray-400 transition-colors duration-500 text-xs font-Satoshi">
              Part of the Lodex Studio UI Experiments series
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
