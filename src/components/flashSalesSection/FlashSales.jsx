'use client';
import React from 'react';
import Countdown from 'react-countdown';
import TitleHighlight from '../TitleHighlight';

const FlashSales = () => {

  return (
    <div>
        <TitleHighlight text="Today's" />
        <div className="flex items-center justify-start gap-44">
          <h2 className="text-4xl font-bold">Flash Sales</h2>
          <div className="flex items-center space-x-6 mt-2">
            <Countdown
              date={Date.now() + 1000 * 60 * 60 * 24}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex space-x-6 text-4xl font-bold">
                  <div className="text-center">
                    <div className="text-lg font-semibold">Days</div>
                    <span>{days}</span>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">Hours</div>
                    <span>{hours}</span>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">Minutes</div>
                    <span>{minutes}</span>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">Seconds</div>
                    <span>{seconds}</span>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
  );
};

export default FlashSales;
