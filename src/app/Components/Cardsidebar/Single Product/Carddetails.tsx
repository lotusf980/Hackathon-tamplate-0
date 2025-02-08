'use client';
import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { client } from "@/sanity/lib/client";

// Define the Product type interface
interface Product {
  id: string;
  title: string;
  price: string;
  mainImage: string;
  rating: number;
  reviewCount: number;
  description: string;
  imageThumbnails: string[];
}

async function getData(): Promise<Product[]> {
  try {
    const fetchData = await client.fetch(`
      *[_type == "productDetails"]{
        _id,
        title,
        price,
        rating,
        reviewCount,
        description,
        "imageThumbnails": imageThumbnails[].asset->url,
        "mainImage": mainImage.asset->url
      }
    `);

    // Specify types for fetched data
    return fetchData.map((prod: { _id: string; title: string; price: string; rating: number; reviewCount: number; description: string; imageThumbnails: { asset: { url: string } }[]; mainImage: { asset: { url: string } } }) => ({
      id: prod._id,
      title: prod.title,
      price: prod.price,
      rating: prod.rating,
      reviewCount: prod.reviewCount,
      description: prod.description,
      imageThumbnails: prod.imageThumbnails.map(item => item.asset.url),
      mainImage: prod.mainImage.asset.url || '/default-image.jpg',
    }));
  } catch (err) {
    console.error('Error fetching data:', err);
    return [];
  }
}

const ProductPage = () => {
  const params = useParams();
  const productId = params?.id;
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();
      const foundProduct = products.find((prod) => prod.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setCurrentImage(foundProduct.mainImage);
      } else notFound();
    };

    fetchData();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
              src={currentImage}
              alt={product.title}
              width={720}
              height={720}
              className="rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {product.imageThumbnails.map((src, index) => (
                <div key={index} className="w-[60px] h-[60px] bg-[#FFF9E5] mb-4 last:mb-0">
                  <Image
                    src={src || "/default-image.jpg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={60}
                    height={60}
                    className="object-cover rounded-md cursor-pointer"
                    onClick={() => setCurrentImage(src)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <h2 className="text-2xl text-gray-800">Rs. {product.price}</h2>

            {/* Rating */}
            <div className="flex gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaStar key={idx} className={`text-yellow-300 ${idx < product.rating ? "" : "text-opacity-50"}`} />
              ))}
              {product.rating % 1 !== 0 && <FaStarHalf className="text-yellow-300" />}
            </div>

            <p className="text-gray-600 my-4">{product.description}</p>

            {/* Additional Product Details */}
            <div className="mt-6">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-full font-bold mb-4">
                Add to Cart
              </button>
              <button className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-full font-bold">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;