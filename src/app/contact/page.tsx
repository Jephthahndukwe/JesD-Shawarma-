import React from 'react';
import { PhoneCall, MapPin } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';
import WhatsappOrder from '../../../components/WhatsappOrder';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#FFFBEB]">
            <div className="relative z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <div className="relative h-screen bg-black overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <img
                    src="/images/shawarma-home3.png"
                    alt="Delicious food"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center font-sans">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-center font-normal font-sans">
                        Want to get in touch? We’d love to hear from you. Here’s how you can reach us…
                    </p>
                </div>
            </div>

            {/* Contact Cards Section */}
            <div className="bg-[#09662B]">
                {/* First Row */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[5rem] md:mt-0 mt-[5rem]">
                    {/* Image */}
                    <Image
                        src="/images/kebab-plate.png"
                        alt="Kebab Plate"
                        width={945}
                        height={929}
                        className="object-cover"
                    />

                    {/* Card */}
                    <div className="flex-1 flex items-center justify-center h-full">
                        <div className="bg-[#fff] p-8 rounded-[20px] flex flex-col items-center justify-center text-center shadow-md">
                            <div className="bg-[#000] p-2 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                                <PhoneCall className="text-white" size={40} />
                            </div>
                            <p className="text-[16px] font-sans text-[#000] font-semibold mb-3">
                                To make your orders, text or call this
                            </p>
                            <p className="bg-[#09662B] text-white px-8 py-3 rounded-[20px] text-center font-sans font-semibold">
                                <Link href="tel:+2348123456789">+2348123456789</Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[5rem] md:pb-0 pb-[5rem] md:mt-0 mt-[5rem]">
                    {/* Card */}
                    <div className="flex-1 flex items-center justify-center h-full">
                        <div className="bg-[#fff] md:p-8 p-4 rounded-[20px] flex flex-col items-center justify-center text-center shadow-md">
                            <div className="bg-[#000] p-2 rounded-full w-16 h-16 flex items-center justify-center mb-3">
                                <MapPin className="text-white" size={40} />
                            </div>
                            <p className="bg-[#09662B] text-white px-6 py-2 rounded-[20px] text-center font-sans font-semibold leading-relaxed mt-4">
                                <Link
                                    href="https://www.google.com/maps/place/22+Ogundana+St,+Off+Allen+Avenue,+Ikeja,+Lagos/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    22, Ogundana Street, Off Allen Avenue <br />
                                    Ikeja, Lagos.
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <Image
                        src="/images/shawarma-machine.png"
                        alt="Shawarma Machine"
                        width={945}
                        height={929}
                        className="object-cover"
                    />
                </div>

            </div>

            <WhatsappOrder />

            <Footer />
        </div>
    );
}
