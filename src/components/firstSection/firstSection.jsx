// app/firstSection.js
import React from 'react';
import Sidebar from './Sidebar';
import CarouselSection from './CarouselSection';

const FirstSection = () => {
  return (
    <div className="flex">
    <div className="w-1/4 border-r border-gray-300 p-4">
      <Sidebar />
    </div>
      <div className="w-3/4 p-4">
      <CarouselSection />
      </div>
    </div>
  );
};

export default FirstSection;
