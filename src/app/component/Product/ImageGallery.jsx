"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ImageGallery({ images }) {
  const [activeImage, setActiveImage] = useState(images[0] || "/placeholder.jpg");
  const [zoomed, setZoomed] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const hasTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsTouchDevice(hasTouch);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setBackgroundPosition("center");
    setZoomed(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-[90vw] h-[60vh] sm:w-[300px] sm:h-[400px] md:w-[400px] md:h-[500px] overflow-hidden bg-no-repeat bg-cover transition duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${activeImage})`,
          backgroundSize: zoomed ? "200%" : "contain",
          backgroundPosition: backgroundPosition,
        }}
      />

      <div className="flex gap-2 overflow-x-auto max-w-full px-2">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            width={64}
            height={64}
            unoptimized
            className={`w-16 h-16 object-cover cursor-pointer rounded-md transition-all duration-200 ${activeImage === img ? "border-2 border-blue-500 scale-105 shadow-md" : "border border-gray-300"}`}
            onClick={() => {
              setActiveImage(img);
              setZoomed(false);
              setBackgroundPosition("center");
            }}
          />
        ))}
      </div>
    </div>
  );
}
