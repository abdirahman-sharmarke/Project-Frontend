'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FooterHome() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                YourBrand
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Building the future with innovative solutions and cutting-edge technology. 
              Join us on this journey to transform ideas into reality.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986S24 18.605 24 11.987C24 5.367 18.634.001 12.017.001zm6.624 18.098c-.678 1.635-2.007 2.964-3.642 3.642C13.672 22.18 12.854 22.18 12.017 22.18s-1.655 0-2.982-.44c-1.635-.678-2.964-2.007-3.642-3.642C4.953 16.771 4.953 15.953 4.953 15.116s0-1.655.44-2.982c.678-1.635 2.007-2.964 3.642-3.642C10.362 7.952 11.18 7.952 12.017 7.952s1.655 0 2.982.44c1.635.678 2.964 2.007 3.642 3.642.44 1.327.44 2.145.44 2.982s0 1.655-.44 2.982z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#features" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="#pricing" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="#integrations" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link 
                  href="#api" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#careers" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="#blog" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="#press" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#help" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#privacy" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="#terms" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} YourBrand. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="#status" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
              >
                Status
              </Link>
              <Link 
                href="#security" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
              >
                Security
              </Link>
              <Link 
                href="#sitemap" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
