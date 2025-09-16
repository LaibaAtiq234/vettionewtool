'use client'

import React from 'react'

// Define types for client properties
interface Client {
  name: string
  logo: string
  superLarge?: boolean
  extraLarge?: boolean
  smaller?: boolean
  extraSmall?: boolean
}

// Company logos
const zignalyLogo = "/assets/Images/MartechLandingPage/Zignaly-logo.png"
const wellowsLogo = "/assets/Images/MartechLandingPage/Wellows - logo.png"
const squatwolfLogo = "/assets/Images/MartechLandingPage/Squatwolf-logo.png"
const puresquareLogo = "/assets/Images/MartechLandingPage/Puresquare-logo.png"
const paklaunchLogo = "/assets/Images/MartechLandingPage/Palaunch-logo.png"
const laamLogo = "/assets/Images/MartechLandingPage/Laam-logo.png"
const littleUmbrellaLogo = "/assets/Images/MartechLandingPage/Little Umbrella-logo.png"
const zamanatLogo = "/assets/Images/MartechLandingPage/Zamanat-logo.svg"
const relveLogo = "/assets/Images/MartechLandingPage/Relve-logo.svg"

const clients: Client[] = [
  { name: 'Zignaly', logo: zignalyLogo, extraLarge: true },
  { name: 'Wellows', logo: wellowsLogo, extraSmall: true },
  { name: 'Squatwolf', logo: squatwolfLogo, extraLarge: true },
  { name: 'Puresquare', logo: puresquareLogo },
  { name: 'Paklaunch', logo: paklaunchLogo },
  { name: 'LAAM', logo: laamLogo, extraLarge: true },
  { name: 'Little Umbrella', logo: littleUmbrellaLogo, superLarge: true },
  { name: 'Zamanat', logo: zamanatLogo, superLarge: true },
  { name: 'Relve', logo: relveLogo },
]

export default function ClientLogos() {
  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center relative w-full overflow-hidden py-3 md:py-8">
        <div className="h-[75px] md:h-[95px] mix-blend-luminosity overflow-hidden relative w-full">
          {/* Scrolling container with tripled items for seamless infinite scroll */}
          <div className="flex gap-[50px] md:gap-[80px] items-center animate-scroll-left whitespace-nowrap">
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div key={`client-1-${index}`} className="shrink-0 flex items-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${
                    client.superLarge ? 'h-[75px] md:h-[95px]' :
                    client.extraLarge ? 'h-[70px] md:h-[90px]' :
                    client.smaller ? 'h-[30px] md:h-[40px]' :
                    client.extraSmall ? 'h-[20px] md:h-[30px]' :
                    'h-[40px] md:h-[50px]'
                  } w-auto object-contain`}
                />
              </div>
            ))}

            {/* Second duplicate set for seamless infinite scroll */}
            {clients.map((client, index) => (
              <div key={`client-2-${index}`} className="shrink-0 flex items-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${
                    client.superLarge ? 'h-[75px] md:h-[95px]' :
                    client.extraLarge ? 'h-[70px] md:h-[90px]' :
                    client.smaller ? 'h-[30px] md:h-[40px]' :
                    client.extraSmall ? 'h-[20px] md:h-[30px]' :
                    'h-[40px] md:h-[50px]'
                  } w-auto object-contain`}
                />
              </div>
            ))}

            {/* Third duplicate set for even smoother transition */}
            {clients.map((client, index) => (
              <div key={`client-3-${index}`} className="shrink-0 flex items-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${
                    client.superLarge ? 'h-[75px] md:h-[95px]' :
                    client.extraLarge ? 'h-[70px] md:h-[90px]' :
                    client.smaller ? 'h-[30px] md:h-[40px]' :
                    client.extraSmall ? 'h-[20px] md:h-[30px]' :
                    'h-[40px] md:h-[50px]'
                  } w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}