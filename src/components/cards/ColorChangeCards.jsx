import React from "react";

function ColorChangeCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">

        <div className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative">
            <div className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"></div>

            <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              <div>
                <h4>Color Change Card</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aliquid distinctio obcaecati quisquam veritatis, facere quia mollitia quod dolorum, recusandae ex nostrum eum doloremque, libero illum fugit voluptatibus dolore voluptas.</p>
              </div>
            </div>
        </div>

    </div>
  );
}

export default ColorChangeCards;
