'use client'

import { useState } from 'react'

export default function CVCalculator() {
  const [roles, setRoles] = useState(10)
  const [applicationsPerRole, setApplicationsPerRole] = useState(1000)
  const [minutesPerCV, setMinutesPerCV] = useState(2)

  // Correct formula: roles * applications per role * minutes per CV / 60 = hours
  const totalApplications = roles * applicationsPerRole
  const totalMinutes = totalApplications * minutesPerCV
  const totalHours = Math.floor(totalMinutes / 60)
  const remainingMinutes = totalMinutes % 60
  const timeDisplay = totalHours > 0
    ? `${totalHours} ${totalHours === 1 ? 'Hour' : 'Hours'}${remainingMinutes > 0 ? ` ${remainingMinutes} ${remainingMinutes === 1 ? 'Min' : 'Mins'}` : ''}`
    : `${remainingMinutes} ${remainingMinutes === 1 ? 'Min' : 'Mins'}`

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(65, 30, 148, 0.07) 100%)'
    }}>
      {/* Smooth curved background pattern - matching Figma design */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7879f1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#5d5fef" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#482af2" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Lines originating from bottom, curving up like semi-circles, then forming waves toward top - covering entire background */}
        <path
          d="M -600,800 C -600,600 -500,400 -300,300 S -100,100 100,50 S 300,-50 500,-100 S 700,-150 900,-200"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M -400,800 C -400,600 -300,400 -100,300 S 100,100 300,50 S 500,-50 700,-100 S 900,-150 1100,-200"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M -200,800 C -200,600 -100,400 100,300 S 300,100 500,50 S 700,-50 900,-100 S 1100,-150 1300,-200"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 0,800 C 0,600 100,400 300,300 S 500,100 700,50 S 900,-50 1100,-100 S 1300,-150 1500,-200"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 200,800 C 200,600 300,400 500,300 S 700,100 900,50 S 1100,-50 1300,-100 S 1500,-150 1700,-200"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 400,800 C 400,600 500,400 700,300 S 900,100 1100,50 S 1300,-50 1500,-100 S 1700,-150 1900,-200"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 600,800 C 600,600 700,400 900,300 S 1100,100 1300,50 S 1500,-50 1700,-100 S 1900,-150 2100,-200"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 800,800 C 800,600 900,400 1100,300 S 1300,100 1500,50 S 1700,-50 1900,-100 S 2100,-150 2300,-200"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 1000,800 C 1000,600 1100,400 1300,300 S 1500,100 1700,50 S 1900,-50 2100,-100"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 1200,800 C 1200,600 1300,400 1500,300 S 1700,100 1900,50 S 2100,-50 2300,-100"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 1400,800 C 1400,600 1500,400 1700,300 S 1900,100 2100,50 S 2300,-50 2500,-100"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M 1600,800 C 1600,600 1700,400 1900,300 S 2100,100 2300,50"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 1800,800 C 1800,600 1900,400 2100,300 S 2300,100 2500,50"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
          {/* Left side - Results */}
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#020618] leading-tight mb-3 md:mb-4">
              Calculate Your CV<br />
              Screening Hours.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#757575] mb-6 md:mb-8 lg:mb-10">
              See how many hours your team spends just screening CVs.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-[#314158] mb-1">Total Roles =</p>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#020618]">{roles}</p>
              </div>

              <div>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-[#314158] mb-1">Total Applications =</p>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#020618]">{totalApplications.toLocaleString()}</p>
              </div>

              <div>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-[#314158] mb-1">Total Screening Time =</p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#5d5fef]">{timeDisplay}</p>
              </div>
            </div>
          </div>

          {/* Right side - Calculator */}
          <div className="bg-white border-2 border-slate-100 rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 order-2 lg:order-2">
            <div className="space-y-8 md:space-y-10 lg:space-y-14">
              {/* Number of Roles Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-base sm:text-lg lg:text-xl font-semibold">
                    <span className="text-[#482af2]">Number</span>
                    <span className="text-[#62748e]"> Of Roles</span>
                  </label>
                  <div className="bg-[#482af2] text-white px-3 sm:px-4 py-1 rounded-full text-lg sm:text-xl lg:text-2xl font-medium min-w-[60px] sm:min-w-[70px] lg:min-w-[82px] text-center">
                    {roles}
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={roles}
                    onChange={(e) => setRoles(Number(e.target.value))}
                    className="w-full h-2 bg-[#f0f0f0] rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #482af2 0%, #7879f1 ${roles}%, #f0f0f0 ${roles}%, #f0f0f0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>100</span>
                  </div>
                </div>
              </div>

              {/* Applications Per Role Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-base sm:text-lg lg:text-xl font-semibold">
                    <span className="text-[#482af2]">Applications</span>
                    <span className="text-[#62748e]"> Per Role</span>
                  </label>
                  <div className="bg-[#482af2] text-white px-3 sm:px-4 py-1 rounded-full text-lg sm:text-xl lg:text-2xl font-medium min-w-[60px] sm:min-w-[70px] lg:min-w-[82px] text-center">
                    {applicationsPerRole}
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={applicationsPerRole}
                    onChange={(e) => setApplicationsPerRole(Number(e.target.value))}
                    className="w-full h-2 bg-[#f0f0f0] rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #482af2 0%, #7879f1 ${(applicationsPerRole/1000)*100}%, #f0f0f0 ${(applicationsPerRole/1000)*100}%, #f0f0f0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>1000</span>
                  </div>
                </div>
              </div>

              {/* Minutes Per CV Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-base sm:text-lg lg:text-xl font-semibold flex-1 mr-2">
                    <span className="text-[#482af2]">Minutes</span>
                    <span className="text-[#62748e]"> Spent Reviewing Each CV</span>
                  </label>
                  <div className="bg-[#482af2] text-white px-3 sm:px-4 py-1 rounded-full text-lg sm:text-xl lg:text-2xl font-medium min-w-[60px] sm:min-w-[70px] lg:min-w-[82px] text-center flex-shrink-0">
                    {minutesPerCV}
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={minutesPerCV}
                    onChange={(e) => setMinutesPerCV(Number(e.target.value))}
                    className="w-full h-2 bg-[#f0f0f0] rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #482af2 0%, #7879f1 ${minutesPerCV}%, #f0f0f0 ${minutesPerCV}%, #f0f0f0 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>100</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10 lg:mt-14 text-center">
              <p className="text-xs sm:text-sm font-medium text-[#62748e]">Calculate Your Hiring Time Lost</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #482af2;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(72, 42, 242, 0.3);
        }

        @media (min-width: 640px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 24px;
            height: 24px;
          }
        }

        @media (min-width: 1024px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 26px;
            height: 26px;
          }
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #482af2;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(72, 42, 242, 0.3);
        }

        @media (min-width: 640px) {
          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
          }
        }

        @media (min-width: 1024px) {
          input[type="range"]::-moz-range-thumb {
            width: 26px;
            height: 26px;
          }
        }
      `}</style>
    </section>
  )
}