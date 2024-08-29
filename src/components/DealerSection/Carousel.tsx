"use client";
import React, { useRef, useState, useEffect } from "react";

interface CarouselProps {
  items: { imageUrl: string; name?: string }[];
  customItemHeight?: string;
  customItemWidth?: string;
  className?: string;
  divClassName?: { upperDiv: string; lowerDiv: string };
  bgBlur?: boolean;
}

const Carousel = ({
  items,
  customItemHeight,
  customItemWidth,
  className,
  bgBlur,
  divClassName,
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
    const walk = (x - startX) * 1; // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={carouselRef}
      className={`carousel w-full flex max-w-full items-center gap-4 overflow-x-auto scroll-smooth ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      } ${divClassName?.upperDiv}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item flex-shrink-0 select-none relative ${divClassName?.lowerDiv}`}
        >
          <img
            src={item?.imageUrl}
            draggable={false}
            className={`${customItemWidth ? customItemWidth : "w-auto"} ${
              customItemHeight ? customItemHeight : "h-auto"
            } ${className ? className : ""} relative ${
              bgBlur ? "blur-[2px]" : ""
            }`}
            alt={item?.name}
          />
          {item?.name && (
            <div className="absolute top-0 w-full h-full flex justify-center items-center break-words flex-wrap">
              <p className="carousel-item-name text-white font-bold text-center z-auto">
                {item?.name}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
