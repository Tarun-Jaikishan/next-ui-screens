import Image from "next/image";

import { FaAnglesRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

import author1 from "@/assets/ui1/images/hero/author1.jpg";
import hero_img1 from "@/assets/ui1/images/hero/hero_img1.jpg";

export default function Hero() {
  return (
    <div
      className={`bg-[url('@/assets/ui1/images/hero/hero-bg1.jpg')] bg-cover bg-no-repeat rounded-b-2xl`}
    >
      {/* Intro Section */}
      <h1 className="text-2xl text-white font-semibold text-center px-10 pt-20">
        Revolutionize Your Financial Strategy with Cutting-Edge Fintech
      </h1>

      <p className="text-white text-center mt-10 px-10">
        Effective community management involves listening to audience feedback,
        addressing concerns, encouraging discussions
      </p>

      <div className="mt-10 flex justify-center items-center">
        <button
          type="button"
          className="flex items-center gap-2 text-sm bg-primary px-8 py-2.5 rounded-lg lg:hover:bg-white duration-500"
        >
          Our Service <FaAnglesRight className="text-xs" />
        </button>
      </div>

      {/* Trusted Client Section */}
      <div className="flex justify-center mt-10">
        <div>
          <p className="text-white">5m+ Trusted Clients</p>
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

      {/* Rating */}
      <div className="flex justify-center items-center">
        <div className="mt-16 flex items-center gap-5 text-white p-6 bg-black/60 rounded-xl">
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

      {/* Trusted By and Sponsors */}
      <div className="mt-5 rounded-xl p-2">
        <div>
          <Image src={hero_img1} alt="Image" className="w-full rounded-xl" />
        </div>

        <p className="text-white px-10 mt-10 text-center">
          Trusted by thousands of companies across 50+ countries
        </p>

        <div></div>
      </div>

      <br />
    </div>
  );
}
