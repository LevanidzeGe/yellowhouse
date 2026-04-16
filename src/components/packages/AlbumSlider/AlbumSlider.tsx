"use client";
// npm install @types/swiper
//npm i swiper
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./AlbumSlider.module.css";

interface AlbumProps {
  images: { src: string; alt: string }[];
}

export default function AlbumSlider({ images }: AlbumProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="section no-padding-x">
      <div className="container">
        <div className={styles.mainWrapper}>
          <Swiper
            loop
            spaceBetween={10}
            navigation
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.someMainImageDi}
          >
            {images.map(({ src, alt }, index) => (
              <SwiperSlide key={index} className={styles.someMainDiv2}>
                <div className={styles.mainImage}>
                  <Image
                    src={src}
                    alt={alt}
                    width={1300}
                    height={1000}
                    className="block h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop
            spaceBetween={6}
            slidesPerView={10}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.navWrapper}
          >
            {images.map(({ src, alt }, index) => (
              <SwiperSlide key={index}>
                <button type="button" className={styles.navImagesWrapper}>
                  <Image src={src} alt={alt} width={100} height={100} />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
