"use client";
import HeadingSec from "@/components/Box1/HeadingSec";
import SocialLink from "@/components/Box1/SocialLink";
import UiElements from "@/components/Box1/UiElements";
import Summary from "@/components/Box2/Summary";
import { Button } from "@nextui-org/react";

import Experience from "@/components/Box2/Experience";
import Project from "@/components/Box2/Project";

export default function Home() {
  return (
    <div className="bg-[#0F172A] text-white flex base:flex-col small:flex-col medium:flex-col large:flex-row  large:h-screen medium:overflow-y-scroll">
      <div className="large:w-[40%] medium:w-[60%] small:w-[80%] base:w-[100%] base:py-10 large:px-20 medium:px-10 small:px-5 base:px-4 flex justify-center flex-col items-start gap-14">
        <HeadingSec />
        <UiElements />
        <SocialLink />
      </div>
      {/* <div className="flex-1 flex flex-col items-center pt-[90px] pb-[50px]"> */}
      <div className="flex-1 flex flex-col items-center overflow-y-scroll scrollbar-hide large:pt-[90px] base:pt-4 pb-[50px]">
        <div className="large:w-[70%] medium:w-[80%] small:w-[90%] base:w-[90%] flex flex-col gap-10">
          {/* summary div  */}
          <section id="about">
            <Summary />
          </section>
          <section id="experience">
            <Experience />
          </section>
          {/* project  */}
          <section id="project">
            <Project />
          </section>
        </div>
      </div>
      {/* image log  */}
      <div className="fixed bottom-1 right-2 h-16 w-16">
        <iframe
          src="https://giphy.com/embed/KCG5ISvOfp2LVxI7ra"
          width="100%"
          height="100%"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
