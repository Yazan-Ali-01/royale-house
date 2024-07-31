// app/sidebar.js
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const Sidebar = () => {
  const categories = [
    { title: "Woman's Fashion", sublinks: ["Dresses", "Shirts", "Skirts", "Accessories"] },
    { title: "Men's Fashion", sublinks: ["Shirts", "Trousers", "Shoes", "Accessories"] },
    { title: "Electronics" },
    { title: "Home & Lifestyle" },
    { title: "Medicine" },
    { title: "Sports & Outdoor" },
    { title: "Baby's & Toys" },
    { title: "Groceries & Pets" },
    { title: "Health & Beauty" },
  ];

  return (
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="relative group">
            <div className="flex justify-end items-center py-2 px-3 hover:bg-gray-100 cursor-pointer">
              <span className="text-sm mr-8">{category.title}</span>
              {category.sublinks && <FiChevronRight className="text-gray-500" />}
            </div>
            {category.sublinks && (
              <div className="absolute left-full top-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg hidden group-hover:block z-50">
                <ul className="py-2">
                  {category.sublinks.map((sublink, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 z-50">
                      {sublink}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
  );
};

export default Sidebar;
