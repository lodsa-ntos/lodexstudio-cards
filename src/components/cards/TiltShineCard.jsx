import React, { useRef } from "react";
import PropTypes from "prop-types";

// Tilt and shine effect for the card
function TiltShineCard({
  image = "/lodney-santos-developer.jpg",
  imageAlt = "Profile illustration",
  maxTilt = 12,
  shineOpacity = 0.55,
  className = "",
}) {
    // Create a ref to the card element
  const ref = useRef(null);
  const motionSafe =
    typeof window !== "undefined"
      ? !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : true;

  // Initialize state
  const state = useRef({
    rx: 0,
    ry: 0,
    targetRx: 0,
    targetRy: 0,
    raf: null,
  });

  // Apply the tilt effect with smooth animation
  const apply = () => {
    const el = ref.current;
    if (!el) return;
    const s = state.current;
    // Lerp for smoother motion
    s.rx += (s.targetRx - s.rx) * 0.12;
    s.ry += (s.targetRy - s.ry) * 0.12;
    el.style.transform = `perspective(1100px) rotateX(${s.rx.toFixed(
      2
    )}deg) rotateY(${s.ry.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`;
    // Continue the animation if not at target
    if (
      Math.abs(s.rx - s.targetRx) > 0.01 ||
      Math.abs(s.ry - s.targetRy) > 0.01
    ) {
      s.raf = requestAnimationFrame(apply);
    } else {
      s.raf = null;
    }
  };

  // Set the target rotation values
  const setTarget = (rx, ry) => {
    const s = state.current;
    s.targetRx = rx;
    s.targetRy = ry;
    if (!s.raf) s.raf = requestAnimationFrame(apply);
  };

  // Compute the tilt values based on pointer position
  const computeTilt = (clientX, clientY) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = clientX - r.left;
    const y = clientY - r.top;
    const px = x / r.width;
    const py = y / r.height;
    const rx = (py - 0.5) * -2 * maxTilt;
    const ry = (px - 0.5) * 2 * maxTilt;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (motionSafe) setTarget(rx, ry);
  };

  // Handle pointer movement
  const handlePointerMove = (e) => {
    // Prevent default behavior for touch devices
    if (!motionSafe) return;
    // Check for touch events
    if (e.touches && e.touches.length) {
      computeTilt(e.touches[0].clientX, e.touches[0].clientY);
    } else {
      computeTilt(e.clientX, e.clientY);
    }
  };

  // Reset the tilt values
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    state.current.targetRx = 0;
    state.current.targetRy = 0;
    // Reset the transform style
    if (motionSafe) {
      if (!state.current.raf) state.current.raf = requestAnimationFrame(apply);
    } else {
      el.style.transform = "none";
    }
    // Reset the position variables
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  };

  // Handle keyboard input
  const handleKey = (e) => {
    if (!motionSafe) return;
    const step = maxTilt * 0.35;
    let { targetRx, targetRy } = state.current;
    if (e.key === "ArrowUp") targetRx = Math.max(-maxTilt, targetRx - step);
    else if (e.key === "ArrowDown")
      targetRx = Math.min(maxTilt, targetRx + step);
    else if (e.key === "ArrowLeft")
      targetRy = Math.max(-maxTilt, targetRy - step);
    else if (e.key === "ArrowRight")
      targetRy = Math.min(maxTilt, targetRy + step);
    else if (e.key === "Escape") {
      targetRx = 0;
      targetRy = 0;
    } else return;
    e.preventDefault();
    setTarget(targetRx, targetRy);
  };

  return (
    // Card container
    <div className={`grid place-items-center ${className}`}>
      <div
        ref={ref}
        tabIndex={0}
        aria-label={imageAlt}
        role="img"
        onMouseMove={handlePointerMove}
        onTouchMove={handlePointerMove}
        onMouseLeave={reset}
        onTouchEnd={reset}
        onBlur={reset}
        onKeyDown={handleKey}
        className="group relative w-[320px] h-[440px] rounded-2xl overflow-hidden shadow-[0_50px_80px_rgba(0,0,0,0.40)] outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 transition-transform duration-150 ease-out will-change-transform bg-zinc-950"
        style={{
          // Shine position variables (fallback center)
          "--mx": "50%",
          "--my": "50%",
          // For the glare gradient
          "--shine-opacity": shineOpacity,
        }}
      >
        {/* Image */}
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
          draggable="false"
        />

        {/* Accessible decorative overlays */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Dynamic glare tied to pointer */}
          <div
            className="absolute inset-0 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,var(--shine-opacity)) 0%, rgba(255,255,255,0.05) 28%, transparent 60%)`,
            }}
          />

          {/* Diagonal sweep */}
          <span
            className="pointer-events-none absolute top-[-10%] left-[35%] h-[140%] w-[50%] rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent mix-blend-screen opacity-0 group-hover:opacity-100 translate-x-[-120%] group-hover:translate-x-[160%] motion-safe:transition-transform motion-safe:duration-[1100ms] ease-out"
            aria-hidden="true"
          />

          {/* Contrast / vignette */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_95%)]"
            aria-hidden="true"
          />

          {/* Soft border + focus aid */}
          <div
            className="absolute inset-0 ring-1 ring-white/15 rounded-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle top edge light for depth */}
        </div>
      </div>
    </div>
  );
}

// Prop types
TiltShineCard.propTypes = {
  image: PropTypes.node,
  maxTilt: PropTypes.number,
  shineOpacity: PropTypes.number,
  className: PropTypes.string,
};

export default TiltShineCard;
