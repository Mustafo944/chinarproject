"use client"
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// components/Hero.js
export default function Header() {
  const [active,setActive] = useState(false)
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/header/chinar2.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0000007c] backdrop-blur-[5px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex md:justify-between items-center max-md: justify-around max-md:gap-20 text-amber-600">
            <div className="left">
              <Image
                src="/header/logo.png"
                width={150}
                height={90}
                alt="photo"
              />
            </div>
            <div className="right ">
            <GiHamburgerMenu  onClick={()=>setActive(!active)} className="md:hidden text-4xl"/>
              <ul className="flex items-center justify-center gap-10 text-white text-xl transition-all max-md:hidden">
                <li>
                  <a
                    href="#about"
                    className="hover:text-amber-400 duration-200"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-amber-400 duration-200">
                    Меню
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-amber-400 duration-200"
                  >
                    Галерея
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="hover:text-amber-400 duration-200"
                  >
                    Отзывы
                  </a>
                </li>
                <li>
                  <a
                    href="#contacts"
                    className="hover:text-amber-400 duration-200"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4 text-white mt-30 max-md:text-2xl max-md:text-center">
              ДОБРО ПОЖАЛОВАТЬ
            </h1>
            <div className="flex items-center gap-4 mt-5">
              <div className="flex-grow border-t-2 border-amber-500 w-20"></div>
              <span className="text-2xl text-amber-500 font-semibold">
                CHINAR
              </span>
              <div className="flex-grow border-t-2 border-amber-500 w-20"></div>
            </div>
            <p className="mt-8 text-xl text-white text-center">
              «Вкус Востока в каждом блюде»
            </p>
          </div>
        </div>
      </div>
      <div
  className={`
    md:hidden absolute top-0 left-0 right-0 mx-auto
    bg-[#68676a2d] text-white shadow-md rounded w-[350px] h-[300px]
    flex justify-center transition-all duration-500 ease-in-out
    transform
    ${active ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-10 opacity-0 pointer-events-none'}
  `}
>
  <ul className="flex flex-col justify-center relative gap-4 text-lg font-semibold text-center text-white">
    <li><a href="#about">О нас</a></li>
    <li><a href="#menu">Меню</a></li>
    <li><a href="#gallery">Галерея</a></li>
    <li><a href="#reviews">Отзывы</a></li>
    <li><a href="#contacts">Контакты</a></li>
  </ul>
  <div
    onClick={() => setActive(false)}
    className="absolute right-5 top-2 text-2xl text-[#fbf7f4] font-bold cursor-pointer"
  >
    X
  </div>
</div>

    </div>
  );
}
