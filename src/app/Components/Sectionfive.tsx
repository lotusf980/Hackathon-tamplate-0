import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Sectionfive = () => {
  return (
    <div>
         {/* new arrivals */}

      <div className="bg-[#FFF9E5] max-w-[1440px] h-auto py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={"/pic8.png"}
              alt="pic8"
              width={983}
              height={799}
              className="w-full  object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center sm:pt-32 mt-6 lg:px-10">
            <div className="mb-6">
              <p className="font-[500] text-[24px] leading-[36px]">
                New Arrivals
              </p>
              <p className="font-[700] text-[36px] md:text-[48px] leading-[48px] md:leading-[72px]">
                Asgaard Sofa
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="../Shop"
                className="text-[16px] md:text-[20px] leading-[28px] font-[500] text-[#000000] border border-[#9b9b9b] py-3 px-6 inline-block hover:bg-[#faeec7] transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Sectionfive
