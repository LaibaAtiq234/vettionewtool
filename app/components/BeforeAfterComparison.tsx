"use client";

import React from "react";
import Image from "next/image";
import { CheckIcon, XIcon, ClockIcon } from "./Icons";

const BeforeAfterComparison = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          From CV Chaos to Qualified Shortlists in Minutes
        </h2>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-60">
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, rgba(120, 121, 241, 0.3) 0%, rgba(93, 95, 239, 0.1) 40%, transparent 70%)`,
                }}
              />
            </div>

            <div className="absolute right-8 top-10 space-y-3 z-10">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg border border-gray-200">
                <div className="bg-purple-200 rounded-full p-1">
                  <CheckIcon color="#9333ea" />
                </div>
                <span className="text-xs text-gray-700">100+ hours saved on manual screening</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg border border-gray-200 ml-8">
                <div className="bg-yellow-100 rounded-full p-1">
                  <CheckIcon color="#ca8a04" />
                </div>
                <span className="text-xs text-gray-700">50% higher recruiter productivity</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg border border-gray-200 ml-4">
                <div className="bg-indigo-500 rounded-full p-1">
                  <CheckIcon color="#ffffff" />
                </div>
                <span className="text-xs text-gray-700">One-click Easy Apply = 2x more applicants</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg border border-gray-200 ml-12">
                <div className="bg-indigo-400 rounded-full p-1">
                  <CheckIcon color="#ffffff" />
                </div>
                <span className="text-xs text-gray-700">1,000+ CVs screened in minutes</span>
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-0">
              <div className="bg-white border-r border-gray-200">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Before Sally</h3>
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <XIcon color="#ef4444" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Keyword-based ATS → false positives & negatives
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <XIcon color="#ef4444" />
                    </div>
                    <p className="text-sm text-gray-600">
                      100s of irrelevant CVs, days wasted screening
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <XIcon color="#ef4444" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Hiring managers spend hours interviewing wrong candidates
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <XIcon color="#ef4444" />
                    </div>
                    <p className="text-sm text-gray-600">
                      "Easy Apply" floods you with junk applications
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <XIcon color="#ef4444" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Disable "Easy Apply" → miss out on great talent
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <XIcon color="#ef4444" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Manual downloads of 1000s of CVs
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <ClockIcon />
                    <span className="text-sm">Time to hire: 6-8 weeks</span>
                  </div>
                </div>
              </div>

              <div className="bg-white">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">After Sally</h3>
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckIcon color="#22c55e" />
                    </div>
                    <p className="text-sm text-gray-900">
                      Context-based matching with domain expertise → accurate shortlists every time
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckIcon color="#22c55e" />
                    </div>
                    <p className="text-sm text-gray-900">
                      Reviews 1000s of CVs in minutes → saves days of manual effort
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckIcon color="#22c55e" />
                    </div>
                    <p className="text-sm text-gray-900">
                      Runs first interviews → you only invest time in top talent
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckIcon color="#22c55e" />
                    </div>
                    <p className="text-sm text-gray-900">
                      Handles 1000s of Easy Apply CVs → filters the noise, finds the gems
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckIcon color="#22c55e" />
                    </div>
                    <p className="text-sm text-gray-900">
                      Keep Easy Apply on → capture more talent without extra work
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckIcon color="#22c55e" />
                    </div>
                    <p className="text-sm text-gray-900">
                      Auto-imports every CV → faster hiring
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full inline-flex">
                    <ClockIcon />
                    <span className="text-sm font-medium">Time to hire: 1-2 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              Get Started For Free
            </button>
            <div className="flex items-center gap-6 text-sm text-gray-600">
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
      </div>
    </section>
  );
};

export default BeforeAfterComparison;