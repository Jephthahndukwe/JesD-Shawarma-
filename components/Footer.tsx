import { Clock, Facebook, Instagram, LocateIcon, LocationEdit, Mail, Map, Phone, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#764D1F] py-32 md:px-[100px] px-4'>
            <div className='flex items-start justify-center flex-wrap md:gap-[10rem] gap-[12rem]'>
                <div className='flex-1'>
                    <Image
                        src='/images/logo.png'
                        alt='Logo'
                        width={100}
                        height={100}
                    />
                    <p className='text-[15px] text-white font-sans font-normal mt-5'>Serving authentic  shawarma with the finest ingredients and traditional receipes. Taste the difference of quality in every bite.</p>
                    <div className='flex items-center gap-4 mt-7'>
                        <Link href='https://www.facebook.com/shawarmadelight/' target='_blank'><Facebook className='text-[#9CA3AF]'/></Link>
                        <Link href='https://www.instagram.com/shawarmadelight/' target='_blank'><Instagram className='text-[#9CA3AF]'/></Link>
                        <Link href='https://twitter.com/shawarmadelight' target='_blank'><Twitter className='text-[#9CA3AF]'/></Link>
                    </div>
                </div>
                <div className='flex-1 md:mt-0 -mt-[6rem]'>
                    <h2 className='text-white font-sans text-[18px] font-bold'>Contact Us</h2>
                    <div className='flex items-center gap-2 mt-5'>
                        <LocationEdit className='text-[#D97706]' />
                        <p className='text-white font-sans font-normal text-[14px]'>22,Ogundana Street, off Allen Avenue Ikeja, Lagos.</p>
                    </div>
                    <div className='flex items-center gap-2 mt-5'>
                        <Phone className='text-[#D97706]' />
                        <p className='text-white font-sans font-normal text-[14px]'>+2349071175448 </p>
                    </div>
                    <div className='flex items-center gap-2 mt-5'>
                        <Mail className='text-[#D97706]' />
                        <p className='text-white font-sans font-normal text-[14px]'>info@shawarmadelight.com </p>
                    </div>
                    <div className='flex items-center gap-2 mt-5'>
                        <Clock className='text-[#D97706]' />
                        <p className='text-white font-sans font-normal text-[14px]'>Mon-Thu: 11:00 AM - 9:00 PM</p>
                    </div>
                </div>
                <div className='flex-1 md:mt-0 -mt-[6rem]'>
                    <h2 className='text-white font-sans text-[18px] font-bold'>Quick Links</h2>
                    <ul className='flex flex-col gap-2'>
                        <li className='mt-4'><Link href='/home' className='text-white font-sans text-white font-normal text-[14px]'>Home</Link></li>
                        <li className='mt-4'><Link href='/menu' className='text-white font-sans text-white font-normal text-[14px]'>Our Menu</Link></li>
                        <li className='mt-4'><Link href='/about' className='text-white font-sans text-white font-normal text-[14px]'>About Us</Link></li>
                        <li className='mt-4'><Link href='/contact' className='text-white font-sans text-white font-normal text-[14px]'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='flex-1 md:mt-0 -mt-[6rem]'>
                    <h2 className='text-white font-sans text-[18px] font-bold'>Newsletter</h2>
                    <p className='text-white font-sans font-normal text-[15px] mt-4'>Subscribe to our newsletter to get the latest updates and special offers.</p>
                    <div className='mt-4'>
                        <input type="email" placeholder='Your email address' className='w-full p-3 border border-[#374151] rounded-lg bg-[#1F2937] font-sans text-[15px] text-white' />
                        <button type="submit" className='bg-[#D97706] hover:bg-[#D97706]/80 text-white px-6 py-3 w-full rounded-lg transition-colors duration-300 font-sans mt-3'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='bg-[#1F2937] w-full h-[1px] mt-10' />
            <div className='md:flex items-center justify-between mt-6'>
                <div>
                    <p className='text-[#9CA3AF] font-sans font-normal text-[14px] text-center'>© {new Date().getFullYear()} JesD. All rights reserved.</p>
                </div>
                <div className='flex items-center justify-center gap-5 md:mt-0 mt-4'>
                    <p className='text-[#9CA3AF] font-sans font-normal text-[14px]'><Link href='/privacy-policy'>Privacy Policy</Link></p>
                    <p className='text-[#9CA3AF] font-sans font-normal text-[14px]'><Link href='/terms-conditions'>Terms of service</Link></p>
                </div>
            </div>
        </div>
    )
}
