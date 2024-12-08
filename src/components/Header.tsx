// import { FaRegUser } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { MdOutlineShoppingCart } from "react-icons/md";
// export default function Header(){
//     return(
//         <div>
//             <div className="flex w-[1440px] h-[100px] mt-[48px] ml-[135px] bg-[#FFFFFF] justify-center  sm: '8px'
//        md: '16px' lg: '24px' xl: '48px' ">
//                 <ul className="w-[430px] h-[24px] mt-[30] ml-[505] flex  gap-[48px] text-center">
//                     <li className="w-[48px] h-[24px] text-[#000000] font-poppins font-normal text-center text-[16px]">Home</li>
//                     <li className="w-[48px] h-[24px]  text-[#000000] font-poppins font-normal text-center text-[16px]">Shop</li>
//                     <li className="w-[48px] h-[24px]  text-[#000000] font-poppins  font-normal text-center text-[16px]">About</li>
//                     <li className="w-[48px] h-[24px]  text-[#000000] font-poppins font-normal text-center text-[16px]">Contact</li>
//                 </ul>
//             {/* </div> */}
//             <div className="w-[247px] h-[28px]  px-10  gap-2 flex  ">
//             <FaRegUser  className="w-[28px] h-[28px]"/>
//             <CiSearch className="w-[28px] h-[28px]" />
//             <CiHeart className="w-[28px] h-[28px]" />
//             <MdOutlineShoppingCart className="w-[28px] h-[28px]"/>
//             </div>
//             </div>
//         </div>
//     )
// }

import React from 'react'
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-[#FBEBB5]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-[500] text-[#000000] justify-center">
      <a className="mr-5 hover:text-gray-900" >Home</a>
      <a  className="mr-5 hover:text-gray-900" >Shop</a>
      <a  className="mr-5 hover:text-gray-900">About</a>
      <a  className="mr-5 hover:text-gray-900">Contact</a>
    </nav>
    <div className='flex text-[28px] text-[#000000] gap-8'>
    <MdOutlinePersonAddAlt />
    <CiSearch />
    <CiHeart />
    <AiOutlineShoppingCart />
    
    </div>
   
  </div>
</header>

    </div>
  )
}

export default Header