import Image from "next/image";
import React from "react";


const HeroSection = () => {
  return (
    <div className=" flex  bg-liteOrange  items-center w-full   px-16 py-16">
      <div className=" w-[50%] ">
        <h1 className=" text-[64px] font-medium  leading-none ">
          Rocket single <br /> seater
        </h1>
        <div className="  mt-7">
          <h1 className="border-b-2 pb-1  border-black w-fit text-[18px] ">Shop Now</h1>
        </div>
      </div>
      <div className=" w-[50%]  flex justify-center items-center">
        <Image src="/seater.png"
          height={200}
          width={440}
          className="seater"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroSection;