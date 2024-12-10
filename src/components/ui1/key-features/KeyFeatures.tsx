"use client";

import Image from "next/image";

import { FaAnglesRight } from "react-icons/fa6";
import { HiMiniCheckBadge } from "react-icons/hi2";

import Topic from "../common/Topic";
import KeyFeaturesCard from "../key-features/KeyFeaturesCard";
import MyAnimations from "@/components/common/animations/MyAnimations";
import MyReveal from "@/components/common/animations/MyReveal";

import feature1 from "@/assets/ui1/images/key-features/feature-1.jpg";
import feature2 from "@/assets/ui1/images/key-features/feature-2.jpg";
import feature3 from "@/assets/ui1/images/key-features/feature-3.jpg";

import benefit1 from "@/assets/ui1/images/key-features/benefit1.jpg";
import benefit2 from "@/assets/ui1/images/key-features/benefit2.jpg";

export default function KeyFeatures() {
  return (
    <section className="mt-10 px-52">
      <MyReveal className="mt-10" keyframes={MyAnimations.fadeUp}>
        <div className="flex justify-center items-center">
          <Topic value="Key Features" />
        </div>

        <div className="mt-5 flex justify-center items-center">
          <h1 className="text-center text-5xl font-semibold w-1/2 ">
            Secure Blockchain Solutions Redefining Trust in Finance
          </h1>
        </div>
      </MyReveal>

      <MyReveal delay={200} className="mt-10" keyframes={MyAnimations.fadeUp}>
        <div className="flex justify-center flex-wrap gap-5 items-start">
          <KeyFeaturesCard
            topic="Security Protocols"
            title="Get Advanced and modern Security Protocols"
            description="Robust encryption, multi-factor authen tication, and real-time fraud detection they ensure data and transaction security."
            imageUrl={feature1}
          />
          <KeyFeaturesCard
            topic="AI-powered Analysis"
            title="AI-Powered Analytics and Intelligent analysis tools"
            description="Robust encryption, multi-factor authen tication, and real-time fraud detection they ensure data and transaction security."
            imageUrl={feature2}
          />
          <KeyFeaturesCard
            topic="Payment Integrations"
            title="Various payment & Seamless Payment Integration"
            description="Robust encryption, multi-factor authen tication, and real-time fraud detection they ensure data and transaction security."
            imageUrl={feature3}
          />
        </div>
      </MyReveal>

      {/* Benefits */}
      <div className="mt-32 flex">
        <div className="flex-1 space-y-5">
          <MyReveal className="mt-10" keyframes={MyAnimations.fadeUp}>
            <Topic value="How to Benefits" />
            <h1 className="text-start text-5xl font-semibold w-3/4">
              Competitive Edge Benefits of Adopting Fintech Solutions
            </h1>
          </MyReveal>

          <MyReveal keyframes={MyAnimations.fadeUp}>
            <p className="w-3/4 leading-7 text-slate-500 font-light">
              Fintech solutions are transforming the financial landscape
              providing innovative tools and technologies that streamline
              enhance
            </p>
          </MyReveal>

          <MyReveal keyframes={MyAnimations.fadeUp}>
            <button
              type="button"
              className="flex items-center gap-2 bg-primary px-10 py-4 rounded-lg lg:hover:bg-black lg:hover:text-white duration-500"
            >
              Get Premium Benefits <FaAnglesRight className="text-xs" />
            </button>

            <div className="mt-10 flex gap-10">
              <p className="flex items-center gap-2 font-light text-slate-500">
                <HiMiniCheckBadge className="text-primary text-xl" /> No Hidden
                Charge Included
              </p>
              <p className="flex items-center gap-2 font-light text-slate-500">
                <HiMiniCheckBadge className="text-primary text-xl" /> User
                friendly Development
              </p>
            </div>
          </MyReveal>
        </div>

        <div className="flex-1 relative">
          <Image
            src={benefit1}
            alt="Image"
            className="shadow-lg rounded-lg animate-move-left-right"
          />
          <Image
            src={benefit2}
            alt="Image"
            className="absolute right-56 top-40 shadow-lg rounded-lg animate-move-up-down"
          />
        </div>
      </div>
    </section>
  );
}
