'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#FFFBEB] shadow-sm  w-full z-50">
      <div className="flex flex-col md:flex-row justify-center items-center py-4 px-6 md:px-10 lg:px-20">
        {/* ===== Desktop Navbar ===== */}
        <div className="hidden md:flex justify-between items-center w-full max-w-[80%]">
          {/* Left Links */}
          <ul className="flex items-center gap-[7rem]">
            <li>
              <Link
                href="/"
                className={`font-medium font-sans pb-1 text-lg transition-all duration-200 ${
                  pathname === '/'
                    ? 'text-[#D97706] border-b-2 border-[#D97706]'
                    : 'text-black hover:text-[#D97706]'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`font-medium font-sans pb-1 text-lg transition-all duration-200 ${
                  pathname === '/menu'
                    ? 'text-[#D97706] border-b-2 border-[#D97706]'
                    : 'text-black hover:text-[#D97706]'
                }`}
              >
                Our Menu
              </Link>
            </li>
          </ul>

          {/* Center Logo */}
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="JES Shawarma Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Right Links */}
          <ul className="flex items-center gap-[7rem]">
            <li>
              <Link
                href="/about"
                className={`font-medium font-sans pb-1 text-lg transition-all duration-200 ${
                  pathname === '/about'
                    ? 'text-[#D97706] border-b-2 border-[#D97706]'
                    : 'text-black hover:text-[#D97706]'
                }`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`font-medium font-sans pb-1 text-lg transition-all duration-200 ${
                  pathname === '/contact'
                    ? 'text-[#D97706] border-b-2 border-[#D97706]'
                    : 'text-black hover:text-[#D97706]'
                }`}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Mobile Navbar ===== */}
        <div className="flex md:hidden justify-between items-center w-full">
          {/* Logo on the left */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="JES Shawarma Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </Link>

          {/* Menu icon on the right */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#D97706] focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Slide-in Menu ===== */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] bg-[#FFFBEB] shadow-2xl z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 -ml-28">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`text-lg font-medium font-sans transition-all duration-200 ${
              pathname === '/'
                ? 'text-[#D97706] border-b-2 border-[#D97706]'
                : 'text-black hover:text-[#D97706]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            onClick={() => setIsOpen(false)}
            className={`text-lg font-medium font-sans transition-all duration-200 ${
              pathname === '/menu'
                ? 'text-[#D97706] border-b-2 border-[#D97706]'
                : 'text-black hover:text-[#D97706]'
            }`}
          >
            Our Menu
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`text-lg font-medium font-sans transition-all duration-200 ${
              pathname === '/about'
                ? 'text-[#D97706] border-b-2 border-[#D97706]'
                : 'text-black hover:text-[#D97706]'
            }`}
          >
            About us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`text-lg font-medium font-sans transition-all duration-200 ${
              pathname === '/contact'
                ? 'text-[#D97706] border-b-2 border-[#D97706]'
                : 'text-black hover:text-[#D97706]'
            }`}
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* ===== Overlay when menu is open ===== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar
