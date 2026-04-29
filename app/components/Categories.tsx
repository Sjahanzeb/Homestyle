"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Categories() {
  const categories = [
    {
      name: "Wing Chair",
      products: "3,584 Products",
      image: "/07.jpg",
      href: "/categories/wing-chair",
    },
    {
      name: "Wooden Chair",
      products: "157 Products",
      image: "/08.jpg",
      href: "/categories/wooden-chair",
    },
    {
      name: "Desk Chair",
      products: "154 Products",
      image: "/04.jpg",
      href: "/categories/desk-chair",
    },
  ];

  const standardCategories = [
    {
      name: "BASIC",
      products: "245 Products",
      avgPrice: "$300",
      quality: "Premium Upholstery",
      image: "/sofa.jpg",
      href: "/categories/luxury-sofa",
    },
    {
      name: "STANDARD",
      products: "180 Products",
      avgPrice: "$500",
      quality: "Solid Wood Build",
      image: "/dining.jpg",
      href: "/categories/dining-table",
    },
    {
      name: "PREMIUM",
      products: "320 Products",
      avgPrice: "$1000",
      quality: "Modern Finish",
      image: "/bed.jpg",
      href: "/categories/bed-sets",
    },
  ];

  const [modalData, setModalData] = useState<any>(null);

  return (
    <>
      {/* Top Categories */}
      <section className="w-full px-4 py-[7rem] md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Top Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    priority
                    width={400}
                    height={400}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white space-y-1">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm">{category.products}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Categories (with Modal trigger) */}
      <section className="w-full px-4 py-[5rem] md:px-6 bg-gray-100">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-gray-800">
            Explore More Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standardCategories.map((category) => (
              <div
                key={category.name}
                onClick={() => setModalData(category)}
                className="group relative overflow-hidden rounded-lg shadow hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    priority
                    width={400}
                    height={400}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white space-y-1">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-sm">{category.products}</p>
                    <p className="text-sm">Avg Price: {category.avgPrice}</p>
                    <p className="text-sm">Quality: {category.quality}</p>
                    <a href="https://celestehomefashion.com/?srsltid=AfmBOooKDzFK_XWIM2W2ZyAJop4Uv_Q5tPtn6W0xVEOXzxjmVjVWPjAg">ViewMore</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
              onClick={() => setModalData(null)}
            >
              ×
            </button>
            <Image
              src={modalData.image}
              alt={modalData.name}
              width={500}
              height={300}
              className="rounded mb-4"
            />
            <h3 className="text-2xl font-bold">{modalData.name}</h3>
            <p className="text-gray-600 mt-1">{modalData.products}</p>
            <p className="text-gray-800 font-semibold mt-2">
              Price: {modalData.avgPrice}
            </p>
            <p className="text-gray-700">Quality: {modalData.quality}</p>
          </div>
        </div>
      )}
    </>
  );
}


