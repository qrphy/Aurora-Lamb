"use client"

import React from "react";

export default function Footer() {
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Ana Footer İçeriği */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo ve Açıklama */}
          <div className="md:col-span-1">
            <a
              href="#"
              onClick={scrollTop}
              className="inline-flex items-center text-xl font-bold text-black dark:text-white mb-4 hover:text-blue-400 transition"
              aria-label="Aurora Lamb - Go to homepage"
            >
              Aurora Lamb
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
                Sadece masayı aydınlatan değil, atmosferi değiştiren lamba.
            </p>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@auroralamb.com"
                  className="text-gray-400 hover:text-blue-400 transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@auroralamb.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+905551234567"
                  className="text-gray-400 hover:text-blue-400 transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +90 555 123 45 67
                </a>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/auroralamb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/auroralamb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/auroralamb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 15.892c-1.5 2.446-4.599 4.04-8.183 4.04-4.351 0-7.881-3.529-7.881-7.881s3.529-7.881 7.881-7.881c2.92 0 5.46 1.584 6.806 3.949V7.657h2.574v5.92c0 .91.738 1.648 1.648 1.648h.74v2.667h-1.92zM9.882 3.996c-3.307 0-5.996 2.689-5.996 5.996 0 3.307 2.689 5.996 5.996 5.996 3.307 0 5.996-2.689 5.996-5.996 0-3.307-2.689-5.996-5.996-5.996z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/auroralamb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hukuki Linkler */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">Hukuki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#kvkk" className="text-gray-400 hover:text-blue-400 transition">
                  KVKK Aydınlatma Metni
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-blue-400 transition">
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-400 hover:text-blue-400 transition">
                  Çerez Politikası
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ayırıcı Çizgi */}
        <div className="border-t border-gray-700 pt-8">
          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2026 Aurora Lamb. Tüm hakları saklıdır.</p>
            <p className="mt-2">
              Tasarım ve Geliştirme:{" "}
              <a href="https://www.furkantitiz.dev" target="_blank" className="text-blue-400 hover:text-blue-300 transition">
                Aurora Lamb Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
