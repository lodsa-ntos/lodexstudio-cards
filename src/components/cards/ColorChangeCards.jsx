import React from "react";

function ColorChangeCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
      <div className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative">
        <div className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500">

            <img src="https://plus.unsplash.com/premium_photo-1673139301825-aaceb3df6a18?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
        </div>
            
        <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
          <div>
            <a className="group inline-flex items-center gap-2 text-xl font-semibold cursor-pointer">
              {/** <!-- Window showing only 1 line --> */}
              <span className="relative inline-block h-[1.2em] overflow-hidden">
                <span className="block transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-[1.2em]">
                  <span className="block leading-[1.2]">Color</span>
                  <span className="block leading-[1.2]">Change</span>
                </span>
              </span>
            </a>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              aliquid distinctio obcaecati quisquam veritatis, facere quia
              mollitia quod dolorum, recusandae ex nostrum eum doloremque,
              libero illum fugit voluptatibus dolore voluptas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorChangeCards;
