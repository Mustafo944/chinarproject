import Image from "next/image";
import React from "react";
import MenuGallery from "./menuGallery";
import Gallery from "./gallery";
import ReviewsSlider from "./slider";

export default function Main() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
        <div data-aos="fade-right">
          <Image
            src="/header/chinar4.jpg"
            width={600}
            height={200}
            alt="photo"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4" id="about">
          <div data-aos="fade-left">
          <h1 className="text-amber-500 font-bold text-3xl">О НАС</h1>
          <div className="border-b-2 border-amber-500 w-32 mb-4"></div>
          <p className="text-gray-700 leading-relaxed text-justify">
            🌿 <strong>Ресторан "Чинар"</strong> — 
            Добро пожаловать в "Чинар"   место, где кулинарные традиции
            Узбекистана обретают новую жизнь в самом сердце Старого города Бухары.
            Расположенный в историческом ква ртале неподалёку от ансамбля Ляби-Хауз,
            ресторан окружён атмосферой древности, восточного уюта и
            тёплого гостеприимства. Название "Чинар" — неслучайное: как и
            могучее дерево, мы глубоко укоренены в традициях, но открыты новому.
          </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-20" id="menu">
        <div className="w-15 border-amber-500 border-3 rounded-2xl"></div>
        <h2 className="text-center text-3xl">МЕНЮ</h2>
        <div className="w-15 border-amber-500 border-3 rounded-2xl"></div>
      </div>
      <div className="flex justify-center gap-2 mt-5">
      <div data-aos="fade-down">
        <MenuGallery/>
        </div>
      </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-20" id="gallery">
        <div className="w-15 border-amber-500 border-3 rounded-2xl"></div>
        <h2 className="text-center text-3xl">Галерея</h2>
        <div className="w-15 border-amber-500 border-3 rounded-2xl"></div>
        <Gallery/>
      </div>
      <div className="flex" id="reviews">
     <ReviewsSlider/>
      </div>
    </div>
  );
}
