// components/Footer.js
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-2 mt-4 px-7">
      <div className=" mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="text-md font-bold mb-2">Exclusively</h3>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md focus:outline-none text-black w-32"
            />
            <button className="bg-red-500 p-2 rounded-r-md">Subscribe</button>
          </div>
        </div>
        <div>
          <h3 className="text-md font-bold mb-2">Support</h3>
          <p className="mb-2">21st Floor, The Binary Tower, Marasi Drive, Business Bay, Dubai</p>
          <p className="mb-2">info@royalclass.group</p>
          <p>+971 42 408 999</p>
        </div>
        <div>
          <h3 className="text-md font-bold mb-2">Account</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-bold mb-2">Quick Link</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-bold mb-8">Follow US</h3>
          <div className="flex space-x-4 -ml-2">
            <FiFacebook className="text-xl" />
            <FiTwitter className="text-xl" />
            <FiInstagram className="text-xl" />
            <FiLinkedin className="text-xl" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 py-4 text-center">
        <p className="text-gray-500 text-sm">
          © Copyright Royal Class Group 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
