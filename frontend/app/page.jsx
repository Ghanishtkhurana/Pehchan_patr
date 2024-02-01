"use client";
import HeadingSec from "@/components/Box1/HeadingSec";
import SocialLink from "@/components/Box1/SocialLink";
import UiElements from "@/components/Box1/UiElements";
import Summary from "@/components/Box2/Summary";
import { Button } from "@nextui-org/react";

import Experience from "@/components/Box2/Experience";
import Project from "@/components/Box2/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0F172A] text-white flex h-screen">
      <div className="w-[40%] px-20 flex justify-center flex-col items-start gap-14">
        <HeadingSec />
        <UiElements />
        <SocialLink />
      </div>
      <div className="flex-1 flex flex-col items-center overflow-y-scroll scrollbar-hide pt-[90px] pb-[50px]">
        <div className="w-[70%] flex flex-col gap-10">
          {/* summary div  */}
          <Summary />
          <Experience />
          {/* project  */}
          <Project />
        </div>
      </div>
      {/* image log  */}
      <div className="fixed bottom-1 right-2 h-16 w-16">
        <iframe
          src="https://giphy.com/embed/KCG5ISvOfp2LVxI7ra"
          width="100%"
          height="100%"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
