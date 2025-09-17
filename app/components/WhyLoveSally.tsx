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
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-5xl font-bold text-[#020618] text-center">
            Why Recruiters And Hiring Managers Love Sally
          </h1>
        </div>

        {/* Feature sections - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            {/* Sally 24/7 Candidate Expert */}
            <div className="bg-[#f3faff] rounded-[40px] p-12">
            <div className="flex flex-col gap-8 items-center justify-center">
              <div className="flex flex-col gap-6 text-center">
                <h2 className="text-4xl font-extrabold text-[#020618]">
                  Sally, Your 24/7 Candidate <span className="text-[#5d5fef]">Expert</span>
                </h2>
                <p className="text-xl text-[#62748e]">
                  Sally knows every candidate inside out and is always available
                </p>
              </div>

              {/* Sally Badge */}
              <div className="bg-gradient-to-r from-[#4c4fc8] via-[#5d5fef] to-[#7879f1] backdrop-blur-md rounded-full px-8 py-6 flex items-center gap-4 shadow-lg border-3 border-[#d9d9d9] relative">
                <div
                  className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 60.417%, rgba(231,228,251,1) 100%)`
                  }}
                />
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-[0px_1.78px_1.78px_0px_rgba(0,0,0,0.09)] border-2 border-[#7879f1] relative z-10"
                  style={{
                    background: `url('/assets/Images/MartechLandingPage/sally-avatar.png') center 23.13%/100% 151.3% no-repeat`,
                    boxShadow: '0px 1.78px 1.78px 0px rgba(0,0,0,0.04), -3.559px 5.339px 10.678px 0px rgba(21,16,255,0.08), 5.339px 5.339px 10.678px 0px rgba(250,3,255,0.06), 0px 1.78px 10.678px 0px rgba(98,77,227,0.12)'
                  }}
                />
                <div className="text-white relative z-10">
                  <div className="text-[32px] font-semibold">Sally</div>
                  <div className="text-[20px] font-light opacity-95">Your Domain-Expert AI Recruiter</div>
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#020618] text-base">Instantly recall any candidate Sally has interviewed or reviewed</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#020618] text-base">Ask in natural language: "Show me the three most relevant candidates"</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#020618] text-base">No filters, no complexity .. just clear answers to your hiring questions</p>
                </div>
              </div>
            </div>
          </div>

            {/* Domain-Expert AI Interviewer */}
            <div className="bg-gradient-to-b from-[#462aac] to-[#a3b3ff] rounded-[40px] p-12 text-white relative">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6 text-center">
                  <h2 className="text-[40px] font-extrabold leading-tight">
                    Your Domain-Expert AI Interviewer
                  </h2>
                  <p className="text-xl">
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
                    <p className="text-base">Conducts thousands of interviews simultaneously</p>
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
                    <p className="text-base">Tailors every interview to your specific job requirements</p>
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
                    <p className="text-base">Understands responses and asks smart, relevant follow-ups</p>
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
                      <div className="bg-gray-50 mx-4 mt-3 mb-4 px-4 py-2 rounded-md">
                        <p className="text-xs text-gray-800 font-medium">Recording of the AI Interview</p>
                      </div>
                    </div>

                    {/* Content Area - Direct video with overlay */}
                    <div className="bg-white px-6 pb-6">
                      <p className="font-semibold text-base text-[#020618] mb-4">Domain Focused Interview</p>

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
                        <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/70 backdrop-blur-md rounded-lg px-3 py-2">
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-white/30">
                            <Image
                              src="/assets/Images/MartechLandingPage/interview-video-thumbnail.png"
                              alt="Sally"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="text-white">
                            <p className="font-bold text-sm">Sally</p>
                            <p className="text-xs opacity-90">Domain-Expert Interviewer</p>
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
                  <div className="absolute -right-8 top-0 z-10 flex flex-col gap-3">
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
                      className={`transition-all duration-500 transform ml-8 ${
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
                      className={`transition-all duration-500 transform ml-16 ${
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
          <div className="flex flex-col gap-12">
            {/* LinkedIn Easy Apply Section */}
            <div className="bg-[#e2f0ff] rounded-[40px] p-12 relative overflow-hidden">
              <div className="flex flex-col gap-8 items-center justify-center relative z-10">
                {/* LinkedIn Icon */}
                <Image
                  src="/assets/Images/MartechLandingPage/linkedin-logo.png"
                  alt="LinkedIn"
                  width={108}
                  height={108}
                  className="drop-shadow-lg"
                />

                <div className="flex flex-col gap-4 text-center">
                  <h2 className="text-[40px] font-extrabold text-[#020618] leading-tight">
                    Automatic candidate imports from{' '}
                    <span className="text-[#5d5fef]">LinkedIn Easy Apply</span>
                  </h2>
                  <p className="text-xl text-[#62748e]">
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
                    <p className="text-[#020618] text-base">Connect your email once, and you're done</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#5d5fef] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#020618] text-base">Sally automatically imports all applicants from LinkedIn Easy Apply</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#5d5fef] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#020618] text-base">Sally continuously syncs new applicants as they apply in the future</p>
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
                    <div className="bg-white rounded-full shadow-[0px_4.915px_44.232px_0px_#5d5fef] px-8 py-5 flex items-center">
                      <Image
                        src="/assets/Images/MartechLandingPage/linkedin-company-logo.png"
                        alt="Company"
                        width={245}
                        height={48}
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
            <div className="bg-white border-2 border-gray-100 rounded-[40px] p-12">
          <div className="flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-4xl font-bold text-[#020618]">
                Super Enriched Candidate Profiles
              </h2>
              <p className="text-lg text-[#62748e]">
                Go beyond CVs with AI-powered insights
              </p>
            </div>

            {/* Candidate Cards Preview */}
            <div className="flex gap-4 justify-center">
              <div className="bg-white rounded-xl border border-gray-200 p-4 w-48">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">93%</span>
                </div>
                <p className="font-semibold text-sm mb-1">Eva Salam</p>
                <p className="text-xs text-gray-600 mb-2">Software Developer</p>
                <p className="text-xs text-gray-500">eva.salam@gmail.com</p>
                <p className="text-xs text-gray-500 mt-2">Dubai, UAE</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 w-48">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">91%</span>
                </div>
                <p className="font-semibold text-sm mb-1">Sandra Bowman</p>
                <p className="text-xs text-gray-600 mb-2">Software Developer</p>
                <p className="text-xs text-gray-500">sandra.b@gmail.com</p>
                <p className="text-xs text-gray-500 mt-2">Dubai, UAE</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 w-48">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full"></div>
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">89%</span>
                </div>
                <p className="font-semibold text-sm mb-1">Pierre Ford</p>
                <p className="text-xs text-gray-600 mb-2">Software Developer</p>
                <p className="text-xs text-gray-500">pierre.f@gmail.com</p>
                <p className="text-xs text-gray-500 mt-2">Montreal, Canada</p>
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">View the most relevant experience at a glance</p>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">See each candidate's match against every requirement</p>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">Compare candidates with AI-driven scores and evaluations</p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full mt-16 flex flex-col items-center gap-4">
          <button className="bg-[#5d5fef] text-white px-8 py-3 rounded-lg font-medium text-base hover:bg-[#4a4cd8] transition-colors">
            Get Started For Free
          </button>
          <div className="flex items-center gap-6 text-sm text-[#64748b]">
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