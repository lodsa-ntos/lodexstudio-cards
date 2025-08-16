import React from "react";

const card = document.querySelector(".card");
const shine = document.querySelector(".shine");

card.addEventListener("mousemove", (e) => {

// Get card dimensions and mouse position
  const { left, top, width, height } = card.getBoundingClientRect();

  // Get mouse position relative to the card
  const x = e.clientX - left;
  const y = e.clientY - top;

  // Calculate rotation angles "Tilt"
  const rotateX = ((y - height) / 0.5) * 20;
  const rotateY = ((x - width) / 0.5) * 20;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Update shine effect position "Shine"
  shine.style.setProperty("--x", `${x}px`);
  shine.style.setProperty("--y", `${y}px`);

  // Reset on mouse leave
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    shine.style.setProperty("--x", `50%`);
    shine.style.setProperty("--y", `50%`);
  });
});

// Tilt and shine effect for the card
function TiltShineCard() {
  return (
    <div className="card">
      <span className="shine"></span>
      <img src="/Lodney-Santos-anime.png" alt="foto" />
    </div>
  );
}

export default TiltShineCard;
