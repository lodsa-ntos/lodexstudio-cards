import React from 'react'
import GlobalContainer from './GlobalContainer';

function SectionContainer({ children }) {
  return (
    <div className='min-h-screen w-full py-12 sm:py-16 md:py-20 lg:py-24'>
        <GlobalContainer>{children}</GlobalContainer>
    </div>
  );
}

export default SectionContainer