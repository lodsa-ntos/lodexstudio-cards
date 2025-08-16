import React from 'react'

function GlobalContainer({ children }) {
  return (
    <div className='max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 w-full'>
        {children}
    </div>
  );
}

export default GlobalContainer;