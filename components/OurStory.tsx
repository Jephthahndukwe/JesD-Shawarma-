import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const OurStory = () => {
    return (
        <div className="bg-[#FFFBEB]">
            {/* Our Story Section */}
            <div className="container mx-auto h-screen px-6 py-20 lg:py-32 relative">
                {/* Pink Blob Background - LARGE AND CENTERED */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/3 -translate-y-1/2 w-[390px] h-[500px] lg:w-[700px] lg:h-[700px]">
                    <img
                        src="/images/apple.png"
                        alt="Pink Blob"
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-5xl lg:text-6xl font-bold">
                            Our <span className="text-[#D97706] font-sans">Story</span>
                        </h2>

                        <div className="space-y-4 text-gray-700 font-sans leading-relaxed">
                            <p>
                                Jes D was founded in 2005 with a simple mission: to bring authentic
                                Flavors to our community. Our founder, Chef Baddoski, learned the art of
                                shawarma making from his Dad.
                            </p>

                            <p>
                                We take pride in using only the freshest ingredients, premium meats, and
                                traditional spices. Each Shawarma is prepared with care and attention to
                                detail.
                            </p>
                        </div>

                        <Link href="/about" className="flex items-center gap-2 bg-[#D97706] hover:bg-[#D97706]/80 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-sans w-[230px]">
                            Learn More About Us
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Right Images */}
                    <div className="relative">
                        {/* Shawarma Image */}
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
                            <img
                                src="/images/shawarma-home2.png"
                                alt="Delicious shawarma wrap"
                                className="w-full md:h-auto h-[250px] object-cover transform scale-105 transition-transform duration-500 hover:scale-100"
                            />
                        </div>

                        {/* Badge */}
                        <div className="absolute bottom-0 md:-left-8  z-20 bg-[#D97706] text-white py-2 px-4 md:px-8 md:py-4 rounded-[8px] shadow-lg">
                            <p className="font-bold text-xs md:text-lg font-sans">Serving Authentic Shawarma</p>
                            <p className="text-xs md:text-sm font-sans">Since 2015</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative h-[400px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/shawarma-home3.png"
                        alt="Shawarma background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Stats Content */}
                <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
                    <div className="flex flex-wrap gap-[3rem] md:gap-[13rem] justify-center items-center text-center text-white">
                        <div>
                            <h3 className="text-5xl lg:text-6xl font-bold font-sans mb-2">15+</h3>
                            <p className="text-lg lg:text-xl font-sans">Years Experience</p>
                        </div>

                        <div>
                            <h3 className="text-5xl lg:text-6xl font-bold font-sans mb-2">50K+</h3>
                            <p className="text-lg lg:text-xl font-sans">Happy Customers</p>
                        </div>

                        <div>
                            <h3 className="text-5xl lg:text-6xl font-bold font-sans mb-2">10+</h3>
                            <p className="text-lg lg:text-xl font-sans">Menu Items</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory