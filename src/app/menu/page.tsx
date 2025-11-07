import React from 'react'
import Navbar from '../../../components/Navbar'
import Image from 'next/image'
import Footer from '../../../components/Footer'
import WhatsappOrder from '../../../components/WhatsappOrder'

export default function Page() {
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
            image: '/images/menu3.png',
            title: 'Chilled Parfaits',
            radius: 'right',
        },
        {
            image: '/images/menu4.png',
            title: 'Fanta Drink',
            radius: 'right',
        },
        {
            image: '/images/menu5.png',
            title: 'Kunu Drink',
            radius: 'right',
        },
        {
            image: '/images/menu6.png',
            title: 'Fries with Sauce',
            radius: 'right',
        },
        {
            image: '/images/menu7.png',
            title: 'Parfaits with fruits',
            radius: 'right',
        },
        {
            image: '/images/menu8.png',
            title: 'Heineken Drink',
            radius: 'right',
        },
        {
            image: '/images/menu9.png',
            title: 'Cocacola Drink',
            radius: 'right',
        },
        {
            image: '/images/menu10.png',
            title: 'Barbecue and fries',
            radius: 'right',
        },
        {
            image: '/images/menu11.png',
            title: 'Barbecue and Corn',
            radius: 'right',
        },
        {
            image: '/images/menu12.png',
            title: 'Malt',
            radius: 'right',
        },
        {
            image: '/images/menu13.png',
            title: 'Caprisun',
            radius: 'right',
        },
        {
            image: '/images/menu14.png',
            title: 'Schweppes',
            radius: 'right',
        },
        {
            image: '/images/menu15.png',
            title: 'Desperado Drink',
            radius: 'right',
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
        <div className='bg-[#FFFBEB]'>
            <div className="relative z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <div
                className='h-screen relative bg-cover bg-center'
                style={{ backgroundImage: "url('/images/shawarma-home2.png')" }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className='relative flex items-center justify-center h-screen'>
                    <h1 className='text-normal font-sans md:text-[100px] text-[60px] text-white text-center'>Our Menu</h1>
                </div>
            </div>

            <div>
                {/* Decorative Image */}
                <div className="absolute md:bottom-1/1 right-0">
                    <Image
                        src="/images/orange2.png"
                        alt="Decorative"
                        width={562}
                        height={424}
                        className="object-contain"
                    />
                </div>

                {/* Menu Section */}
                <div className='pt-[5rem] px-6 mb-[7rem]'>
                    <h1 className='md:text-[35px] text-[25px] font-sans font-normal text-center'>
                        Treat yourself to a feast of mouthwatering options from our menu
                    </h1>

                    <div className="absolute md:top-[140rem] top-[185rem] md:left-[45%] left-[30%] translate-x-[-50%]">
                        <Image
                            width={634}
                            height={607}
                            src="/images/tomatoes2.png"
                            alt="Pink Blob"
                            className="object-contain"
                        />
                    </div>

                    <div className="absolute md:top-[230rem] top-[295rem] md:left-[45%] left-[30%] translate-x-[-50%]">
                        <Image
                            width={652}
                            height={573}
                            src="/images/apple.png"
                            alt="Pink Blob"
                            className="object-contain"
                        />
                    </div>

                    {/* Menu Grid */}
                    <div className="flex flex-wrap justify-center gap-[4rem] md:gap-[10rem] max-w-[1400px] mx-auto mt-[5rem]">
                        {menuItems.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className={`relative overflow-hidden ${getRadiusClass(item.radius)}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-[350px] h-[500px] object-cover"
                                    />
                                </div>
                                <h3 className="text-xl text-center font-bold text-[#D97706] font-sans mt-4">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <WhatsappOrder />

            <Footer />
        </div>
    )
}
