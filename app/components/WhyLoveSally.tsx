'use client'

import Image from 'next/image'

export default function WhyLoveSally() {
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
                    <Image
                      src="/assets/Images/MartechLandingPage/interview-icon.png"
                      alt="Interview"
                      width={24}
                      height={24}
                      className="flex-shrink-0"
                    />
                    <p className="text-base">Conducts thousands of interviews simultaneously</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/Images/MartechLandingPage/job-icon.png"
                      alt="Job"
                      width={24}
                      height={24}
                      className="flex-shrink-0"
                    />
                    <p className="text-base">Tailors every interview to your specific job requirements</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/Images/MartechLandingPage/replace-icon.png"
                      alt="Replace"
                      width={24}
                      height={24}
                      className="flex-shrink-0"
                    />
                    <p className="text-base">Understands responses and asks smart, relevant follow-ups</p>
                  </div>
                </div>

                {/* Interview Preview Window */}
                <div className="relative">
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

                  {/* Floating Badges - positioned outside the card */}
                  {/* Domain Badge - top right */}
                  <div className="absolute -top-4 -right-10 z-10">
                    <div className="bg-black/90 backdrop-blur-lg text-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                      <div className="bg-[#7879f1] p-2 rounded-xl">
                        <Image
                          src="/assets/Images/MartechLandingPage/focus-icon.png"
                          alt="Domain"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Domain</p>
                        <p className="text-sm opacity-90">Software Engineering</p>
                      </div>
                    </div>
                  </div>

                  {/* Focus Area Badge - middle right */}
                  <div className="absolute top-20 -right-16 z-10">
                    <div className="bg-[#7879f1] text-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                      <div className="bg-white/20 p-2 rounded-xl">
                        <Image
                          src="/assets/Images/MartechLandingPage/focus-area-icon.png"
                          alt="Focus Area"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Focus Area</p>
                        <p className="text-sm opacity-90">Backend Development</p>
                      </div>
                    </div>
                  </div>

                  {/* Assessing Badge - bottom right */}
                  <div className="absolute bottom-20 -right-20 z-10">
                    <div className="bg-[#7879f1] text-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                      <div className="bg-white/20 p-2 rounded-xl">
                        <Image
                          src="/assets/Images/MartechLandingPage/assessing-icon.png"
                          alt="Assessing"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="max-w-[180px]">
                        <p className="font-bold text-sm">Assessing</p>
                        <p className="text-sm opacity-90 leading-tight">API Design, Data Structures & Algorithms</p>
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
            <div className="bg-[#e6f3ff] rounded-[40px] p-12">
          <div className="flex flex-col gap-8 items-center justify-center">
            {/* LinkedIn Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-5xl font-bold">in</span>
            </div>

            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-4xl font-bold text-[#020618]">
                Automatic candidate imports from{' '}
                <span className="text-[#0077B5]">LinkedIn Easy Apply</span>
              </h2>
              <p className="text-lg text-[#62748e]">
                Never lose a candidate again because Sally keeps your pipeline full.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">Connect your email once, and you're done</p>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">Sally automatically imports all applicants from LinkedIn Easy Apply</p>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">Sally continuously syncs new applicants as they apply in the future</p>
              </div>
            </div>

            {/* LinkedIn UI Preview */}
            <div className="bg-white rounded-2xl p-4 shadow-lg w-full">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-3 rounded-t-lg flex items-center justify-between">
                <span className="text-white text-sm font-semibold">BECAUSE EVERY HIRE MATTERS</span>
                <span className="text-white font-bold">VETTIO</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Vettio</p>
                    <p className="text-sm text-gray-600">Technology company</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <button className="bg-[#0077B5] text-white px-6 py-2 rounded-full font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 11.8954 15.1046 11 14 11C12.8954 11 12 11.8954 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Easy Apply
                  </button>
                  <button className="bg-white text-[#0077B5] border border-[#0077B5] px-6 py-2 rounded-full font-medium">
                    Save
                  </button>
                </div>
              </div>
            </div>
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