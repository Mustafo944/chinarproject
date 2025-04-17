'use client'

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const images = [
    { src: "/galery/1.jpg" },
    { src: "/galery/2.jpg" },
    { src: "/galery/3.jpg" },
    { src: "/galery/4.jpg" },
    { src: "/galery/17.jpg" },
    { src: "/galery/6.jpg" },
    { src: "/galery/16.jpg" },
    { src: "/galery/17.jpg" },
  ]

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} onClick={() => { setIndex(i); setOpen(true); }} className="cursor-pointer" data-aos="zoom-in">
            <Image
              src={img.src}
              alt={`photo-${i}`}
              width={500}
              height={300}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3 }}
      />
    </div>
  )
}
