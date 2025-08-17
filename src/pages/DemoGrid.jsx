import TiltShineCard from "../components/cards/TiltShineCard";
import ShimmerBorderCard from "../components/cards/ShimmerBorderCard";
import DragCards from "../components/cards/DragCards";
import OutlineCards from "../components/cards/OutlineCards";
import ColorChangeCards from "../components/cards/ColorChangeCards";
import SwipeCards from "../components/cards/SwipeCards";

export default function DemoGrid() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-white mb-10 tracking-tight">
        Lodex Studio Cards Demo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="flex justify-center">
          <TiltShineCard />
        </div>
        <div className="flex justify-center">
          <SwipeCards />
        </div>
        <div className="flex justify-center">
          <ShimmerBorderCard />
        </div>
      </div>

      <div className="">
        <div className="flex justify-center">
          <DragCards />
        </div>
      </div>

      <div className="py-20">
        <div className="flex justify-center">
          <OutlineCards />
        </div>
      </div>

      <div className="py-20">
        <div className="flex justify-center">
          <ColorChangeCards />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <img src="/lodex-badge.svg" alt="by LodeX Studio" className="h-8" />
      </div>
    </div>
  );
}
