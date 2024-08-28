"use client";
import React, { useRef, useState, useEffect } from "react";

interface CarouselProps {
  items: { imageUrl: string }[];
  name?: string;
  autoChange?: boolean;
  interval?: number;
}

const Carousel = ({
  items,
  autoChange = false,
  interval = 3000,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (autoChange && carouselRef.current) {
      const intervalId = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 300; // Change 300 to the width of your carousel items
        }
      }, interval);

      return () => clearInterval(intervalId);
    }
  }, [autoChange, interval]);

  return (
    <div
      ref={carouselRef}
      className={`carousel w-full flex max-w-full items-center gap-4 overflow-x-auto scroll-smooth ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item flex-shrink-0 w-[300px] h-[300px] select-none`}
          style={{
            backgroundImage: `url(${item?.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          hey
        </div>
      ))}
    </div>
  );
};

export default Carousel;
