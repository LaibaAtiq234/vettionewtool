'use client';
import { web_assets } from "@/utils/constants";
import React, { useState } from 'react';

// Image assets/Images
const searchIcon = web_assets + "MartechlandingPage/037d414327aa68686a4c4df5147ba311fcc040dd.svg";
const chevronIcon = web_assets + "MartechlandingPage/2ab2372e12628c438a2409ea3192f8a8b1b2c8ac.svg";

const faqData = [
  {
    question: "Do candidates actually complete AI interviews?",
    answer: "Yes—more than 80% of candidates we invite complete their AI interview. Candidates often tell us they value the chance to share their story beyond the CV. With Sally, they feel truly heard: she has domain expertise, asks relevant follow-ups, and understands the nuances of their experience. For many candidates, the AI interview is their opportunity to stand out and highlight what makes them unique."
  },
  {
    question: "How fast is Sally really?",
    answer: "Lightning fast. Unlike humans, Sally isn't limited to working one CV or one interview at a time. She can review thousands of CVs in just minutes and conduct interviews with thousands of candidates simultaneously. In fact, Sally has already interviewed over 2,000 candidates at the same time—something no human recruiter could ever do."
  },
  {
    question: "Can Sally really understand technical roles?",
    answer: "Yes. Sally has been trained on thousands of roles and understands the nuances of each one. For example, if you're hiring a Python Developer, Sally not only knows what that role typically looks like in companies like yours, but also understands how to evaluate a candidate's real-world experience with Python. This means Sally can go beyond keywords—she can truly grasp technical roles and assess candidates with depth and accuracy."
  },
  {
    question: "How does Sally automatically import candidates from LinkedIn Easy Apply?",
    answer: "When you post a job on LinkedIn, you provide an email address for applicant notifications. All you need to do is connect that email to Sally once during setup. From then on, Sally automatically reads the LinkedIn application emails, imports every new candidate into your dashboard, and keeps syncing future applicants as they apply—no extra work needed."
  },
  {
    question: "How do AI interviews work?",
    answer: "Sally conducts interviews based entirely on your job requirements. Once you shortlist candidates, you can send them an AI interview invite. Candidates then choose a time that works best for them and complete the interview with Sally. The process is simple and intuitive—Sally guides candidates through relevant questions and follow-ups to deeply understand their experience and fit for the role."
  },
  {
    question: "Is it really free?",
    answer: "Yes—absolutely free. No credit card required, and it will always remain free. Our mission is to change the lives of candidates by helping them find better jobs. We believe the only way to do this at scale is by making it dramatically easier for recruiters and hiring managers to discover the right candidates. That's why we've made Sally free forever—so everyone can benefit, not just those who can afford it."
  },
  {
    question: "Do I need to change my ATS?",
    answer: "Not at all—you can keep using your existing ATS. The challenge is that LinkedIn doesn't allow most ATS platforms to integrate with LinkedIn Easy Apply unless they are a premium partner (which is very rare). This means many of those applications never flow into your ATS. Sally solves this by capturing every LinkedIn Easy Apply candidate for you. Most recruiters use Sally alongside their ATS: Sally not only imports these candidates but also interviews them, evaluates their fit, and shortlists the strongest profiles. Recruiters then simply move those shortlisted candidates into their ATS for the hiring manager. This way, you don't have to change a thing in your current workflow, but you also never miss out on great candidates from LinkedIn."
  },
  {
    question: "If Sally is free, does that mean you sell my data?",
    answer: "Absolutely not. We understand this is a common concern, and we want to be clear: we never sell your data. Sally is fully GDPR compliant, and your data is only used for one purpose — evaluating candidates for your roles. You can be completely assured that your information, and your candidates' information, is safe and secure with us.",
    isExpanded: true
  }
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const filteredFAQs = faqData.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Poppins',_sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-gray-900 mb-3 md:mb-4">
            Frequently asked questions
          </h2>
          <p className="font-['Poppins',_sans-serif] text-[14px] md:text-[16px] text-gray-500">
            Everything you need to know about Sally
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6 md:mb-8">
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2">
            <img src={searchIcon} alt="Search" className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Type a question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[45px] md:h-[50px] pl-10 md:pl-10 pr-4 border border-gray-200 rounded-[8px] font-['Inter',_sans-serif] text-[14px] md:text-[16px] placeholder-[#adaebc] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 md:space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div 
                key={index}
                className="bg-[#f9f9fb] rounded-[12px] overflow-hidden transition-all duration-300"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer p-4 md:p-6"
                  onClick={() => toggleExpand(index)}
                >
                  <h3 className="font-['Poppins',_sans-serif] font-semibold text-[15px] md:text-[17px] lg:text-[18px] text-black pr-4">
                    {faq.question}
                  </h3>
                  
                  <img 
                    src={chevronIcon} 
                    alt="" 
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </div>

                {/* Answer */}
                <div 
                  className={`px-4 md:px-6 transition-all duration-500 ${
                    isExpanded ? 'max-h-[500px] opacity-100 pb-4 md:pb-6' : 'max-h-0 opacity-0 pb-0'
                  }`}
                  style={{
                    overflow: 'hidden'
                  }}
                >
                  <p className="font-['Inter',_sans-serif] text-[13px] md:text-[14px] lg:text-[15px] text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-8 md:py-12">
              <p className="font-['Inter',_sans-serif] text-[14px] md:text-[16px] text-gray-500">
                No questions found matching your search. Please try different keywords.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}