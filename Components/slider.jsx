"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // стрелочки

const reviews = [
  {
    name: "Юлиана Граченко",
    avatar: "/otzivi/1.jpg",
    text: "Очень крутой ресторан 🙂 Спасибо ❤️",
  },
  {
    name: "Валентина Иванова",
    avatar: "/otzivi/2.jpg",
    text: "Всё было очень вкусно и уютно!",
  },
  {
    name: "Александра Старина",
    avatar: "/otzivi/3.jpg",
    text: "Обязательно вернусь снова!",
  },
  {
    name: "Олег Бадаев",
    avatar: "/otzivi/5.jpg",
    text: "Еда очень вкусная,снова вернемся",
  },
];

export default function ReviewsSlider() {
  const timer = useRef();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 1, spacing: 20 },
      },
    },
    created: () => {
      clearInterval(timer.current);
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);
    },
  });

  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="max-w-7xl mt-20 px-4 relative overflow-x-hidden">
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-[#233e8833] p-6 rounded-xl shadow-xl text-center flex flex-col items-center max-md:w-[320px]  max-md:h-[220px] max-md:p-2"
            >
              <Image
                src={review.avatar}
                width={54}
                height={64}
                alt="avatar"
                className="rounded-full mb-4"
              />
              <p className="text-lg font-semibold h-[120px] grow-1 max-md:px-10">
                {review.text}
              </p>
              <span className="mt-4 font-bold">{review.name}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
