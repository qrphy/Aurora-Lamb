"use client"

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 dark:bg-black/70 backdrop-blur border-b border-gray-100 dark:border-white/5 z-50" role="banner">
      <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex-none">
          <Link href="/" className="inline-flex items-center text-lg font-bold text-gray-900 dark:text-gray-100 transition" aria-label="Aurora Lamb - Go to homepage">
            Aurora Lamb
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center" role="navigation" aria-label="Page sections">
          <ul className="inline-flex items-center gap-6 m-0 p-0 list-none">
            <li><a href="/features" className="text-gray-800 dark:text-gray-200 hover:underline">Özellikler</a></li>
            <li><a href="/usage" className="text-gray-800 dark:text-gray-200 hover:underline">Kullanım</a></li>
            <li><a href="/reviews" className="text-gray-800 dark:text-gray-200 hover:underline">Yorumlar</a></li>
            <li><a href="/faq" className="text-gray-800 dark:text-gray-200 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="hidden md:flex flex-none">
          <a href="#buy" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow-sm hover:bg-blue-700">Satın Al</a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Mobil Dropdown */}
      {isMenuOpen && (
        <nav 
          className="md:hidden bg-white/95 dark:bg-black/70 border-b border-gray-100 dark:border-white/5"
          role="navigation" 
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col m-0 p-0 list-none">
            <li><a 
              href="/features" 
              onClick={handleNavClick}
              className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
            >Özellikler</a></li>
            <li><a 
              href="/usage" 
              onClick={handleNavClick}
              className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
            >Kullanım</a></li>
            <li><a 
              href="/reviews" 
              onClick={handleNavClick}
              className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
            >Yorumlar</a></li>
            <li><a 
              href="#faq" 
              onClick={handleNavClick}
              className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
            >FAQ</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
