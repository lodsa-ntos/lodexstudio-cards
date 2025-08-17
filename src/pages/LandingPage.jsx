import React from "react";
import Hero from "../components/HeroSection";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Hero />
      <div className="flex justify-center mt-8">
        <Link
          to="/demo"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition-colors"
        >
          View All Cards Demo
        </Link>
      </div>
    </>
  );
}

export default LandingPage;
