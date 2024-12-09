"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import client4 from "@/assets/ui1/images/hero/client4.png";

import "swiper/css";
import "swiper/css/navigation";

export default function Sponsors() {
  return (
    <div className="mt-5 flex justify-center">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor
        loop
        navigation
        className="w-3/4 lg:1/2"
      >
        <SwiperSlide>
          <Image src={client4} alt="Sponsor" className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={client4} alt="Sponsor" className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={client4} alt="Sponsor" className="mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
