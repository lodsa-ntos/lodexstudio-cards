import TiltShineCard from "../components/cards/TiltShineCard";
import ShimmerBorderCard from "../components/cards/ShimmerBorderCard";
import DragCards from "../components/cards/DragCards";
import OutlineCards from "../components/cards/OutlineCards";
import ColorChangeCards from "../components/cards/ColorChangeCards";
import SwipeCards from "../components/cards/SwipeCards";

export default function DemoGrid() {
    const gridItems = [
        { Comp: TiltShineCard, label: "Tilt Shine Card" },
        { Comp: SwipeCards, label: "Swipe Cards" },
        { Comp: ShimmerBorderCard, label: "Shimmer Border Card" },
    ];

    const singleSections = [
        { Comp: DragCards, label: "Drag Cards" },
        { Comp: OutlineCards, label: "Outline Cards" },
        { Comp: ColorChangeCards, label: "Color Change Cards" },
    ];

    const CardItem = ({ Comp, label }) => (
        <div className="flex flex-col items-center justify-center gap-5">
            <Comp />{Comp}
            <p className="mt-2 text-center text-xl text-white">{label}</p>
        </div>
    );

    const SingleSection = ({ Comp, label }) => (
        <div className="py-20">
            <div className="flex flex-col items-center justify-center gap-5">
                <Comp />{Comp}
                <p className="mt-4 text-center text-xl text-white">{label}</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 py-16 px-4">
            <h1 className="text-4xl font-bold text-center text-white mb-10 tracking-tight">
                Lodex Studio Cards Demo
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {gridItems.map(({ Comp, label }, i) => (
                    <CardItem key={label + i} Comp={Comp} label={label} />
                ))}
            </div>

            {singleSections.map(({ Comp, label }, i) => (
                <SingleSection key={label + i} Comp={Comp} label={label} />
            ))}

            <div className="mt-12 flex justify-center">
                <img src="/lodex-badge.svg" alt="by LodeX Studio" className="h-8" />
            </div>
        </div>
    );
}
