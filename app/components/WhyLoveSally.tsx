'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function WhyLoveSally() {
  const [showBadges, setShowBadges] = useState(false)
  const badgeSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation when section is in view
            setTimeout(() => {
              setShowBadges(true)
            }, 200)
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    )

    if (badgeSectionRef.current) {
      observer.observe(badgeSectionRef.current)
    }

    return () => {
      if (badgeSectionRef.current) {
        observer.unobserve(badgeSectionRef.current)
      }
    }
  }, [])
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#020618] text-center px-4">
            Why Recruiters And Hiring Managers Love Sally
          </h1>
        </div>

        {/* Feature sections - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
            {/* Sally 24/7 Candidate Expert */}
            <div className="bg-[#f3faff] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="flex flex-col gap-6 md:gap-8 items-center justify-center">
              <div className="flex flex-col gap-4 md:gap-6 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#020618]">
                  Sally, Your 24/7 Candidate <span className="text-[#5d5fef]">Expert</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-[#62748e]">
                  Sally knows every candidate inside out and is always available
                </p>
              </div>

              {/* Sally Badge */}
              <div className="bg-gradient-to-r from-[#4c4fc8] via-[#5d5fef] to-[#7879f1] backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center gap-3 lg:gap-4 shadow-lg border-3 border-[#d9d9d9] relative max-w-full overflow-hidden">
                <div
                  className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 60.417%, rgba(231,228,251,1) 100%)`
                  }}
                />
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-[0px_1.78px_1.78px_0px_rgba(0,0,0,0.09)] border-2 border-[#7879f1] relative z-10 flex-shrink-0"
                  style={{
                    background: `url('/assets/Images/MartechLandingPage/sally-avatar.png') center 23.13%/100% 151.3% no-repeat`,
                    boxShadow: '0px 1.78px 1.78px 0px rgba(0,0,0,0.04), -3.559px 5.339px 10.678px 0px rgba(21,16,255,0.08), 5.339px 5.339px 10.678px 0px rgba(250,3,255,0.06), 0px 1.78px 10.678px 0px rgba(98,77,227,0.12)'
                  }}
                />
                <div className="text-white relative z-10">
                  <div className="text-xl sm:text-2xl lg:text-[32px] font-semibold">Sally</div>
                  <div className="text-sm sm:text-base lg:text-[20px] font-light opacity-95">Your Domain-Expert AI Recruiter</div>
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#020618] text-sm md:text-base">Instantly recall any candidate Sally has interviewed or reviewed</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#020618] text-sm md:text-base">Ask in natural language: "Show me the three most relevant candidates"</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#020618] text-sm md:text-base">No filters, no complexity .. just clear answers to your hiring questions</p>
                </div>
              </div>
            </div>
          </div>

            {/* Domain-Expert AI Interviewer */}
            <div className="bg-gradient-to-b from-[#462aac] to-[#a3b3ff] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 text-white relative">
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="flex flex-col gap-4 md:gap-6 text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-tight">
                    Your Domain-Expert AI Interviewer
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl">
                    Sally doesn't just screen, she interviews like a true domain expert.
                  </p>
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 flex-shrink-0">
                      <Image
                        src="/assets/Images/MartechLandingPage/interview-icon.png"
                        alt="Interview"
                        fill
                        className="brightness-0 invert"
                      />
                    </div>
                    <p className="text-sm md:text-base">Conducts thousands of interviews simultaneously</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 flex-shrink-0">
                      <Image
                        src="/assets/Images/MartechLandingPage/job-icon.png"
                        alt="Job"
                        fill
                        className="brightness-0 invert"
                      />
                    </div>
                    <p className="text-sm md:text-base">Tailors every interview to your specific job requirements</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 flex-shrink-0">
                      <Image
                        src="/assets/Images/MartechLandingPage/replace-icon.png"
                        alt="Replace"
                        fill
                        className="brightness-0 invert"
                      />
                    </div>
                    <p className="text-sm md:text-base">Understands responses and asks smart, relevant follow-ups</p>
                  </div>
                </div>

                {/* Interview Preview Window */}
                <div className="relative" ref={badgeSectionRef}>
                  <div className="rounded-[24px] border-[14px] border-white/30 overflow-hidden shadow-2xl bg-white">
                    {/* Browser Header */}
                    <div className="bg-white">
                      <div className="flex items-center justify-between px-4 pt-4">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 mx-2 sm:mx-3 md:mx-4 mt-3 mb-4 px-2 sm:px-3 md:px-4 py-2 rounded-md max-w-[70%] sm:max-w-[80%] md:max-w-full">
                        <p className="text-[10px] sm:text-[11px] md:text-xs text-gray-800 font-medium">Recording of the AI Interview</p>
                      </div>
                    </div>

                    {/* Content Area - Direct video with overlay */}
                    <div className="bg-white px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
                      <p className="font-semibold text-sm sm:text-base text-[#020618] mb-2 sm:mb-3 md:mb-4">Domain Focused Interview</p>

                      {/* Video Container */}
                      <div className="relative rounded-xl overflow-hidden aspect-video bg-black">
                        {/* Main Video */}
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src="/assets/Images/MartechLandingPage/videothumbnail.mp4" type="video/mp4" />
                        </video>

                        {/* Sally Badge with Name - bottom left overlay */}
                        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 flex items-center gap-2 sm:gap-3 bg-black/70 backdrop-blur-md rounded-md lg:rounded-lg px-2 sm:px-2.5 lg:px-3 py-1.5 sm:py-2">
                          <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-md lg:rounded-lg overflow-hidden border sm:border-2 border-white/30">
                            <Image
                              src="/assets/Images/MartechLandingPage/interview-video-thumbnail.png"
                              alt="Sally"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="text-white">
                            <p className="font-bold text-[10px] sm:text-xs md:text-sm">Sally</p>
                            <p className="text-[8px] sm:text-[10px] md:text-xs opacity-90 hidden sm:block">Domain-Expert Interviewer</p>
                          </div>
                        </div>
                      </div>

                      {/* Video Controls */}
                      <div className="flex items-center gap-4 mt-4 justify-center">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                            <rect x="5" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badges Container - positioned outside the card */}
                  <div className="absolute -right-1 sm:-right-2 md:-right-4 lg:-right-8 top-0 z-10 flex flex-col gap-1 sm:gap-2 md:gap-3 scale-50 xs:scale-60 sm:scale-75 md:scale-90 lg:scale-100 origin-top-right">
                    {/* Domain Badge - overlapping top right corner */}
                    <div
                      className={`transition-all duration-500 transform ${
                        showBadges
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-10'
                      }`}
                      style={{
                        transitionDelay: '0ms',
                        marginTop: '-10px'
                      }}
                    >
                      <div className="bg-black/90 backdrop-blur-lg text-white rounded-tl-[17px] rounded-tr-[17px] rounded-bl-[17px] px-3 py-2.5 flex items-center gap-2.5 shadow-xl">
                        <div className="bg-[#7879f1] p-1.5 rounded-xl flex-shrink-0">
                          <div className="relative w-[22px] h-[22px]">
                            <Image
                              src="/assets/Images/MartechLandingPage/focus-icon.png"
                              alt="Domain"
                              fill
                              className="brightness-0 invert"
                            />
                          </div>
                        </div>
                        <div className="pr-2">
                          <p className="font-bold text-sm">Domain</p>
                          <p className="text-xs opacity-90">Software Engineering</p>
                        </div>
                      </div>
                    </div>

                    {/* Focus Area Badge - middle */}
                    <div
                      className={`transition-all duration-500 transform ml-4 sm:ml-6 md:ml-8 ${
                        showBadges
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-10'
                      }`}
                      style={{
                        transitionDelay: '400ms'
                      }}
                    >
                      <div className="bg-[#7879f1] text-white rounded-tl-[17px] rounded-tr-[17px] rounded-bl-[17px] px-3 py-2.5 flex items-center gap-2.5 shadow-xl">
                        <div className="bg-white/20 p-1.5 rounded-xl flex-shrink-0">
                          <div className="relative w-[22px] h-[22px]">
                            <Image
                              src="/assets/Images/MartechLandingPage/focus-area-icon.png"
                              alt="Focus Area"
                              fill
                              className="brightness-0 invert"
                            />
                          </div>
                        </div>
                        <div className="pr-2">
                          <p className="font-bold text-sm">Focus Area</p>
                          <p className="text-xs opacity-90 whitespace-nowrap">Backend Development</p>
                        </div>
                      </div>
                    </div>

                    {/* Assessing Badge - bottom */}
                    <div
                      className={`transition-all duration-500 transform ml-8 sm:ml-12 md:ml-16 ${
                        showBadges
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-10'
                      }`}
                      style={{
                        transitionDelay: '800ms'
                      }}
                    >
                      <div className="bg-[#7879f1] text-white rounded-tl-[17px] rounded-tr-[17px] rounded-bl-[17px] px-3 py-2.5 flex items-center gap-2.5 shadow-xl">
                        <div className="bg-white/20 p-1.5 rounded-xl flex-shrink-0">
                          <Image
                            src="/assets/Images/MartechLandingPage/assessing-icon.png"
                            alt="Assessing"
                            width={22}
                            height={22}
                          />
                        </div>
                        <div className="pr-2">
                          <p className="font-bold text-sm">Assessing</p>
                          <p className="text-xs opacity-90 leading-tight max-w-[140px]">API Design, Data Structures & Algorithms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
            {/* LinkedIn Easy Apply Section */}
            <div className="bg-[#e2f0ff] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
              <div className="flex flex-col gap-6 md:gap-8 items-center justify-center relative z-10">
                {/* LinkedIn Icon */}
                <Image
                  src="/assets/Images/MartechLandingPage/linkedin-logo.png"
                  alt="LinkedIn"
                  width={108}
                  height={108}
                  className="drop-shadow-lg w-20 h-20 md:w-24 md:h-24 lg:w-[108px] lg:h-[108px]"
                />

                <div className="flex flex-col gap-3 md:gap-4 text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#020618] leading-tight">
                    Automatic candidate imports from{' '}
                    <span className="text-[#5d5fef]">LinkedIn Easy Apply</span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-[#62748e]">
                    Never lose a candidate again because Sally keeps your pipeline full.
                  </p>
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#5d5fef] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#020618] text-sm md:text-base">Connect your email once, and you're done</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#5d5fef] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#020618] text-sm md:text-base">Sally automatically imports all applicants from LinkedIn Easy Apply</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#5d5fef] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#020618] text-sm md:text-base">Sally continuously syncs new applicants as they apply in the future</p>
                  </div>
                </div>

                {/* LinkedIn Profile Mockup */}
                <div className="relative mt-8">
                  <Image
                    src="/assets/Images/MartechLandingPage/linkedin-profile-mockup.png"
                    alt="LinkedIn Profile"
                    width={607}
                    height={467}
                    className="rounded-xl"
                  />

                  {/* Easy Apply Button Overlay */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white rounded-full shadow-[0px_4.915px_44.232px_0px_#5d5fef] px-6 py-2.0 flex items-center">
                      <Image
                        src="/assets/Images/MartechLandingPage/linkedin-company-logo.png"
                        alt="Company"
                        width={200}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#5d5fef]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-bl from-[#5d5fef]/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Super Enriched Candidate Profiles */}
            <div className="bg-[#ededff] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 relative">
              <div className="flex flex-col gap-6 md:gap-8 items-center justify-center">
                <div className="flex flex-col gap-3 md:gap-4 text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#020618] leading-tight">
                    Super Enriched Candidate Profiles
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-[#62748e]">
                    Go beyond CVs with AI-powered insights
                  </p>
                </div>

                {/* Candidate Cards Container */}
                <div className="relative w-full max-w-[500px]">
                  {/* Background Card - Top Candidates */}
                  <div className="backdrop-blur-[7.5px] bg-gradient-to-b from-white/60 to-white/50 rounded-lg p-3 border border-white shadow-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#5d5fef] font-medium text-sm">Top Candidates</span>
                      <button className="p-1.5 bg-black/5 rounded-xl">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>

                    {/* Candidate Mini Cards Row */}
                    <div className="flex gap-4 justify-between">
                      {/* Eva Card */}
                      <div className="flex flex-col items-center gap-2 relative">
                        <div className="relative">
                          <Image
                            src="/assets/Images/MartechLandingPage/candidate-eva.png"
                            alt="Eva Solain"
                            width={55}
                            height={55}
                            className="rounded-full"
                          />
                          <div className="absolute -top-4 -right-4 bg-[#5d5fef] text-white text-[10px] font-semibold rounded px-1.5 py-0.5">
                            97%<br/><span className="text-[6px]">Match</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-[9px] font-medium text-black">Eva Solain</p>
                          <p className="text-[9px] text-gray-700">Sr. Software Developer</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <svg className="w-2.5 h-2.5 text-gray-600" viewBox="0 0 24 24" fill="none">
                              <path d="M3 8L12 13L21 8M3 8L12 3L21 8M3 8V16L12 21L21 16V8" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="text-[9px] text-gray-700">eva.solain@gmail.com</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-2.5 h-2.5 text-gray-600" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                              <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="text-[9px] text-gray-700">Dubai, UAE</span>
                          </div>
                        </div>
                      </div>

                      {/* Sandra Card */}
                      <div className="flex flex-col items-center gap-2 relative">
                        <div className="relative">
                          <Image
                            src="/assets/Images/MartechLandingPage/candidate-sandra.png"
                            alt="Sandra Bowman"
                            width={55}
                            height={55}
                            className="rounded-full"
                          />
                          <div className="absolute -top-4 -right-4 bg-[#5d5fef] text-white text-[10px] font-semibold rounded px-1.5 py-0.5">
                            91%<br/><span className="text-[6px]">Match</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-[9px] font-medium text-black">Sandra Bowman</p>
                          <p className="text-[9px] text-gray-700">Sr. Software Developer</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <svg className="w-2.5 h-2.5 text-gray-600" viewBox="0 0 24 24" fill="none">
                              <path d="M3 8L12 13L21 8M3 8L12 3L21 8M3 8V16L12 21L21 16V8" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="text-[9px] text-gray-700">sandra.b@gmail.com</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-2.5 h-2.5 text-gray-600" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                              <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="text-[9px] text-gray-700">Dubai, UAE</span>
                          </div>
                        </div>
                      </div>

                      {/* Pierre Card (small) */}
                      <div className="flex flex-col items-center gap-2 relative">
                        <div className="relative">
                          <Image
                            src="/assets/Images/MartechLandingPage/candidate-pierre-1.png"
                            alt="Pierre Ford"
                            width={55}
                            height={55}
                            className="rounded-full"
                          />
                          <div className="absolute -top-4 -right-4 bg-[#5d5fef] text-white text-[10px] font-semibold rounded px-1.5 py-0.5">
                            89%<br/><span className="text-[6px]">Match</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-[9px] font-medium text-black">Pierre Ford</p>
                          <p className="text-[9px] text-gray-700">Software Developer</p>
                        </div>
                        <button className="bg-gradient-to-b from-white/60 to-white/50 border border-white text-[9px] font-medium px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                          View Profile
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating Pierre Card - Larger */}
                  <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-8 bg-white rounded-xl shadow-[0px_3.471px_24.294px_0px_#5d5fef] p-3 md:p-4 w-40 sm:w-48 md:w-52">
                    <div className="relative mb-3">
                      <Image
                        src="/assets/Images/MartechLandingPage/candidate-pierre-2.png"
                        alt="Pierre Ford"
                        width={82}
                        height={82}
                        className="rounded-full mx-auto"
                      />
                      <div className="absolute -top-2 -right-2 bg-[#5d5fef] text-white text-sm font-semibold rounded-lg px-2 py-1.5">
                        89%<br/><span className="text-[9px]">Match</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[13px] font-medium text-black">Pierre Ford</p>
                      <p className="text-[13px] text-gray-700">Software Developer</p>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-1.5 justify-center">
                        <svg className="w-3.5 h-3.5 text-gray-600" viewBox="0 0 24 24" fill="none">
                          <path d="M3 8L12 13L21 8M3 8L12 3L21 8M3 8V16L12 21L21 16V8" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        <span className="text-[10px] text-gray-700">pierre.f@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-center">
                        <svg className="w-3.5 h-3.5 text-gray-600" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        <span className="text-[10px] text-gray-700">Montreal, Canada</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-3 w-full mt-8">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#5d5fef] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#020618] text-sm md:text-base">View the most relevant experience at a glance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#5d5fef] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#020618] text-sm md:text-base">See each candidate's match against every requirement</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#5d5fef] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#020618] text-sm md:text-base">Compare candidates with AI-driven scores and evaluations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full mt-8 md:mt-12 lg:mt-16 flex flex-col items-center gap-3 md:gap-4">
          <button className="bg-[#5d5fef] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base hover:bg-[#4a4cd8] transition-colors">
            Get Started For Free
          </button>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-[#64748b]">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5">
                <Image
                  src="/assets/Images/MartechLandingPage/check-circle-one.svg"
                  alt="Check"
                  width={20}
                  height={20}
                  className="filter brightness-0 saturate-100"
                  style={{ filter: 'invert(24%) sepia(98%) saturate(1952%) hue-rotate(196deg) brightness(94%) contrast(101%)' }}
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
                  style={{ filter: 'invert(24%) sepia(98%) saturate(1952%) hue-rotate(196deg) brightness(94%) contrast(101%)' }}
                />
              </div>
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}