import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const AnnouncementBanner = () => {
  return (
    <div className="bg-black text-white py-2 px-4 flex justify-between items-center">
      <div className="flex-1 text-center">
        <span className="text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a href="/shop" className="underline text-green-500 ml-2">Shop Now</a>
        </span>
      </div>
      <div className="text-sm text-white">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-1 pr-20">
              <span>English</span>
              <span className='text-sm'>▼</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Spanish</DropdownMenuItem>
            <DropdownMenuItem>French</DropdownMenuItem>
            {/* Add more languages as needed */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
