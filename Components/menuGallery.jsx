'use client'

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export default function MenuGallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const images = [
    { src: "/header/main/menu1.jpg" },
    { src: "/header/main/menu2.jpg" },
    { src: "/header/main/menu3.jpg" },
  ]

  return (
    <div className="flex justify-center gap-4 mt-14 flex-wrap">
      {images.map((img, i) => (
        <div
          key={i}
          className="cursor-pointer"
          onClick={() => {
            setIndex(i)
            setOpen(true)
          }}
        >
          <Image
            src={img.src}
            alt={`menu-${i}`}
            width={400}
            height={300}
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}

      <Lightbox open={open} close={() => setOpen(false)} slides={images} index={index} />
    </div>
  )
}
