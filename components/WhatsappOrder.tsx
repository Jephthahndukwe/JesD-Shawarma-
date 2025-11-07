import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WhatsappOrder() {
    return (
        <Link href="https://wa.me/2349071175448" target="_blank" className='fixed z-10 bottom-10 right-10'>
            <div className='flex items-center gap-3'>
                <div className='bg-[#09662B] py-2 px-4 rounded-[10px] md:flex items-center gap-3 hidden'>
                    <p className='text-white font-sans text-[14px]'>Order here</p>
                    <ArrowRight className='text-white' />
                </div>
                <Image
                    width={40}
                    height={40}
                    alt="Decorative"
                    src="/images/whatsapp-icon.png"
                    className="object-contain"
                />
            </div>
        </Link>
    )
}
