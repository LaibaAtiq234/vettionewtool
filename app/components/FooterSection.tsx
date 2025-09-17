import React from 'react';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="px-4 md:px-6 py-8 md:py-12 lg:py-16 flex flex-col items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
            Unlock Better Hires with <br />Intelligent Recruiting
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6">
            <button className="bg-[#7879f1] hover:bg-[#6668e3] text-white font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-xl transition-colors shadow-lg text-sm md:text-base">
              Get Started For Free
            </button>
            <button className="bg-white border-2 border-[#5d5fef] text-[#020618] font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-xl hover:bg-[#f6f8ff] transition-colors flex items-center justify-center gap-2 shadow-lg text-sm md:text-base">
              <Image src="/assets/Images/MartechLandingPage/bookademo.svg" alt="Play" width={20} height={20} />
              Book a Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#314158]">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Images/MartechLandingPage/check-circle-one.svg"
                alt="Check"
                width={20}
                height={20}
                className="filter brightness-0 saturate-100"
                style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(2234%) hue-rotate(237deg) brightness(104%) contrast(101%)' }}
              />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/Images/MartechLandingPage/mingcute_time-line.svg"
                alt="Time"
                width={20}
                height={20}
                className="filter brightness-0 saturate-100"
                style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(2234%) hue-rotate(237deg) brightness(104%) contrast(101%)' }}
              />
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Footer Section */}
      <div className="relative">
        <div className="bg-[#231F20] text-white rounded-t-lg shadow-[0px_-4px_20px_0px_rgba(93,95,239,0.1)] relative overflow-hidden">
          {/* Center decorative image */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src="/assets/Images/MartechLandingPage/footermid.png"
              alt=""
              width={600}
              height={400}
              className="opacity-100 hidden md:block"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {/* Left Section - Logo and Description */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-b from-[#020618] to-[#615fff] p-1.5 rounded-lg">
                    <Image
                      src="/assets/Images/MartechLandingPage/footer-logo.svg"
                      alt="Vettio Logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-2xl font-medium">Vettio</span>
                </div>
                <p className="text-[#cad5e2] text-sm max-w-xs">
                  AI-powered recruitment platform for<br />
                  smarter CV screening and interviews.
                </p>
              </div>

              {/* Right Section - CTA Buttons */}
              <div className="flex flex-col gap-3 md:gap-4 w-full md:w-auto">
                <button className="bg-[#7879f1] hover:bg-[#6668e3] text-white font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-xl transition-colors shadow-lg text-sm md:text-base">
                  Get Started For Free
                </button>
                <button className="bg-transparent border border-[#5d5fef] text-white font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-xl hover:bg-[#5d5fef]/10 transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                  <Image src="/assets/Images/MartechLandingPage/bookademo.svg" alt="Play" width={20} height={20} />
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-white px-4 md:px-6 py-6 md:py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/Images/MartechLandingPage/footer-logo.svg"
                  alt="Vettio Logo"
                  width={24}
                  height={24}
                />
                <span className="text-xl font-medium text-[#020618]">Vettio</span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 md:gap-6 text-sm text-[#62748e] font-medium order-2 lg:order-none">
                <a href="#" className="hover:text-[#5d5fef] transition-colors">Contact</a>
                <a href="#" className="hover:text-[#5d5fef] transition-colors">Privacy</a>
                <a href="#" className="hover:text-[#5d5fef] transition-colors">Terms</a>
              </div>

              {/* Copyright */}
              <div className="text-xs md:text-sm text-[#62748e] order-4 lg:order-none">
                © 2025 Vettio. All Rights Reserved.
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 md:gap-4 order-3 lg:order-none">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image src="/assets/Images/MartechLandingPage/x-twitter.png" alt="X" width={20} height={20} className="md:w-6 md:h-6" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image src="/assets/Images/MartechLandingPage/instagram.svg" alt="Instagram" width={20} height={20} className="md:w-6 md:h-6" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image src="/assets/Images/MartechLandingPage/tiktok.png" alt="TikTok" width={20} height={20} className="md:w-6 md:h-6" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image src="/assets/Images/MartechLandingPage/brand-linkedin.svg" alt="LinkedIn" width={20} height={20} className="md:w-6 md:h-6" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Image src="/assets/Images/MartechLandingPage/youtube.png" alt="YouTube" width={20} height={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;