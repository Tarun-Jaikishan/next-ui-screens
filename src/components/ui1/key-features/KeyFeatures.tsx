"use client";

import Topic from "../common/Topic";
import KeyFeaturesCard from "./KeyFeaturesCard";
import MyAnimations from "@/components/common/animations/MyAnimations";
import MyReveal from "@/components/common/animations/MyReveal";

import feature1 from "@/assets/ui1/images/key-features/feature-1.jpg";
import feature2 from "@/assets/ui1/images/key-features/feature-2.jpg";
import feature3 from "@/assets/ui1/images/key-features/feature-3.jpg";
import { Zoom } from "react-awesome-reveal";

export default function KeyFeatures() {
  return (
    <section className="mt-10 px-52">
      <MyReveal className="mt-10" keyframes={MyAnimations.fadeUp}>
        <div className="flex justify-center items-center">
          <Topic value="Key Features" />
        </div>

        <div className="mt-5 flex justify-center items-center">
          <div className="text-5xl font-semibold w-1/2">
            <Zoom cascade damping={0.05}>
              Secure Blockchain Solutions Redefining Trust in Finance
            </Zoom>
          </div>
        </div>
        <h1 className="text-center text-5xl font-semibold w-1/2 ">
          Secure Blockchain Solutions Redefining Trust in Finance
        </h1>
      </MyReveal>

      <MyReveal delay={200} className="mt-10" keyframes={MyAnimations.fadeUp}>
        <div className="flex justify-center gap-5 items-start">
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
    </section>
  );
}
