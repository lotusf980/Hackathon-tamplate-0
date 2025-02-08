import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { BiGridSmall } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import Link from "next/link";
import { client } from "@/sanity/lib/client";


// Define the Product interface
interface Product {
  _id: string;
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
  description: string;
  imageThumbnails: string[];
  mainImage: string;
  socialMediaLinks: { url: string; icon: string }[];
}

const Shoppage = async () => {
  // Fetch data from Sanity
  const res: Product[] = await client.fetch(`
    *[_type == "productDetails"] | order(_createdAt asc) {
      _id,
      title,
      price,
      rating,
      reviewCount,
      description,
      "imageThumbnails": imageThumbnails[].asset->url,
      "mainImage": mainImage.asset->url,
      "socialMediaLinks": socialMediaLinks[platform match "facebook"]{
        "url": url,
        "icon": icon.asset->url,
      }
    }
  `);

  return (
    <>
      <div className="relative">
        {/* Main Background Image */}
        <div className="relative">
          <Image
            src={"/Spic1.png"}
            alt="Main Background"
            width={1440}
            height={316}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <Image
              src={"/Spic2.png"}
              alt="Logo"
              width={77}
              height={77}
              className="w-[7%] md:w-[77px] md:h-[77px]"
            />
            <p className="font-[500] text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] text-black">
              Shop
            </p>
            <div className="text-[12px] sm:text-[16px] text-gray-600 flex items-center space-x-1">
              <p>Home</p>
              <FaChevronRight className="text-gray-800" />
              <p>Shop</p>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="w-full bg-[#FAF4F4] mt-8 p-4">
          <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
            <div className="flex items-center space-x-4">
              <IoFilter className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
              <span className="text-sm md:text-base">Filters</span>
              <BiGridSmall className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
              <BsViewList className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
            </div>
            <p className="text-sm md:text-base font-medium">Showing 1 to 16 of 32 results</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-gray-50 py-8 mt-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {res.map((product) => (
                <Link href={`/cardproduct/${product._id}`} key={product._id}>
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105">
                    <Image
                      src={product.mainImage}
                      alt={`Image of ${product.title}`}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                      <p className="text-gray-600 mt-2">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer1 component is not used, so it's commented out */}
      {/* <Footer1 /> */}
    </>
  );
};

export default Shoppage;