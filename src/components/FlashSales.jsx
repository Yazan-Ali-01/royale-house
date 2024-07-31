// app/FlashSales.js
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Countdown from 'react-countdown';

const FlashSales = () => {
  // Example products
  const products = [
    { id: 1, title: 'HAVIT HV-G92 Gamepad', oldPrice: 120, newPrice: 100, discount: 20, image: '/images/gamepad.jpg', rating: 4.5 },
    { id: 2, title: 'AK-900 Wired Keyboard', oldPrice: 80, newPrice: 60, discount: 25, image: '/images/keyboard.jpg', rating: 4.7 },
    { id: 3, title: 'IPS LCD Gaming Monitor', oldPrice: 400, newPrice: 370, discount: 20, image: '/images/monitor.jpg', rating: 4.8 },
    // Add more products as needed
  ];

  return (
    <div className="my-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Today's Flash Sales</h2>
        <Countdown date={Date.now() + 1000 * 60 * 60 * 24} renderer={({ hours, minutes, seconds }) => (
          <span className="text-xl">
            {hours} : {minutes} : {seconds}
          </span>
        )} />
      </div>
      <div className="relative">
        <Carousel>
          <CarouselContent className="flex space-x-4">
            {products.map(product => (
              <CarouselItem key={product.id} className="bg-white shadow rounded-lg p-4">
                <div className="relative">
                  <Image src={product.image} alt={product.title} layout="responsive" width={200} height={200} className="rounded-t-lg" />
                  {product.discount > 0 && (
                    <span className="absolute top-0 left-0 bg-red-500 text-white text-xs p-1 rounded-bl-lg">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-sm font-medium">{product.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-500 line-through">${product.oldPrice}</span>
                  <span className="text-red-500">${product.newPrice}</span>
                </div>
                <div className="mt-2">
                  <span className="text-yellow-500">{product.rating} ★</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"/>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"/>
        </Carousel>
      </div>
    </div>
  );
};

export default FlashSales;
