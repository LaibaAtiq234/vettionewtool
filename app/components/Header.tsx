'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Banner */}
      <div className="bg-[#7879f1] flex items-center justify-center px-10 py-6 w-full">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-white">Trusted by 200+ recruiters</span>
          <span className="text-white/60">|</span>
          <span className="text-white">No credit card required</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-10 py-6 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <div className="bg-[#f6f8ff] border border-white rounded p-1.5">
            <img
              src="/assets/Images/MartechLandingPage/Frame 1984079718.svg"
              alt="Vettio Logo"
              width={20}
              height={19}
              className="block"
            />
          </div>
          <span className="text-2xl font-medium text-[#020618]">Vettio</span>
        </Link>

        {/* Navigation */}
        <nav className="bg-white/50 backdrop-blur-sm rounded-full px-10 py-4 shadow-[0px_4px_12px_0px_rgba(93,95,239,0.2)]">
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/features" className="text-base font-medium text-[#5d5fef] hover:text-[#7879f1] transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="text-base text-[#62748e] hover:text-[#5d5fef] transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-base text-[#62748e] hover:text-[#5d5fef] transition-colors">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/security" className="text-base text-[#62748e] hover:text-[#5d5fef] transition-colors">
                Security
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-base text-[#62748e] hover:text-[#5d5fef] transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <button className="bg-[#7879f1] text-white font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-[#6869e0] transition-colors">
          Get Started For Free
        </button>
      </div>
    </div>
  )
}