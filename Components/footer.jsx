import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black max-md:pb-[300px]">
      <div className="max-w-7xl mx-auto">
        <div
          className="max-md:flex-col pb-3 flex md:gap-20 justify-around"
          id="contacts"
        >
          <div className="flex items-center md:flex flex-col gap-3">
            <h1 className="text-3xl text-amber-500 px-15 py-9">Контакты</h1>
            <div className="flex gap-3 items-center">
              <FaLocationDot className="text-white" />
              <p className="text-white">Город:Бухара ул:Бахауддин Накшбанд</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhoneAlt className="text-white" />
              <a
                href="tel:+998334182323"
                className="text-white hover:underline"
              >
                +998 33 418 23 23
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhoneAlt className="text-white" />
              <a
                href="tel:+998901234567"
                className="text-white hover:underline"
              >
                +998 93 123 45 67
              </a>
            </div>
            <div className="flex gap-3">
              <IoMdMail className="text-white text-xl" />
              <a
                href="mailto:info@chinar.uz"
                className="text-white hover:underline"
              >
                info@chinar.uz
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl text-amber-500 px-15 py-9">
              График работы
            </h2>
            <div className=" flex items-center gap-3 mt-2">
              <FaRegCalendarAlt className="text-white" />
              <p className="text-white">Пон-Вс:</p>
              <span className="text-white">11-00 - 24-00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
