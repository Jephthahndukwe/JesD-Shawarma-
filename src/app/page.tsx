'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import OurStory from '../../components/OurStory'
import MenuTestimonials from '../../components/MenuTestimonials'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Footer from '../../components/Footer'
import WhatsappOrder from '../../components/WhatsappOrder'

export default function Home() {
  const images = [
    '/images/shawarma-home.png',
    '/images/shawarma-home2.png',
    '/images/shawarma-home3.png',
    '/images/shawarma-home4.png',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
          {/* <div className="absolute inset-0 bg-black/30"></div> */}
        </div>

        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-2">
          <h1 className="text-[50px] md:text-[100px] font-hallelujah text-white leading-tight max-w-7xl">
            Ginger your hunger with real shawarma vibes.
          </h1>
        </div>
      </div>

      <div>
        <OurStory />
      </div>

      <div>
        <MenuTestimonials />
      </div>

      <WhatsappOrder />

      <div>
        <Footer />
      </div>
    </div>
  )
}