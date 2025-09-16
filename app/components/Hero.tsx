'use client'

import Image from 'next/image'

const FeatureCard = ({
  icon,
  title,
  isActive = false
}: {
  icon: React.ReactNode
  title: React.ReactNode
  isActive?: boolean
}) => {
  return (
    <div className={`
      flex flex-col gap-6 px-6 py-8 rounded-2xl h-[204px] justify-center
      ${isActive
        ? 'bg-white border-2 border-slate-200 shadow-[0px_4px_14px_0px_rgba(93,95,239,0.5)]'
        : 'bg-[#afaeff] border border-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.05)]'
      }
    `}>
      <div className={`
        w-14 h-14 rounded-full flex items-center justify-center
        ${isActive ? 'bg-white' : 'bg-[#7879f1]'}
        shadow-[0px_10px_15px_-3px_rgba(93,95,239,0.5)]
      `}>
        {icon}
      </div>
      <div className={`
        text-xl leading-5
        ${isActive ? 'text-[#020618] font-normal' : 'text-[#314158] font-medium'}
      `}>
        {title}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="w-full px-20 py-8">
      <div className="max-w-[1297px] mx-auto rounded-[40px] bg-gradient-to-b from-[#d0cbfd] via-[#5d5fef] to-[#0a0449] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[url('/grid-pattern.svg')] bg-repeat rotate-180" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[url('/grid-pattern.svg')] bg-repeat" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-10 px-14 py-10">
          {/* Badge */}
          <div className="bg-white border border-[#a5a6f6] rounded-full px-6 py-1.5 flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2L9.5 5.5L13.5 6L10.75 8.5L11.5 12.5L8 10.5L4.5 12.5L5.25 8.5L2.5 6L6.5 5.5L8 2Z" fill="#5d5fef"/>
            </svg>
            <span className="text-sm font-semibold text-[#5d5fef]">AI Recruitment Assistant</span>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-[90px] font-semibold leading-[79px] tracking-tight">
              <span className="text-[#4f39f6]">Meet Sally</span>
              <span className="text-[#f6f8ff]">, Your AI</span>
            </h1>
            <h1 className="text-[90px] font-semibold text-[#f6f8ff] leading-[79px] tracking-tight mt-4">
              Recruiting Assistant
            </h1>
            <p className="text-2xl font-medium text-[#f6f8ff] mt-6 max-w-3xl mx-auto">
              Never Miss A Great Hire Again Even When You Get Thousands Of Applicants.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="flex gap-4 -mr-32">
            <FeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4L20 12H28L21 17L24 26L16 20L8 26L11 17L4 12H12L16 4Z" fill="white"/>
                </svg>
              }
              title={<>Surfaces<br />Shortlist</>}
            />
            <FeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C12.69 8 10 10.69 10 14C10 17.31 12.69 20 16 20C19.31 20 22 17.31 22 14C22 10.69 19.31 8 16 8ZM16 18C13.79 18 12 16.21 12 14C12 11.79 13.79 10 16 10C18.21 10 20 11.79 20 14C20 16.21 18.21 18 16 18Z" fill="white"/>
                  <path d="M16 22C11 22 6.9 24.86 6 28H26C25.1 24.86 21 22 16 22Z" fill="white"/>
                </svg>
              }
              title={<>AI<br />Interviews</>}
            />
            <FeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="8" width="20" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M10 13H22M10 17H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
              title={<>Reads CVs<br />in seconds</>}
            />
            <FeatureCard
              icon={
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16Z" fill="#0077B5"/>
                  <path d="M12 13H11V21H12V13Z" fill="white"/>
                  <path d="M12.5 10C12.5 10.8284 11.8284 11.5 11 11.5C10.1716 11.5 9.5 10.8284 9.5 10C9.5 9.17157 10.1716 8.5 11 8.5C11.8284 8.5 12.5 9.17157 12.5 10Z" fill="white"/>
                  <path d="M14 21H15V16.5C15 15.5 15.5 15 16.5 15C17.5 15 18 15.5 18 16.5V21H19V16C19 14.5 18 13 16 13C15 13 14.5 13.5 14 14V13H13V21H14Z" fill="white"/>
                </svg>
              }
              title={
                <>Sally auto-imports all <br />
                <span className="font-bold">LinkedIn Easy Apply</span><br />
                candidates</>
              }
              isActive={true}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-transparent border border-white text-white font-medium text-sm rounded-lg hover:bg-white/10 transition-colors">
                Get Started For Free
              </button>
              <button className="px-6 py-2 bg-slate-100 text-[#0f172b] font-medium text-sm rounded-lg flex items-center gap-2 hover:bg-slate-200 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6L14 10L8 14V6Z" fill="#0f172b"/>
                </svg>
                Book a Demo
              </button>
            </div>
            <div className="flex gap-8 text-sm text-slate-100">
              <div className="flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="7" stroke="#f6f8ff" strokeWidth="2"/>
                  <path d="M7 10L9 12L13 8" stroke="#f6f8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="7" stroke="#f6f8ff" strokeWidth="2"/>
                  <path d="M10 6V10L13 13" stroke="#f6f8ff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Setup in under 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <div className="mt-8 relative">
            <div className="bg-white/10 backdrop-blur border border-[#f6f8ff] rounded-[37px] p-9 shadow-lg">
              <div className="relative w-[692px] h-[556px] rounded-3xl overflow-hidden bg-white/20 backdrop-blur-sm">
                <Image
                  src="/video-thumbnail.jpg"
                  alt="Sally in Action"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-[#432dd7]/70 backdrop-blur text-white px-10 py-6 rounded-full text-3xl font-medium hover:bg-[#432dd7]/80 transition-colors shadow-lg flex items-center gap-4">
                    See Sally In Action
                  </button>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.5 15L42.5 30L22.5 45V15Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}