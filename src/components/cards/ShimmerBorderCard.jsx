"use client";

import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";

function ShimmerBorderCard({ children }) {
    return (
        <GlobalContainer>
            <style>{`
                @keyframes shimmer {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                .animated-border {
                    background: #374151; /* static grey border */
                }
                .group:hover .animated-border {
                    background: linear-gradient(
                        110deg,
                        #374151 0%,
                        #c7d2fe 25%,
                        #374151 50%,
                        #c7d2fe 75%,
                        #374151 100%
                    );
                    background-size: 200% 100%;
                    animation: shimmer 3.5s linear infinite;
                }
            `}</style>
            <div className="px-4 py-12">
                <div className="group relative mx-auto w-full max-w-sm">
                    <div className="animated-border relative overflow-hidden rounded-lg p-[2px] transition-all duration-500 ease-in-out group-hover:scale-105">
                        <div className="relative z-10 flex flex-col items-center justify-center rounded-md bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
                                <polyline points="13 11 9 17 15 17 11 23"></polyline>
                            </svg>
                            {children || (
                                <p className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
                                    Shimmer Border Card
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </GlobalContainer>
    );
}

export default ShimmerBorderCard;
