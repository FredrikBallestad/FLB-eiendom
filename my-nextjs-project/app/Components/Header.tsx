import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Header.tsx
export default function Header() {
    // Komponent logikk, om nødvendig...
  
    return (
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Husk å bytte ut sti og størrelser til ditt faktiske bilde */}
            <img src="/images/FLB-eiendom-logo.webp" alt="Logo" style={{ maxHeight: '50px', width: 'auto' }} />
          </div>
  
          {/* Navigasjonslenker */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-gray-800 hover:text-blue-500 px-4 py-2">Hjem</a>
            <a href="/eiendommer" className="text-gray-800 hover:text-blue-500 px-4 py-2">Eiendommer</a>
            <a href="/ledige-boliger" className="text-gray-800 hover:text-blue-500 px-4 py-2">Ledige boliger</a>
            <a href="/om-oss" className="text-gray-800 hover:text-blue-500 px-4 py-2">Om oss</a>
            <a href="/partnere" className="text-gray-800 hover:text-blue-500 px-4 py-2">Partnere</a>
          </div>
  
          {/* Søke- og kontakt-knapper */}
          <div className="flex items-center space-x-4">
            <button className="bg-transparent text-gray-800 px-4 py-2 hover:text-blue-500">
              <span className="hidden sm:block">Søk</span>
              {/* Bruk et ikonbibliotek eller en SVG for søkeikonet her */}
            </button>
            <button className="text-white bg-black hover:bg-gray-800 px-4 py-2 rounded transition duration-300">
              Ta kontakt
            </button>
          </div>
        </nav>
      </header>
    );
  }
  