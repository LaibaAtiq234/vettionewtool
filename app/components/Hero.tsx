'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const FeatureCard = ({
  icon,
  title,
  isActive = false,
  description,
  isNewlyActive = false
}: {
  icon: string
  title: React.ReactNode
  isActive?: boolean
  description?: React.ReactNode
  isNewlyActive?: boolean
}) => {
  return (
    <div className={`
      flex flex-col gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 rounded-xl md:rounded-2xl h-[140px] sm:h-[170px] md:h-[204px] justify-center relative
      ${isActive
        ? 'bg-white border-2 border-slate-200 shadow-[0px_4px_14px_0px_rgba(93,95,239,0.5)] items-center'
        : 'bg-[#afaeff] border border-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.05)] items-start'
      }
    `}>
      <div className={`
        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center
        ${isActive ? 'bg-white' : 'bg-[#7879f1]'}
        shadow-[0px_10px_15px_-3px_rgba(93,95,239,0.5)]
        ${isNewlyActive ? 'animate-fadeIn' : ''}
      `}>
        <Image src={icon} alt="" width={32} height={32} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </div>
      <div className={`
        ${isActive ? 'text-[#020618] font-normal text-center' : 'text-[#314158] font-medium'}
        ${description ? 'text-xs sm:text-sm md:text-base lg:text-xl' : 'text-xs sm:text-sm md:text-lg lg:text-xl leading-4 sm:leading-5'}
        ${isNewlyActive ? 'animate-fadeIn' : ''}
      `}>
        {description || title}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
      `}</style>
    </div>
  )
}

const CardRow = ({ cards, isMobile = false }: { cards: any[], isMobile?: boolean }) => {
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3])
  const [animatingCard, setAnimatingCard] = useState<number | null>(null)
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'moving-down' | 'moving-left' | 'sliding-right'>('idle')
  const [newlyActiveCard, setNewlyActiveCard] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isMobile) {
      // Mobile carousel animation - move backwards like desktop
      const interval = setInterval(() => {
        if (!isAnimating) {
          setIsAnimating(true)
          setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
          setTimeout(() => setIsAnimating(false), 600)
        }
      }, 3000)
      return () => clearInterval(interval)
    } else {
      // Desktop animation
      const interval = setInterval(() => {
        const currentLast = cardOrder[3]
        setAnimatingCard(currentLast)
        setAnimationPhase('moving-down')

        // Phase 1: Move down and behind
        setTimeout(() => {
          setAnimationPhase('moving-left')
        }, 200)

        // Phase 2: Start sliding other cards right while card moves left
        setTimeout(() => {
          setAnimationPhase('sliding-right')
          // Mark the card that will become active
          setNewlyActiveCard(cardOrder[2])
        }, 400)

        // Phase 3: Update order
        setTimeout(() => {
          setCardOrder(prev => {
            const newOrder = [...prev]
            const last = newOrder.pop()!
            newOrder.unshift(last)
            return newOrder
          })
          setAnimatingCard(null)
          setAnimationPhase('idle')
        }, 1000)

        // Clear newly active after animation completes
        setTimeout(() => {
          setNewlyActiveCard(null)
        }, 1800)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [cardOrder, isMobile, currentIndex, isAnimating, cards.length])

  const cardSpacing = isMobile ? 80 : 140;
  const containerWidth = isMobile ? '100%' : '696px';
  const containerHeight = isMobile ? '180px' : '204px';
  const cardWidth = isMobile ? '200px' : '278px';

  // Mobile carousel style calculation
  const getMobileCardStyle = (index: number) => {
    const diff = (index - currentIndex + cards.length) % cards.length
    const adjustedDiff = diff > cards.length / 2 ? diff - cards.length : diff

    let translateX = adjustedDiff * 90
    let scale = 1
    let opacity = 1
    let zIndex = 10

    if (adjustedDiff === 0) {
      // Center card
      scale = 1
      opacity = 1
      zIndex = 30
    } else if (adjustedDiff === -1) {
      // Left card - positioned behind center, showing only right edge
      scale = 0.9
      opacity = 0.6
      zIndex = 10  // Behind center card
      translateX = -160  // Most of it hidden to the left
    } else if (adjustedDiff === 1) {
      // Right card - positioned behind center, showing only left edge
      scale = 0.9
      opacity = 0.6
      zIndex = 10  // Behind center card
      translateX = 160  // Most of it hidden to the right
    } else {
      scale = 0.7
      opacity = 0
      zIndex = 5
      translateX = adjustedDiff * 250
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }

  if (isMobile) {
    // Mobile carousel layout
    return (
      <div className="relative flex items-center justify-center overflow-hidden" style={{ width: containerWidth, height: containerHeight }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute"
              style={getMobileCardStyle(index)}
            >
              <div style={{ width: cardWidth }}>
                <FeatureCard
                  icon={card.icon}
                  title={card.title}
                  isActive={index === currentIndex}
                  description={index === currentIndex ? card.description : undefined}
                  isNewlyActive={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Desktop layout
  return (
    <div className="relative flex items-center justify-center" style={{ width: containerWidth, height: containerHeight, perspective: '1000px' }}>
      {cardOrder.map((originalIndex, currentPosition) => {
        const card = cards[originalIndex]
        const isActive = currentPosition === 3
        const isMovingToBack = animatingCard === originalIndex

        let left = `${currentPosition * 140}px`
        let top = '0px'
        let zIndex = currentPosition
        let transform = 'none'
        let opacity = 1
        let transition = 'none'

        if (isMovingToBack) {
          if (animationPhase === 'moving-down') {
            // Move down and scale slightly
            left = `${currentPosition * 140}px`
            top = '20px'
            transform = 'scale(0.95)'
            zIndex = -1
            opacity = 0.9
            transition = 'all 0.2s ease-out'
          } else if (animationPhase === 'moving-left' || animationPhase === 'sliding-right') {
            // Move left behind the cards
            left = '-50px'
            top = '20px'
            transform = 'scale(0.95)'
            zIndex = -1
            opacity = 0.8
            transition = 'all 0.6s ease-in-out'
          }
        } else if (animationPhase === 'sliding-right' && animatingCard !== null) {
          // Other cards smoothly slide right
          left = `${(currentPosition + 1) * 140}px`
          zIndex = currentPosition + 1
          transition = 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)'
        } else {
          // Default position
          transition = 'none'
        }

        return (
          <div
            key={originalIndex}
            className="absolute"
            style={{
              left,
              top,
              zIndex,
              width: cardWidth,
              transform,
              opacity,
              transition
            }}
          >
            <FeatureCard
              icon={card.icon}
              title={card.title}
              isActive={isActive}
              description={isActive ? card.description : undefined}
              isNewlyActive={isActive && newlyActiveCard === originalIndex}
            />
          </div>
        )
      })}
    </div>
  )
}

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoKey, setVideoKey] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  // Handle intersection observer for auto-pause/play
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && isPlaying) {
            // Reset to muted autoplay when scrolling out
            setIsPlaying(false)
            setVideoKey(prev => prev + 1)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current)
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current)
      }
    }
  }, [isPlaying])

  const handlePlayClick = () => {
    setIsPlaying(true)
    setVideoKey(prev => prev + 1)
  }

  const cards = [
    {
      icon: '/assets/Images/MartechLandingPage/medal-icon.png',
      title: <>Surfaces<br />Shortlist</>,
      description: (
        <div className="text-xs sm:text-sm md:text-base lg:text-xl leading-4 sm:leading-5 md:leading-6">
          Sally presents you with the{' '}
          <span className="font-bold">best talent</span>
        </div>
      )
    },
    {
      icon: '/assets/Images/MartechLandingPage/interview-icon.png',
      title: <>AI<br />Interviews</>,
      description: (
        <div className="text-xs sm:text-sm md:text-base lg:text-xl leading-4 sm:leading-5 md:leading-6">
          Sally <span className="font-bold">interviews</span>{' '}
          candidates for deeper insights
        </div>
      )
    },
    {
      icon: '/assets/Images/MartechLandingPage/cv-icon.png',
      title: <>Reads CVs<br />in seconds</>,
      description: (
        <div className="text-xs sm:text-sm md:text-base lg:text-xl leading-4 sm:leading-5 md:leading-6">
          Sally reads every CV, even if you receive{' '}
          <span className="font-bold">1000s of CVs</span>
        </div>
      )
    },
    {
      icon: '/assets/Images/MartechLandingPage/linkedin-icon.png',
      title: <>Easy<br />Apply</>,
      description: (
        <div className="text-xs sm:text-sm md:text-base lg:text-xl leading-4 sm:leading-5 md:leading-6">
          Sally auto-imports all{' '}
          <span className="font-bold">LinkedIn Easy Apply</span>{' '}
          candidates
        </div>
      )
    }
  ]

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-4 md:py-8 relative">
      {/* Top purple gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-32 md:h-64 bg-gradient-to-b from-[#7879f1]/15 via-[#5d5fef]/5 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-full lg:max-w-[1297px] mx-auto relative z-10">
        <div className="rounded-[20px] md:rounded-[30px] lg:rounded-[40px] bg-gradient-to-b from-[#d0cbfd] via-[#5d5fef] to-[#0a0449] relative overflow-visible">
          {/* Perspective Grid Pattern */}
          <div className="absolute inset-0 rounded-[40px] overflow-hidden opacity-15">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 800"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Define gradient masks for fading */}
              <defs>
                <radialGradient id="centerFade" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="20%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="40%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="70%" stopColor="white" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.6" />
                </radialGradient>
                <linearGradient id="edgeFade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="5%" stopColor="white" stopOpacity="0.2" />
                  <stop offset="20%" stopColor="white" stopOpacity="0.5" />
                  <stop offset="80%" stopColor="white" stopOpacity="0.5" />
                  <stop offset="95%" stopColor="white" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="gridMask">
                  <rect x="0" y="0" width="1000" height="800" fill="url(#centerFade)" />
                  <rect x="0" y="0" width="1000" height="800" fill="url(#edgeFade)" />
                </mask>
              </defs>

              <g mask="url(#gridMask)">
              {/* Horizontal lines - denser at center */}
              {[...Array(25)].map((_, i) => {
                const factor = (i - 12.5) / 12.5;
                const y = 400 + factor * 400 * Math.sign(factor) * Math.sqrt(Math.abs(factor));
                return (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={y}
                    x2="1000"
                    y2={y}
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="0.8"
                  />
                );
              })}

              {/* Vertical lines - converging from edges to center */}
              {[...Array(40)].map((_, i) => {
                const factor = (i - 20) / 20;
                // Spread lines more evenly across the width
                const xBottom = 500 + factor * 600; // Wider spread at bottom
                const xTop = 500 + (xBottom - 500) * 0.2; // Lines converge at top (horizon)

                return (
                  <line
                    key={`v-${i}`}
                    x1={xTop}
                    y1="0"
                    x2={xBottom}
                    y2="800"
                    stroke="rgba(255,255,255,0.9)"
                    strokeWidth="0.8"
                  />
                );
              })}
              </g>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-14 pt-6 sm:pt-8 md:pt-10 pb-[200px] sm:pb-[250px] md:pb-[320px]">
          {/* Badge */}
          <div className="bg-white border border-[#a5a6f6] rounded-full px-3 sm:px-4 md:px-6 py-1 md:py-1.5 flex items-center gap-1">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2L9.5 5.5L13.5 6L10.75 8.5L11.5 12.5L8 10.5L4.5 12.5L5.25 8.5L2.5 6L6.5 5.5L8 2Z" fill="#5d5fef"/>
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-[#5d5fef]">AI Recruitment Assistant</span>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-[32px] sm:text-[48px] md:text-[72px] lg:text-[90px] font-semibold leading-[1.1] sm:leading-[1.15] md:leading-[65px] lg:leading-[79px] tracking-tight">
              <span className="text-[#4f39f6]">Meet Sally</span>
              <span className="text-[#f6f8ff]">, Your AI</span>
            </h1>
            <h1 className="text-[32px] sm:text-[48px] md:text-[72px] lg:text-[90px] font-semibold text-[#f6f8ff] leading-[1.1] sm:leading-[1.15] md:leading-[65px] lg:leading-[79px] tracking-tight mt-2 sm:mt-3 md:mt-4">
              Recruiting Assistant
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-[#f6f8ff] mt-3 sm:mt-4 md:mt-6 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4">
              Never Miss A Great Hire Again Even When You Get Thousands Of Applicants.
            </p>
          </div>

          {/* Feature Cards with Animation */}
          <div className="w-full flex justify-center">
            <CardRow cards={cards} isMobile={isMobile} />
          </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 items-center">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <button className="px-4 sm:px-5 md:px-6 py-2 bg-transparent border border-white text-white font-medium text-xs sm:text-sm rounded-lg hover:bg-white/10 transition-colors">
                  Get Started For Free
                </button>
                <button className="px-4 sm:px-5 md:px-6 py-2 bg-slate-100 text-[#0f172b] font-medium text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                  <Image src="/assets/Images/MartechLandingPage/play.svg" alt="Play" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book a Demo
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm text-slate-100">
                <div className="flex items-center gap-1 justify-center">
                  <Image src="/assets/Images/MartechLandingPage/check-circle-one.svg" alt="Check" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1 justify-center">
                  <Image src="/assets/Images/MartechLandingPage/mingcute_time-line.svg" alt="Time" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Setup in under 5 minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Preview - Positioned to overlap */}
          <div className="absolute bottom-[-100px] sm:bottom-[-150px] md:bottom-[-200px] left-1/2 transform -translate-x-1/2 z-20 w-[90%] sm:w-[85%] md:w-auto max-w-[760px]" ref={videoContainerRef}>
            <div className="bg-white/10 backdrop-blur border border-[#f6f8ff] rounded-[20px] sm:rounded-[30px] md:rounded-[37px] p-4 sm:p-6 md:p-9 shadow-lg">
              <div className="relative w-full md:w-[692px] h-[200px] sm:h-[280px] md:h-[389px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-black group">
                <iframe
                  key={videoKey}
                  ref={iframeRef}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/bDnmG3njkNY?${
                    isPlaying
                      ? 'autoplay=1&mute=0&loop=0'
                      : 'autoplay=1&mute=1&loop=1&playlist=bDnmG3njkNY'
                  }&controls=1&rel=0&modestbranding=1`}
                  title="Sally in Action"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 bg-black/20 cursor-pointer"
                    onClick={handlePlayClick}
                  >
                    <Image
                      src="/assets/Images/MartechLandingPage/abstract circle play.png"
                      alt="Play"
                      width={120}
                      height={120}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-[120px] md:h-[120px] hover:scale-110 transition-transform"
                    />
                    <button className="bg-[rgba(120,100,240,0.7)] backdrop-blur px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full shadow-[0px_4px_12px_0px_rgba(93,95,239,0.2)] hover:bg-[rgba(120,100,240,0.8)] transition-colors">
                      <span className="text-white text-sm sm:text-lg md:text-[24px] font-medium">See Sally In Action</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add spacing for the overlapping video */}
      <div className="h-[120px] sm:h-[180px] md:h-[250px]"></div>
    </section>
  )
}