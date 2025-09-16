'use client'

import { useEffect, useRef } from 'react'

interface Client {
  name: string
  logo: React.ReactNode
}

const clients: Client[] = [
  {
    name: 'Web Affinity',
    logo: (
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-gray-600">WA</span>
      </div>
    )
  },
  {
    name: 'Pure2',
    logo: (
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-gray-600">P2</span>
      </div>
    )
  },
  {
    name: 'Pure2',
    logo: (
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-gray-600">P2</span>
      </div>
    )
  },
  {
    name: 'Zignaly',
    logo: (
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-gray-600">Z</span>
      </div>
    )
  },
  {
    name: 'Gaditek',
    logo: (
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-gray-600">G</span>
      </div>
    )
  },
  {
    name: 'Squatwolf',
    logo: (
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-gray-600">SW</span>
      </div>
    )
  },
  {
    name: 'Web Affinity',
    logo: (
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-gray-600">WA</span>
      </div>
    )
  }
]

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollAnimation = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const intervalId = setInterval(scrollAnimation, 30)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="relative">
        {/* Gradient masks for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {/* Double the clients for infinite scroll effect */}
          <div className="flex gap-12 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center gap-2 shrink-0 opacity-60 hover:opacity-100 transition-opacity"
              >
                {client.logo}
                <span className="text-[#5d5fef] text-xl font-light whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}