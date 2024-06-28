"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/FLB-eiendom-logo.webp" alt="Logo" style={{ maxHeight: '50px', width: 'auto' }} />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="text-gray-800 hover:text-blue-500 px-4 py-2">Hjem</a>
          <Link href="/Eiendommer">
            <span className="text-gray-800 hover:text-blue-500 px-4 py-2">Eiendommer</span>
          </Link>
          
          <a href="/ledige-boliger" className="text-gray-800 hover:text-blue-500 px-4 py-2">Ledige boliger</a>
          <a href="/om-oss" className="text-gray-800 hover:text-blue-500 px-4 py-2">Om oss</a>
          <a href="/partnere" className="text-gray-800 hover:text-blue-500 px-4 py-2">Partnere</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-transparent text-gray-800 px-4 py-2 hover:text-blue-500">
            <span className="hidden sm:block">Søk</span>
          </button>
          
          <Link href="/Kontakt">
            <span className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded transition duration-300">Kontakt</span>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-800 hover:text-blue-500 px-4 py-2">Hjem</a>
            <a href="/eiendommer" className="block text-gray-800 hover:text-blue-500 px-4 py-2">Eiendommer</a>
            <a href="/ledige-boliger" className="block text-gray-800 hover:text-blue-500 px-4 py-2">Ledige boliger</a>
            <a href="/om-oss" className="block text-gray-800 hover:text-blue-500 px-4 py-2">Om oss</a>
            <a href="/partnere" className="block text-gray-800 hover:text-blue-500 px-4 py-2">Partnere</a>
            <a href="/Kontakt" className="block text-white bg-black hover:bg-gray-800 px-4 py-2 rounded transition duration-300">Kontakt</a>
          </div>
        </div>
      )}
    </header>
  );
}
