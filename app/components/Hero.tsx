'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

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
      flex flex-col gap-6 px-6 py-8 rounded-2xl h-[204px] justify-center relative
      ${isActive
        ? 'bg-white border-2 border-slate-200 shadow-[0px_4px_14px_0px_rgba(93,95,239,0.5)] items-center'
        : 'bg-[#afaeff] border border-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.05)] items-start'
      }
    `}>
      <div className={`
        w-14 h-14 rounded-full flex items-center justify-center
        ${isActive ? 'bg-white' : 'bg-[#7879f1]'}
        shadow-[0px_10px_15px_-3px_rgba(93,95,239,0.5)]
        ${isNewlyActive ? 'animate-fadeIn' : ''}
      `}>
        <Image src={icon} alt="" width={32} height={32} />
      </div>
      <div className={`
        ${isActive ? 'text-[#020618] font-normal text-center' : 'text-[#314158] font-medium'}
        ${description ? '' : 'text-xl leading-5'}
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

const CardRow = ({ cards }: { cards: any[] }) => {
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3])
  const [animatingCard, setAnimatingCard] = useState<number | null>(null)
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'moving-down' | 'moving-left' | 'sliding-right'>('idle')
  const [newlyActiveCard, setNewlyActiveCard] = useState<number | null>(null)

  useEffect(() => {
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
  }, [cardOrder])

  return (
    <div className="relative flex items-center" style={{ width: '696px', height: '204px', perspective: '1000px' }}>
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
              width: '278px',
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
  const cards = [
    {
      icon: '/medal-icon.png',
      title: <>Surfaces<br />Shortlist</>,
      description: (
        <div className="text-xl leading-6">
          Sally presents you with the{' '}
          <span className="font-bold">best talent</span>
        </div>
      )
    },
    {
      icon: '/interview-icon.png',
      title: <>AI<br />Interviews</>,
      description: (
        <div className="text-xl leading-6">
          Sally <span className="font-bold">interviews</span>{' '}
          candidates for deeper insights
        </div>
      )
    },
    {
      icon: '/cv-icon.png',
      title: <>Reads CVs<br />in seconds</>,
      description: (
        <div className="text-xl leading-6">
          Sally reads every CV, even if you receive{' '}
          <span className="font-bold">1000s of CVs</span>
        </div>
      )
    },
    {
      icon: '/linkedin-icon.png',
      title: <>Easy<br />Apply</>,
      description: (
        <div className="text-xl leading-6">
          Sally auto-imports all{' '}
          <span className="font-bold">LinkedIn Easy Apply</span>{' '}
          candidates
        </div>
      )
    }
  ]

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

          {/* Feature Cards with Animation */}
          <CardRow cards={cards} />

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