"use client";

import { GoStopwatch } from "react-icons/go";
import { GrCompliance, GrShieldSecurity } from "react-icons/gr";
import { IoWarningOutline, IoSettingsOutline } from "react-icons/io5";
import { LuMonitorCheck } from "react-icons/lu";

import Topic from "./common/Topic";
import ChooseCard from "./why-choose/ChooseCard";

import MyReveal from "../common/animations/MyReveal";
import MyAnimations from "../common/animations/MyAnimations";

export default function WhyChoose() {
  return (
    <section className="mt-40 px-6">
      <div className="bg-[url('@/assets/ui1/images/why-choose/choose-bg1.jpg')] bg-cover bg-no-repeat border rounded-xl px-44 py-20">
        <MyReveal className="mt-10" keyframes={MyAnimations.fadeUp} triggerOnce>
          <div className="flex flex-col items-center space-y-5">
            <Topic value="Why Choose Sasly" />
            <h1 className="text-center text-5xl font-semibold w-[60%] ">
              Key Advantages of Fintech Software for Modern Businesses
            </h1>
          </div>
        </MyReveal>

        {/* Cards */}
        <div className="mt-10 flex flex-col items-center">
          <MyReveal
            className="mt-10 w-full"
            keyframes={MyAnimations.fadeUp}
            triggerOnce
          >
            <div className="grid grid-cols-3">
              <ChooseCard
                logo={<GoStopwatch className="text-3xl" />}
                title={"Real-Time Transaction Processing"}
                description={
                  "Instant and accurate processing of transactions, ensuring swift and reliable financial operations."
                }
              />

              <ChooseCard
                logo={<GrCompliance className="text-3xl" />}
                title={"Regulatory Compliance Automation"}
                description={
                  "Instant and accurate processing of transactions, ensuring swift and reliable financial operations."
                }
              />

              <ChooseCard
                logo={<IoWarningOutline className="text-3xl" />}
                title={"AI-Based Risk Management Software Solutions"}
                description={
                  "Instant and accurate processing of transactions, ensuring swift and reliable financial operations."
                }
              />
            </div>
          </MyReveal>

          <MyReveal
            className="mt-10 w-full"
            keyframes={MyAnimations.fadeUp}
            triggerOnce
          >
            <div className="mt-8 grid grid-cols-3">
              <ChooseCard
                logo={<IoSettingsOutline className="text-3xl" />}
                title={"Customizable User Dashboards"}
                description={
                  "Instant and accurate processing of transactions, ensuring swift and reliable financial operations."
                }
              />

              <ChooseCard
                logo={<LuMonitorCheck className="text-3xl" />}
                title={"Cross-Platform Integration system solutions"}
                description={
                  "Instant and accurate processing of transactions, ensuring swift and reliable financial operations."
                }
              />

              <ChooseCard
                logo={<GrShieldSecurity className="text-3xl" />}
                title={"Advanced Data Encryption management solutions"}
                description={
                  "Instant and accurate processing of transactions, ensuring swift and reliable financial operations."
                }
              />
            </div>
          </MyReveal>
        </div>
      </div>

      <div>ss</div>
    </section>
  );
}
