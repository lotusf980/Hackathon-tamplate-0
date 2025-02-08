import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#FBEBB5]">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center sm:justify-between py-8 px-4 sm:px-16 lg:px-32">
        {/* Text Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/2">
          <p className="text-[24px] sm:text-[36px] lg:text-[64px] font-medium leading-[1.2]">
            Rocket single seater
          </p>
          <Link
            href="../Shop"
            className="mt-4 text-[16px] sm:text-[20px] lg:text-[24px] font-medium text-black  px-6 py-2 rounded-md transition-transform hover:scale-105 underline"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center">
          <Image
            src="/pic1.png"
            alt="Hero Image"
            width={803}
            height={1000}
            className="w-[80%] sm:w-[70%] lg:w-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
