// Navbar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    const currentPath = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact' },
        { href: '/about', label: 'About' },
        { href: '/signup', label: 'Sign Up' }
    ];

    return (
        <nav className='w-full h-fit mx-auto border-b px-16'>
            <div className="container flex justify-between h-[14vh] items-center">
                <div className="logo">
                    <Link href={'/'}>
                        <h4 className='text-2xl tracking-tight font-bold'>
                            Royal Glass
                        </h4>
                    </Link>
                </div>

                <div className="links flex gap-10 text-slate-900">
                    {navLinks.map(link => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className={currentPath === link.href ? "active-link" : ""}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-gray-100 border border-gray-300 rounded-full pl-3 pr-10 py-1 text-sm"
                        />
                        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                    <FiHeart className="text-gray-700 cursor-pointer" size={24} />
                    <FiShoppingCart className="text-gray-700 cursor-pointer" size={24} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
