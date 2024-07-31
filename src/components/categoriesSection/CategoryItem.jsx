'use client';
import React, { useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FiMonitor, FiBox, FiPackage, FiShoppingCart, FiCoffee, FiTruck } from 'react-icons/fi';
import { GiRunningShoe, GiClothes } from 'react-icons/gi';

const iconMap = {
  Clothes: GiClothes,          // Icon for clothing
  Electronics: FiMonitor,      // Monitor for electronics
  Furniture: FiPackage,        // Package for furniture
  Shoes: GiRunningShoe,        // Running shoe for shoes
  Miscellaneous: FiBox,        // Box for miscellaneous items
  'Junk Food': FiCoffee,       // Coffee for junk food/snacks
  cranes111: FiTruck,          // Truck for cranes
  'Crane 1721970471602': FiTruck, // Truck for cranes
  'Tasty Soft Fish': FiShoppingCart, // Shopping cart for food
  electronics: FiMonitor,      // Monitor for electronics (case-sensitive difference)
  groceries: FiShoppingCart,   // Shopping cart for groceries
  обувь: GiRunningShoe,        // Running shoe for "обувь" (shoes in Russian)
  dsdasđsadsada: FiBox,        // Default box icon for undefined items
  default: FiBox               // Default icon
};

const CategoryItem = ({ name }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const IconComponent = iconMap[name] || iconMap.default;

  const categoryParam = searchParams.get('category');
  const isActive = categoryParam === name;

  const createQueryString = useCallback(
    (key, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleClick = () => {
    router.push(pathname + '?' + createQueryString('category', name), { scroll: false });
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center min-w-64 h-32 rounded-md cursor-pointer transition-colors duration-200 ${
        isActive ? 'bg-red-500 text-white' : 'border bg-white'
      } hover:bg-red-500 hover:text-white`}
    >
      {IconComponent && <IconComponent className="text-3xl" />}
      <span className="mt-2">{name}</span>
    </div>
  );
};

export default CategoryItem;
