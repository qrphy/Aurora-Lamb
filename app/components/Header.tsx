"use client"

import React from "react";

export default function Header() {
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 dark:bg-black/70 backdrop-blur border-b border-gray-100 dark:border-white/5 z-50" role="banner">
      <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex-none">
          <a href="#" onClick={scrollTop} className="inline-flex items-center text-lg font-bold text-gray-900 dark:text-gray-100" aria-label="Aurora Lamb - Go to homepage">
            Aurora Lamb
          </a>
        </div>

        <nav className="flex-1 text-center" role="navigation" aria-label="Page sections">
          <ul className="inline-flex items-center gap-6 m-0 p-0 list-none">
            <li><a href="#features" className="text-gray-800 dark:text-gray-200 hover:underline">Özellikler</a></li>
            <li><a href="#usage" className="text-gray-800 dark:text-gray-200 hover:underline">Kullanım</a></li>
            <li><a href="#reviews" className="text-gray-800 dark:text-gray-200 hover:underline">Yorumlar</a></li>
            <li><a href="#faq" className="text-gray-800 dark:text-gray-200 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="flex-none">
          <a href="#buy" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow-sm hover:bg-blue-700">Satın Al</a>
        </div>
      </div>
    </header>
  );
}
