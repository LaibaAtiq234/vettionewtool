'use client'

import { CheckIcon, XIcon } from './Icons'

interface HiringOption {
  title: string
  icon: React.ReactNode
  pros: string[]
  cons: string[]
}

const hiringOptions: HiringOption[] = [
  {
    title: 'Enable Easy Apply',
    icon: (
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16C8 11.58 11.58 8 16 8C20.42 8 24 11.58 24 16C24 20.42 20.42 24 16 24H8" stroke="#0077B5" strokeWidth="2"/>
          <path d="M12 13V19M12 13L10 13M12 16H10" stroke="#0077B5" strokeWidth="2"/>
          <circle cx="12" cy="10" r="1" fill="#0077B5"/>
          <path d="M16 13V19M16 13C16 13 17 13 18 13C19 13 20 14 20 15C20 16 19 17 18 17H16M18 17C19 17 20 18 20 19H16" stroke="#0077B5" strokeWidth="2"/>
        </svg>
      </div>
    ),
    pros: ['Huge applicant volume'],
    cons: ['Download each CV manually', 'Unqualified noise']
  },
  {
    title: 'Rely On ATS Filters',
    icon: (
      <div className="w-14 h-14 bg-white/70 rounded-full flex items-center justify-center shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="8" width="20" height="16" rx="2" stroke="#7879F1" strokeWidth="2"/>
          <path d="M10 13H22M10 17H18" stroke="#7879F1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    pros: ['Basic automation'],
    cons: ['Keyword blind spots', 'Great candidates filtered out']
  },
  {
    title: 'Drive Applicants To Your Career Site',
    icon: (
      <div className="w-14 h-14 bg-white/70 rounded-full flex items-center justify-center shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="12" r="4" stroke="#7879F1" strokeWidth="2"/>
          <path d="M8 26C8 22 11.5 20 16 20C20.5 20 24 22 24 26" stroke="#7879F1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    pros: ['You now have to screen a lot less applications'],
    cons: ['You miss out on great candidates']
  },
  {
    title: 'Domain Expertise',
    icon: (
      <div className="w-14 h-14 bg-white/70 rounded-full flex items-center justify-center shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L20 12H28L21 17L24 26L16 20L8 26L11 17L4 12H12L16 4Z" fill="#FFD700"/>
        </svg>
      </div>
    ),
    pros: ['Human expertise'],
    cons: ['$15k–$30k per hire', 'Still limited by bandwidth']
  }
]

export default function HiringOptions() {
  return (
    <section className="w-full py-14 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Why Your Current Hiring Options Fail You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {hiringOptions.map((option, index) => (
            <div
              key={index}
              className="bg-red-50 border-2 border-[#ffa2a2] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center gap-6">
                {option.icon}
                <h3 className="text-xl font-bold text-center text-[#020618]">
                  {option.title}
                </h3>
                <div className="w-full space-y-3">
                  {option.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm text-black">{pro}</span>
                    </div>
                  ))}
                  {option.cons.map((con, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <XIcon />
                      <span className="text-sm text-black">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <button className="px-8 py-3 bg-[#7879f1] text-white font-bold rounded-lg hover:bg-[#6869e0] transition-colors">
            Get Started For Free
          </button>
          <div className="flex gap-6 text-sm text-[#314158]">
            <div className="flex items-center gap-1">
              <CheckIcon color="#5d5fef" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="#5d5fef" strokeWidth="2"/>
                <path d="M10 6V10L13 13" stroke="#5d5fef" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}