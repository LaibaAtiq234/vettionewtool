'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="flex flex-col w-full">
      {/* Top Banner */}
      <div className="bg-[#7879f1] flex items-center justify-center px-4 md:px-6 lg:px-10 py-2 md:py-4 lg:py-6 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs md:text-sm font-medium">
          <span className="text-white">Trusted by 200+ recruiters</span>
          <span className="text-white/60 hidden sm:inline">|</span>
          <span className="text-white">No credit card required</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-3 md:py-4 lg:py-6 w-full relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <div className="bg-[#f6f8ff] border border-white rounded p-1 md:p-1.5">
            <img
              src="/assets/Images/MartechLandingPage/Frame 1984079718.svg"
              alt="Vettio Logo"
              width={20}
              height={19}
              className="block w-4 h-4 md:w-5 md:h-5"
            />
          </div>
          <span className="text-xl md:text-2xl font-medium text-[#020618]">Vettio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block bg-white/50 backdrop-blur-sm rounded-full px-6 xl:px-10 py-3 xl:py-4 shadow-[0px_4px_12px_0px_rgba(93,95,239,0.2)]">
          <ul className="flex items-center gap-3 xl:gap-5">
            <li>
              <Link href="/features" className="text-sm xl:text-base font-medium text-[#5d5fef] hover:text-[#7879f1] transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="text-sm xl:text-base text-[#62748e] hover:text-[#5d5fef] transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-sm xl:text-base text-[#62748e] hover:text-[#5d5fef] transition-colors">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/security" className="text-sm xl:text-base text-[#62748e] hover:text-[#5d5fef] transition-colors">
                Security
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm xl:text-base text-[#62748e] hover:text-[#5d5fef] transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-[#7879f1] text-white font-bold text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:bg-[#6869e0] transition-colors">
          Get Started For Free
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-[#62748e] hover:text-[#5d5fef] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <nav className="px-4 py-4">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features"
                  className="block text-base font-medium text-[#5d5fef] hover:text-[#7879f1] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="block text-base text-[#62748e] hover:text-[#5d5fef] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="block text-base text-[#62748e] hover:text-[#5d5fef] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="block text-base text-[#62748e] hover:text-[#5d5fef] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block text-base text-[#62748e] hover:text-[#5d5fef] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li className="pt-3 border-t border-gray-200 md:hidden">
                <button className="w-full bg-[#7879f1] text-white font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-[#6869e0] transition-colors">
                  Get Started For Free
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}