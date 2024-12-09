"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";

import { FaAnglesRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

import author1 from "@/assets/ui1/images/hero/author1.jpg";
import hero_img1 from "@/assets/ui1/images/hero/hero_img1.jpg";
import hero_img2 from "@/assets/ui1/images/hero/hero_img2.png";

import MyReveal from "@/components/common/animations/MyReveal";
import MyAnimations from "@/components/common/animations/MyAnimations";

import Sponsors from "./Sponsors";

export default function Hero() {
  return (
    <div
      className={`xl:pt-28 bg-[url('@/assets/ui1/images/hero/hero-bg1.jpg')] bg-cover bg-no-repeat rounded-b-2xl`}
    >
      <div className="xl:flex xl:items-center xl:gap-40">
        <div className="xl:w-[50%]">
          {/* Intro Section */}
          <div className="text-center xl:text-start px-10 lg:px-24 xl:pl-52 xl:pr-0 pt-20 w-full h-40 md:h-56">
            <ReactTyped
              strings={[
                "Revolutionize Your Financial Strategy with Cutting-Edge Fintech",
              ]}
              className="text-2xl md:text-5xl xl:text-6xl text-white font-semibold"
              typeSpeed={10}
              showCursor={false}
            />
          </div>

          <MyReveal keyframes={MyAnimations.fadeUp} triggerOnce>
            <p className="text-white text-center xl:text-xl xl:text-start mt-10 lg:mt-1 xl:mt-20 px-10 lg:px-24 xl:pl-52 xl:pr-0">
              Effective community management involves listening to audience
              feedback, addressing concerns, encouraging discussions
            </p>

            <div className="xl:px-52 mt-10 flex justify-center xl:justify-start items-center">
              <button
                type="button"
                className="flex items-center gap-2 text-sm bg-primary px-8 py-2.5 md:py-3 rounded-lg lg:hover:bg-white duration-500"
              >
                Our Service <FaAnglesRight className="text-xs" />
              </button>
            </div>
          </MyReveal>

          <div className="mt-10 md:flex md:justify-center xl:justify-start xl:pl-52 xl:pr-0 md:gap-32 md:items-start">
            {/* Trusted Client Section */}
            <MyReveal keyframes={MyAnimations.fadeRight} triggerOnce>
              <div className="flex justify-center mt-10 md:mt-0">
                <div>
                  <p className="text-white font-semibold">
                    5m+ Trusted Clients
                  </p>
                  <div className="mt-1.5 flex relative">
                    <Image
                      src={author1}
                      alt="Image"
                      className="rounded-full p-0.5 bg-white absolute left-0 w-10 h-10"
                    />
                    <Image
                      src={author1}
                      alt="Image"
                      className="rounded-full p-0.5 bg-white absolute left-8 w-10 h-10"
                    />
                    <Image
                      src={author1}
                      alt="Image"
                      className="rounded-full p-0.5 bg-white absolute left-16 w-10 h-10"
                    />
                    <Image
                      src={author1}
                      alt="Image"
                      className="rounded-full p-0.5 bg-white absolute left-24 w-10 h-10"
                    />
                    <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 absolute left-32">
                      <MdArrowOutward className="text-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </MyReveal>

            {/* Rating */}
            <MyReveal keyframes={MyAnimations.fadeLeft} triggerOnce>
              <div className="flex justify-center items-center">
                <div className="mt-16 md:mt-0 flex items-center gap-5 text-white p-6 bg-black/60 rounded-xl">
                  <div>
                    <p className="text-sm font-semibold">Client Reviews</p>
                    <div className="flex gap-0.5">
                      <IoIosStar className="text-yellow-400" />
                      <IoIosStar className="text-yellow-400" />
                      <IoIosStar className="text-yellow-400" />
                      <IoIosStar className="text-yellow-400" />
                      <IoIosStar className="text-yellow-400" />
                    </div>
                  </div>

                  <h1 className="text-4xl">
                    <strong>4.8</strong>
                  </h1>
                </div>
              </div>
            </MyReveal>
          </div>
        </div>

        <MyReveal keyframes={MyAnimations.fadeUp} triggerOnce>
          <div className="hidden xl:flex xl:flex-1 relative">
            <div className="md:flex md:justify-center md:items-center">
              <Image
                src={hero_img1}
                alt="Image"
                className="w-full rounded-xl"
              />
            </div>

            {/* <MyReveal keyframes={MyAnimations.fadeRight} triggerOnce> */}
            <Image
              src={hero_img2}
              alt="Image"
              className="hidden xl:block absolute top-20 -left-20"
            />
            {/* </MyReveal> */}
          </div>
        </MyReveal>
      </div>

      {/* Trusted By and Sponsors */}
      <MyReveal keyframes={MyAnimations.fadeUp} cascade>
        <div className="mt-5 mb-10 xl:mt-40 rounded-xl p-2">
          <div className="md:flex md:justify-center md:items-center xl:hidden">
            <Image
              src={hero_img1}
              alt="Image"
              className="w-full rounded-xl md:w-[80%] lg:w-[60%]"
            />
          </div>

          <MyReveal keyframes={MyAnimations.fadeUp} duration={3000}>
            <p className="text-white px-10 mt-10 text-center">
              Trusted by thousands of companies across 50+ countries
            </p>

            <Sponsors />
          </MyReveal>
        </div>
      </MyReveal>

      <br />
    </div>
  );
}
