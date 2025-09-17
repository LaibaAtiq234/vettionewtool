'use client';

import React, { useState, useEffect } from 'react';
// Image assets/Images
const starIcon = "assets/Images/MartechlandingPage/517cadbd59a3e3f031e21c0eb074436d9821dcad.svg";
const chevronRight = "assets/Images/MartechlandingPage/8370edf6a2b19c7d8167f18935865fbcfa99cc6c.svg";
const chevronLeft = "assets/Images/MartechlandingPage/3c60624379d12c28d5a1e9b83e6b5975c6c53203.svg";
// Company logos
const disruptLogo = "assets/Images/MartechlandingPage/disrupt.com"; // Keep as is - no extension in filename
const zignalyLogo = "assets/Images/MartechlandingPage/Zignaly-logo.png";
const wellowsLogo = "assets/Images/MartechlandingPage/Wellows - logo.png";
const squatwolfLogo = "assets/Images/MartechlandingPage/Squatwolf-logo.png"; // Keep as is - file not found, may be missing
const puresquareLogo = "assets/Images/MartechlandingPage/Puresquare-logo.png";
const paklaunchLogo = "assets/Images/MartechlandingPage/Palaunch-logo.png";
const laamLogo = "assets/Images/MartechlandingPage/Laam-logo.png";
const littleUmbrellaLogo = "assets/Images/MartechlandingPage/Little Umbrella-logo.png";

const testimonials = [
  {
    quote: "With Vettio's LinkedIn Easy Apply integration, we process 800+ applicants per role in under 30 minutes — zero manual uploads, and every CV gets reviewed.",
    author: "Head of Talent Acquisition",
    company: "Disrupt.com",
    companyLogo: disruptLogo,
    stats: "800+ applications processed in under 30 minutes; 65 hours saved per role",
    badge: "LinkedIn Easy Apply",
    category: "LinkedIn Easy Apply",
    keyMetric: "800+ applications processed in under 30 minutes; 65 hours saved per role",
    rating: 5
  },
  {
    quote: "The 24/7 AI video interviews and dual scoring help us spot real talent instantly, cutting false positives by more than half.",
    author: "Talent Acquisition Manager",
    company: "Zignaly",
    companyLogo: zignalyLogo,
    stats: "60% fewer false positives; decisions in hours not days",
    badge: "AI Video Interviews",
    category: "AI Video Interviews",
    keyMetric: "60% fewer false positives; decisions in hours not days",
    rating: 5
  },
  {
    quote: "We keep Easy Apply on without the chaos — domain-specific AI and 100% coverage mean we never miss a qualified candidate.",
    author: "HR Director",
    company: "Wellows",
    companyLogo: wellowsLogo,
    stats: "100% application coverage; 3x more candidates handled",
    badge: "LinkedIn Easy Apply",
    category: "LinkedIn Easy Apply",
    keyMetric: "100% application coverage; 3x more candidates handled",
    rating: 5
  },
  {
    quote: "Unlimited AI interviews and instant shortlist queries save us 60+ hours per role and get hiring managers stronger candidates.",
    author: "Recruitment Lead",
    company: "Squatwolf",
    companyLogo: squatwolfLogo,
    stats: "60+ hours saved per role; higher shortlist quality",
    badge: "AI Video Interviews",
    category: "AI Video Interviews",
    keyMetric: "60+ hours saved per role; higher shortlist quality",
    rating: 5
  },
  {
    quote: "Even for niche technical roles, Vettio's domain-aware scoring gives our non-tech recruiters full confidence in the shortlist.",
    author: "Head of People",
    company: "Puresquare",
    companyLogo: puresquareLogo,
    stats: "35% better interview-to-offer ratio",
    badge: "Domain-Specific Evaluation",
    category: "Domain-Specific Evaluation",
    keyMetric: "35% better interview-to-offer ratio",
    rating: 5
  },
  {
    quote: "I can ask the AI for 'B2B SaaS candidates with Kubernetes' and get a ranked list in seconds — all with zero manual processing.",
    author: "Talent Acquisition Manager",
    company: "Paklaunch.com",
    companyLogo: paklaunchLogo,
    stats: "Instant candidate filtering; zero manual processing",
    badge: "Conversational AI",
    category: "Conversational AI",
    keyMetric: "Instant candidate filtering; zero manual processing",
    rating: 5
  },
  {
    quote: "The interview clips and clear scoring for both CV and interview mean we know who to meet right away, cutting our hiring cycle by 40%.",
    author: "Hiring Manager",
    company: "LAAM",
    companyLogo: laamLogo,
    stats: "40% faster hiring cycle",
    badge: "CV + Interview Scoring",
    category: "CV + Interview Scoring",
    keyMetric: "40% faster hiring cycle",
    rating: 5
  },
  {
    quote: "With Vettio's AI handling first-round interviews, I only meet candidates who have already shown the skills we need — saving me 10+ hours every week.",
    author: "Hiring Manager",
    company: "Zignaly",
    companyLogo: zignalyLogo,
    stats: "10+ hiring manager hours saved weekly",
    badge: "AI Video Interviews",
    category: "AI Video Interviews",
    keyMetric: "10+ hiring manager hours saved weekly",
    rating: 5
  },
  {
    quote: "We process over 1,000+ Easy Apply inbound applications seamlessly — saving more than $5,000 in recruiter hours per high-volume role.",
    author: "HR Director",
    company: "Little Umbrella",
    companyLogo: littleUmbrellaLogo,
    stats: "$5,000 saved per high-volume role; 1,000+ applications processed",
    badge: "LinkedIn Easy Apply",
    category: "LinkedIn Easy Apply",
    keyMetric: "$5,000 saved per high-volume role; 1,000+ applications processed",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleDotClick = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#5d5fef"
            className="w-4 md:w-5 h-4 md:h-5"
          >
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
          </svg>
        ))}
      </div>
    );
  };

  // Calculate positions for smooth sliding
  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + testimonials.length) % testimonials.length;
    const adjustedDiff = diff > testimonials.length / 2 ? diff - testimonials.length : diff;
    
    // Position calculations with responsive adjustments
    let translateX = adjustedDiff * (isMobile ? 90 : 110); // Spacing between cards
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    
    if (adjustedDiff === 0) {
      // Center card
      scale = 1;
      opacity = 1;
      zIndex = 30;
    } else if (Math.abs(adjustedDiff) === 1) {
      // Side cards
      scale = isMobile ? 0.8 : 0.85;
      opacity = isMobile ? 0.4 : 0.6;
      zIndex = 20;
      translateX = adjustedDiff * (isMobile ? 350 : 520); // Side cards positioned further
    } else {
      // Hidden cards
      scale = 0.7;
      opacity = 0;
      zIndex = 10;
      translateX = adjustedDiff * (isMobile ? 400 : 600);
    }
    
    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: 'rgba(170, 171, 242, 0.2)' }}>
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto">
        <h2 className="font-['Inter',_sans-serif] font-bold text-[28px] md:text-[36px] lg:text-[48px] text-gray-900 mb-3 md:mb-4 leading-tight">
          Join 200+ recruiters who have transformed their hiring
        </h2>
        <p className="font-['Inter',_sans-serif] text-[14px] md:text-[16px] lg:text-[18px] text-gray-600 px-4">
          Real results from real recruiters who switched to AI-powered hiring
        </p>
      </div>

      {/* Testimonials Carousel Container */}
      <div className="relative max-w-7xl mx-auto h-[500px] md:h-[450px]">
        {/* Cards Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="absolute"
              style={getCardStyle(index)}
            >
              <div className="bg-white rounded-[20px] shadow-xl p-6 md:p-8 w-[85vw] sm:w-[500px] md:w-[600px] max-w-[600px]">
                {/* Stars */}
                {renderStars(testimonial.rating)}

                {/* Quote */}
                <p className="font-['Inter',_sans-serif] text-[16px] md:text-[18px] lg:text-[20px] font-medium text-center text-gray-900 leading-relaxed mt-4 md:mt-6 mb-6 md:mb-8">
                  &apos;{testimonial.quote}&apos;
                </p>

                {/* Company Logo */}
                {testimonial.companyLogo && (
                  <div className="flex justify-center mb-4 md:mb-6">
                    <img 
                      src={testimonial.companyLogo} 
                      alt={testimonial.company || ''}
                      className={`w-auto object-contain ${
                        testimonial.company === 'LAAM' 
                          ? 'h-16 md:h-20' 
                          : testimonial.company === 'Zignaly'
                          ? 'h-20 md:h-24'
                          : testimonial.company === 'Squatwolf'
                          ? 'h-20 md:h-24'
                          : testimonial.company === 'Little Umbrella'
                          ? 'h-16 md:h-20'
                          : testimonial.company === 'Wellows'
                          ? 'h-6 md:h-8'
                          : testimonial.company === 'Paklaunch.com'
                          ? 'h-12 md:h-16'
                          : 'h-8 md:h-10'
                      }`}
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        console.error(`Failed to load logo for ${testimonial.company}:`, testimonial.companyLogo);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Stats */}
                {testimonial.stats && (
                  <p className="font-['Inter',_sans-serif] font-semibold text-[14px] md:text-[16px] lg:text-[18px] text-[#5d5fef] text-center mb-3 md:mb-4 px-4">
                    {testimonial.stats}
                  </p>
                )}

                {/* Author */}
                <p className="font-['Inter',_sans-serif] text-[12px] md:text-[14px] text-gray-600 text-center mb-4 md:mb-6">
                  {testimonial.author}
                </p>

                {/* Badge */}
                <div className="flex justify-center">
                  <span className="bg-[#5d5fef]/10 text-[#5d5fef] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[12px] md:text-[14px] font-['Inter',_sans-serif] font-semibold">
                    {testimonial.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={handlePrevious}
          disabled={isAnimating}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img src={chevronLeft} alt="Previous" className="w-4 md:w-5 h-4 md:h-5" />
        </button>
        
        <button 
          onClick={handleNext}
          disabled={isAnimating}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img src={chevronRight} alt="Next" className="w-4 md:w-5 h-4 md:h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 justify-center mt-8 md:mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            disabled={isAnimating}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 h-2 bg-[#5d5fef] rounded-full'
                : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
            } disabled:cursor-not-allowed`}
          />
        ))}
      </div>
    </section>
  );
}