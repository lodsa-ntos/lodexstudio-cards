import React from 'react'

function OutlineCards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-5xl items-center justify-center gap-8'>
        {/* Card 1 */}
        <a href="" className='outline-card flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]'>
          <div className='pointer-events-none flex items-center justify-between bg-gradient-to-t from-black to-black/0 p-6 pt-8 text-xl font-medium text-white md:text-2xl'>
            <h3>Outline Card</h3>
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </a>
        
    </div>
  )
}

export default OutlineCards