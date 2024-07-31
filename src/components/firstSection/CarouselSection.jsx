// app/CarouselSection.js
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

const CarouselSection = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <Carousel>
        <CarouselContent className="flex justify-center items-center">
          <CarouselItem className="flex justify-center">
            <Image 
              src="/images/iphone_car.png" 
              alt="Slide 1" 
              layout="intrinsic" 
              width={1200} 
              height={600} 
              className="w-full h-auto" 
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <Image 
              src="/images/iphone_car.png" 
              alt="Slide 2" 
              layout="intrinsic" 
              width={1200} 
              height={600} 
              className="w-full h-auto z-10" 
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <Image 
              src="/images/iphone_car.png" 
              alt="Slide 3" 
              layout="intrinsic" 
              width={1200} 
              height={600} 
              className="w-full h-auto" 
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
