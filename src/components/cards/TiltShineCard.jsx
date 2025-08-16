import React, { useRef } from "react";
import PropTypes from "prop-types";

// Tilt and shine effect for the card
function TiltShineCard({
  image = "/Lodney-Santos-anime.png",
  maxTilt = 12, // graus
  shineOpacity = 0.45,
  className = "",
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const px = x / r.width;
    const py = y / r.height;

    const rx = (py - 0.5) * -2 * maxTilt; // rotateX
    const ry = (px - 0.5) * 2 * maxTilt; // rotateY
    el.style.transform = `perspective(1200px) rotateY(${ry}deg) rotateX(${rx}deg)`;

    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg)`;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  };

  return (
    <div className={`grid place-items-center ${className}`}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="relative w-[320px] h-[440px] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform duration-150 ease-out will-change-transform bg-zinc-900"
      style={{
            // “spotlight” do shine
            // dica: usa mix-blend-screen para dar brilho sem lavar as sombras
            ["--shine"]: `radial-gradient(600px 600px at var(--mx,50%) var(--my,50%), rgba(255,255,255,${shineOpacity}) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 60%)`,
          }}
        >

         {/* image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>

        </div>
      </div>
    </div>
  );
}

TiltShineCard.propTypes = {
  image: PropTypes.node,
  maxTilt: PropTypes.number,
  shineOpacity: PropTypes.number,
  className: PropTypes.string,
};

export default TiltShineCard;
