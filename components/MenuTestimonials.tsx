import React from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MenuTestimonials = () => {
    const menuItems = [
        {
            image: '/images/beef-shawarma.png',
            title: 'Beef Shawarma',
            radius: 'left',
        },
        {
            image: '/images/chicken-shawarma.png',
            title: 'Chicken Shawarma',
            radius: 'round',
        },
        {
            image: '/images/drinks.png',
            title: 'Drinks',
            radius: 'right',
        },
    ]

    const testimonials = [
        {
            name: 'Sarah M.',
            rating: 5,
            text: '"The best shawarma I\'ve had outside of Ondo State. The meat is so tender and flavorful, Tand the garlic sauce is to die for.. Just the way i love it. I highly recommend .. They would ask you the way you prefer it done.',
            avatar: '/images/avatar.png',
            job: 'Local guide'
        },
        {
            name: 'James K.',
            rating: 5,
            text: '"I ordered online for a family dinner and was impressed by how quickly it arrived. Everything was still hot and fresh. The mixed shawarma platter is perfect for sharing!.',
            avatar: '/images/avatar.png',
            job: 'Food Blogger'
        },
        {
            name: 'Miguel R.',
            rating: 5,
            text: '"There customer service is so welcoming and incredibly friendly. I’ve been coming weekly for their chicken shawarma wrap.. and it’s so creamy. Never disappoints everytime.',
            avatar: '/images/avatar.png',
            job: 'Regular Customer'
        },
    ]

    // Function to pick radius class based on type
    const getRadiusClass = (radius: string) => {
        switch (radius) {
            case 'left':
                return 'rounded-tl-[60px] rounded-br-[60px]'
            case 'right':
                return 'rounded-tr-[60px] rounded-bl-[60px]'
            case 'round':
                return 'rounded-[60px]'
            default:
                return ''
        }
    }

    return (
        <div className="bg-[#FFFBEB] relative overflow-hidden">
            {/* Our Menu Section */}
            <div className="container mx-auto px-6 py-16 lg:py-24 mt-[5%]">
                <h2 className="text-4xl lg:text-5xl font-bold font-sans text-[#D97706] text-center mb-20">
                    Our Menu
                </h2>

                 <div className="grid grid-cols-1 md:grid-cols-3 mb-12">
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <div className={`relative overflow-hidden mb-4 ${getRadiusClass(item.radius)}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[406px] h-[604px] object-cover transform scale-105 transition-transform duration-500 hover:scale-100"
                                />
                            </div>
                            <h3 className="text-xl text-center md:-ml-[5rem] font-bold text-[#D97706] font-sans mb-2">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/menu" className="bg-[#D97706] hover:bg-[#D97706]/80 text-white px-16 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 font-sans">
                        Show Menu
                    </Link>
                </div>
            </div>


            {/* Decorative Apple/Tomato - Top Right */}
            <div className="absolute bottom-2/2 md:-mt-[15.5rem] right-0">
                <Image
                    width={1000}
                    height={1000}
                    src="/images/tomatoes.png"
                    alt="Decorative"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Testimonials Section */}
            <div className="container relative mx-auto px-4 pb-16 lg:pb-24 mt-[10rem]">
                <div className="bg-[#BCA891] rounded-tl-[60px] rounded-br-[60px] px-6 py-12 lg:px-12 lg:py-24">
                    <h2 className="text-3xl lg:text-4xl font-bold font-sans text-center mb-5">
                        What Our Customers say
                    </h2>
                    <p className='text-white font-sans font-normal text-[20px] text-center mb-12'>Don't just take our word for it</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-tr-[20px] rounded-bl-[20px] rounded p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className="fill-[#D97706] text-[#D97706]"
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 font-sans mb-6 leading-relaxed">
                                    {testimonial.text}
                                </p>

                                {/* Customer Info */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold font-sans text-[#111827]">
                                            {testimonial.name}
                                        </p>
                                        <p className='font-semibold font-sans text-[#6B7280]'>
                                            {testimonial.job}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Vegetables - Left Side */}
            <div className="absolute bottom-2/2 md:-mt-[10rem] -mt-[4rem] left-0">
                <img
                    src="/images/orange.png"
                    alt="Decorative"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Nothing Beats A Well Prepared Shawarma Section */}
            <div className="container relative mt-[10%] mx-auto px-6 pb-16 lg:pb-24">
    <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl overflow-hidden shadow-2xl">
        <div>
            {/* Left - Text */}
            <div className="p-8 lg:p-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-white font-sans leading-tight text-center">
                    Nothing Beats A Well Prepared Shawarma
                </h2>
            </div>

            {/* Right - Image */}
            <div className="relative h-full min-h-[300px] lg:min-h-[500px] flex justify-center items-center">
                <img
                    src="/images/shawarma-transparent.png"
                    alt="Delicious Shawarma"
                    className="w-[500px] md:w-[900px] object-contain transform transition-transform duration-700 hover:rotate-[360deg]"
                />
            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default MenuTestimonials