import React from 'react';
import Image from 'next/image';

const SectionDivider = () => {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Decorative background - spans full width */}
        <div className="absolute -inset-x-[50%] inset-y-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[200vw] h-full">
            <Image
              src="/assets/Images/MartechLandingPage/section-divider.svg"
              alt=""
              fill
              className="object-cover opacity-100 scale-80"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* CTA Button */}
          <button className="bg-[#7879f1] hover:bg-[#6668e3] text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg">
            Get Started For Free
          </button>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5">
                <Image
                  src="/assets/Images/MartechLandingPage/check-circle-one.svg"
                  alt="Check"
                  width={20}
                  height={20}
                  className="filter brightness-0 saturate-100"
                  style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(2234%) hue-rotate(237deg) brightness(104%) contrast(101%)' }}
                />
              </div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5">
                <Image
                  src="/assets/Images/MartechLandingPage/mingcute_time-line.svg"
                  alt="Time"
                  width={20}
                  height={20}
                  className="filter brightness-0 saturate-100"
                  style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(2234%) hue-rotate(237deg) brightness(104%) contrast(101%)' }}
                />
              </div>
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDivider;