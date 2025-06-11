'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link href="/" className="inline-flex items-center space-x-3 group mb-8">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              YourBrand
            </span>
          </Link>
        </div>

        {/* 404 Illustration */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-blue-100/50 rounded-full blur-3xl animate-pulse" />
            </div>
            
            {/* Large 404 Text */}
            <div className="relative z-10">
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                404
              </h1>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border-4 border-gray-200 rounded-full animate-spin">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Page Not Found
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Back
              </button>
            </div>

            {/* Helpful Links */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Or try one of these:</p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/#features"
                  className="text-center py-2 px-3 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  Features
                </Link>
                <Link
                  href="/Auth/Login"
                  className="text-center py-2 px-3 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/Auth/Register"
                  className="text-center py-2 px-3 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  Sign Up
                </Link>
                <Link
                  href="#contact"
                  className="text-center py-2 px-3 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Animation Elements */}
        <div className="absolute top-10 left-10 animate-bounce">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-20 right-16 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute bottom-20 left-16 animate-bounce" style={{ animationDelay: '2s' }}>
          <div className="w-4 h-4 bg-pink-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute bottom-32 right-10 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="w-3 h-3 bg-green-400 rounded-full opacity-70"></div>
        </div>

        {/* Error Code Display */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-xs text-gray-400 space-y-1">
            <p>Error Code: 404</p>
            <p>Page Not Found</p>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
} 