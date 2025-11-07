import React from 'react'
import Navbar from '../../../components/Navbar'
import { ArrowRight, Badge, CheckCheck, Heart, Leaf, MarsStroke, Star, Users } from 'lucide-react'
import Image from 'next/image'
import Footer from '../../../components/Footer'
import WhatsappOrder from '../../../components/WhatsappOrder'

export default function page() {

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

  return (
    <div className='bg-[#FFFBEB]'>
       <div className="relative z-50">
                <Navbar />
              </div>

      <div className='h-screen relative bg-cover bg-center' style={{ backgroundImage: "url('/images/shawarma-home4.png')" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className='relative flex items-center justify-center h-screen'>
          <h1 className='text-normal font-sans text-[100px] text-white text-center'>About us</h1>
        </div>
      </div>


      {/* Our Story */}
      <div className="bg-[#FFFBEB] pt-[7rem]">
        <h1 className='font-bold font-sans md:text-[40px] text-[30px] text-[#D97706] text-center'>About Jes D Shawarma</h1>
        <h2 className='text-normal font-sans text-[17px] text-[#4B5563] text-center'>Our story, our mission, and our commitment to authentic cuisine</h2>
        {/* Our Story Section */}
        <div className="container mx-auto h-screen px-6 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold">
                Our <span className="text-[#D97706] font-sans">Story</span>
              </h2>

              <div className="space-y-4 text-gray-700 font-sans leading-relaxed">
                <p>
                  Jes D was founded in 2015 with a simple mission: to bring authentic Flavors to our community. Our founder, Chef Samson, learned the art of shawarma making from his Dad.
                </p>

                <p>
                  We take pride in using only the freshest ingredients, premium meats, and traditional spices. Each Shawarma is prepared with care and attention to detail. Driven by a passion for sharing his cultural heritage through food, Chef Samson  opened the Jes D location with a simple mission: to
                  serve authentic, high-quality shawarma using traditional recipes and
                  techniques to satisfy his Clients and Customers.
                </p>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative">
              {/* Shawarma Image */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
                <img
                  // width={600}
                  // height={600}
                  src="/images/shawarma-home2.png"
                  alt="Delicious shawarma wrap"
                  className="w-full md:h-auto h-[250px] object-cover"
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

        {/* Pink Blob Background - LARGE AND CENTERED */}
        <div className="absolute -mt-[20rem] md:-mt-[5rem] md:left-[16rem] -translate-x-1/3 -translate-y-1/2 w-[600px] h-[500px] lg:w-[972px] lg:h-[854px]">
          <img
            src="/images/apple.png"
            alt="Pink Blob"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Stats Section */}
        <section className="relative bg-[#0E5729] py-12 px-6 lg:px-20 mt-[5rem] md:-mt-[13rem]">
          <h1 className="text-4xl lg:text-5xl font-bold font-sans text-[#D97706] text-center mb-12">
            Our Values
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-9xl mx-auto mt-[7rem]">
            {/* ===== Quality ===== */}
            <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-[#FEF3C7] w-16 h-16 flex items-center justify-center rounded-full shadow-md">
                <Badge className="text-[#0E5729]" size={28} />
              </div>
              <h2 className="font-sans font-bold text-[#D97706] text-2xl mt-4">Quality</h2>
              <p className="text-white text-[15px] font-sans font-normal mt-3 leading-relaxed max-w-xs">
                We source only the finest ingredients and prepare everything fresh daily, never cutting corners.
              </p>
            </div>

            {/* ===== Authenticity ===== */}
            <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-[#FEF3C7] w-16 h-16 flex items-center justify-center rounded-full shadow-md">
                <Heart className="text-[#0E5729]" size={28} />
              </div>
              <h2 className="font-sans font-bold text-[#D97706] text-2xl mt-4">Authenticity</h2>
              <p className="text-white text-[15px] font-sans font-normal mt-3 leading-relaxed max-w-xs">
                Our recipes and techniques stay true to traditional culinary heritage.
              </p>
            </div>

            {/* ===== Community ===== */}
            <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-[#FEF3C7] w-16 h-16 flex items-center justify-center rounded-full shadow-md">
                <Users className="text-[#0E5729]" size={28} />
              </div>
              <h2 className="font-sans font-bold text-[#D97706] text-2xl mt-4">Community</h2>
              <p className="text-white text-[15px] font-sans font-normal mt-3 leading-relaxed max-w-xs">
                We create a welcoming environment where people can gather and connect over great food.
              </p>
            </div>

            {/* ===== Sustainability ===== */}
            <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-[#FEF3C7] w-16 h-16 flex items-center justify-center rounded-full shadow-md">
                <Leaf className="text-[#0E5729]" size={28} />
              </div>
              <h2 className="font-sans font-bold text-[#D97706] text-2xl mt-4">Sustainability</h2>
              <p className="text-white text-[15px] font-sans font-normal mt-3 leading-relaxed max-w-xs">
                We're committed to eco-friendly practices and supporting local suppliers.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-[4rem] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[40px] font-bold font-sans text-[#000] mb-8">Our Ingredients</h1>

        <div className="md:max-w-[80%] w-full flex flex-col lg:flex-row items-center justify-center md:gap-[5rem] gap-[2rem] mt-[4%]">
          <Image
            src="/images/ingredients.png"
            alt="Ingredients"
            width={584}
            height={876}
            className="mx-auto"
          />

          <div className="text-left max-w-7xl">
            <p className="text-[20px] font-sans font-medium text-[#4B5563] mb-4">
              At Jes D, we believe that exceptional food starts with exceptional ingredients.
              We take pride in our careful selection process:
            </p>

            <div className="space-y-4">
              <div>
                <span className="flex items-center gap-2">
                  <CheckCheck className='text-green-500' />
                  <p className="text-[22px] font-sans text-[#111827] font-semibold">Premium Meats:</p>
                </span>
                <p className="text-[20px] font-sans font-medium text-[#4B5563] mt-2">
                  Our chicken and beef are sourced from local farms that prioritize ethical and sustainable practices.
                </p>
              </div>

              <div>
                <span className="flex items-center gap-2">
                  <CheckCheck className='text-green-500' />
                  <p className="text-[22px] font-sans text-[#111827] font-semibold">Fresh Produce:</p>
                </span>
                <p className="text-[20px] font-sans font-medium text-[#4B5563] mt-2">
                  We partner with local farmers to source fresh vegetables and premium meats daily,
                  supporting our community while ensuring peak freshness.
                </p>
              </div>

              <div>
                <span className="flex items-center gap-2">
                  <CheckCheck className='text-green-500' />
                  <p className="text-[22px] font-sans text-[#111827] font-semibold">Housemade Sauces:</p>
                </span>
                <p className="text-[20px] font-sans font-medium text-[#4B5563] mt-2">
                  All our sauces are made from scratch in our kitchen daily, using traditional recipes without preservatives or additives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[10rem] relative'>
        {/* Decorative Vegetables - Left Side */}
        <div className="absolute md:bottom-1/1 md:-mt-[15rem] -mt-[8rem] right-0">
          <Image
            src="/images/orange2.png"
            alt="Decorative"
            width={1300}
            height={761}
            className="object-contain"
          />
        </div>

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
      </div>

      <WhatsappOrder />

      <Footer />
    </div>
  )
}
