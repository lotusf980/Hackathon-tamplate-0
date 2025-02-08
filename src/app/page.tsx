"use client";
import Image from "next/image";
import React from "react";
import Hero  from '@/app/Components/Hero'
import Sectiontwo from '@/app/Components/Sectiontwo'
import Sectionfive from '@/app/Components/Sectionfive'
import Link from 'next/link'

const Home = () => {



  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/pic4.png",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/pic5.png",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/pic6.png",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/pic7.png",
    },
  ];
  const products2 = [
    {
      id: 5,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "/pic9.png",
    },
    {
      id: 6,
      name: "Going all-in with millennial design",
      price: "Read More",
      image: "/pic10.png",
    },
    {
      id: 7,
      name: "Going all-in with millennial design",
      price: "Read More",
      image:"/pic11.png",
    },
  ];

  return (
    <div>
      <Hero/>
      <Sectiontwo/>
     

    

     {/* Top Picks Section */}
<div className="max-w-[1440px] min-h-[800px] ">
  {/* Section Header */}
  <div className="flex flex-col items-center text-center">
    <p className="font-[500] text-[36px] leading-[54px] mt-20">
      Top Picks For You
    </p>
    <p className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F] mt-5 max-w-2xl">
      Find a bright ideal to suit your taste with our great selection of
      suspension, floor, and table lights.
    </p>
  </div>

  {/* Image Grid */}
  <div>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 sm:px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* View More Button */}
    <div className="flex justify-center mt-28">
      <Link href='../Shop'>
      <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
        View More
      </p>
      </Link>
    </div>
  </div>
</div>


    
<Sectionfive/>
     

      {/* our blog  */}
      <div className="max-w-[1440px] min-h-[844px] bg-[#FFFFFF] px-11 ">
      <div className="flex flex-col items-center text-center">
          <p className="font-[500] text-[36px] leading-[54px]">Our Blogs</p>
          <p className="text-[#9F9F9F] font-[500] text-[16px] leading-[24px] mt-4">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 ">
            {products2.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            ))}
          </div>
          
       
        </div>
        <div className="flex justify-center mt-28">
          <Link href='/Blogpage'>
          <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[20px] transition-transform hover:scale-105 hover:text-gray-700">
            View All Post
          </p>
          </Link>
        </div>

      </div>

     

      {/* contact to instagram   */}

      <div className="relative w-full h-auto">
        {/* Image Section */}
        <div className="w-full h-[450px]">
          <Image
            src={"/pic12.png"}
            alt="pic12"
            width={1440}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="font-bold text-[40px] md:text-[60px] leading-[50px] md:leading-[90px]">
              Our Instagram
            </p>
            <p className="font-[400] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px]">
              Follow our store on Instagram
            </p>
          </div>
          <div>
            <Link href='https://www.instagram.com/'>
            <button className="w-[200px] h-[50px] md:w-[255px] md:h-[64px] rounded-full bg-white transition-transform hover:scale-105 text-black font-[500] text-[16px] md:text-[20px] drop-shadow-lg">
              Follow Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
