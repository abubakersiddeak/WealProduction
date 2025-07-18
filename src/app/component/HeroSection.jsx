"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { slideData } from "@/app/data/slideData";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideData.length);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 15000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section
      aria-label="Hero Carousel"
      className="w-full relative overflow-hidden"
    >
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
        {slideData.map((slide, index) => (
          <div
            key={slide.id}
            id={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={currentIndex !== index}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority={index === 0}
              style={{ objectFit: "cover" }}
              className="brightness-[.70]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-serif text-white drop-shadow-md leading-tight max-w-4xl">
                {slide.heading}
              </h1>
              <Link href={slide.shopLink}>
                <button className="mt-8 cursor-pointer bg-white text-black px-4 py-2 rounded-sm shadow-lg hover:bg-black hover:text-white transition-all duration-300 font-bold text-lg md:text-xl lg:text-2xl">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slideData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ${
                currentIndex === idx
                  ? "opacity-100 scale-125"
                  : "opacity-50 hover:opacity-75"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
        <button
          onClick={goToPrev}
          className="absolute hidden md:block left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full text-xl md:text-2xl hover:bg-white/50 transition-colors duration-300 z-20"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute hidden md:block right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full text-xl md:text-2xl hover:bg-white/50 transition-colors duration-300 z-20"
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
