import React from "react";
import Image from "next/image";
import { CgArrowTopRightO } from "react-icons/cg";
import { Button } from "@nextui-org/react";
import AnimatedContainer from "../onScrollAnimation/AnimateContainer";
import AnimatedItem from "../onScrollAnimation/AnimateItem";
import { VscGithub } from "react-icons/vsc";
import Link from "next/link";
// import {motion} from "framer-motion"

let project = [
  {
    text: "Productivity hub (Telegram bot + Form builder + Eraser.io)",
    // dec: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/productivehub.png",
    techStack: [
      "Next JS",
      "Weebhooks",
      "Next-Auth",
      "Socket.io",
      "Telegram API",
      "Eraser io",
      "Form-Builder",
      "Mongoose",
      "Mongo Db",
      "Express JS",
      "Node JS",
    ],
    liveLink: "https://bot-manager-ten.vercel.app/login",
    // git: "https://github.com/Ghanishtkhurana/productivity-hub",
  },
  {
    text: "Chat application",
    // dec: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/chatter.gif",
    techStack: [
      "Next JS",
      "Mongoose",
      "Mongo Db",
      "Socket.io",
      "Express JS",
      "Node JS",
    ],
    liveLink: "https://hike-pearl.vercel.app/",
    // git: "https://github.com/Ghanishtkhurana/hike",
  },
  {
    text: "Real state",
    // dec: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more",
    image: "/state.jpeg",
    techStack: ["Next JS"],
    liveLink: "https://address-co.vercel.app/",
    // git: "https://github.com/Ghanishtkhurana/weather-app",
  },
  {
    text: "School Showcase",
    // dec: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more",
    image: "/imagecopy.png",
    techStack: ["Next JS", "Shadcn UI"],
    liveLink: "https://revolutionary-amber-fkohf4upxe.edgeone.app/",
    // git: "https://github.com/Ghanishtkhurana/weather-app",
  },
  {
    text: "School Showcase 2",
    image: "/school2.png",
    techStack: ["Next JS", "Shadcn UI"],
    liveLink: "https://school-website-blush.vercel.app/",
  },
  {
    text: "TIC TAC TOE",
    // dec: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more",
    image: "/tic.png",
    techStack: ["Next JS"],
    liveLink: "https://tic-tac-toe-plum-sigma-26.vercel.app/",
    // git: "https://github.com/Ghanishtkhurana/tic-tac-toe",
  },
  {
    text: "Parallax Effect",
    // dec: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more",
    image: "/image1.png",
    techStack: ["Next JS"],
    liveLink: "https://parallax-effect-lovat.vercel.app/",
    // git: "https://github.com/Ghanishtkhurana/parallax-effect",
  },
  {
    text: "Page Transition",
    // dec: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more",
    image: "/image.png",
    techStack: ["Next JS"],
    liveLink: "https://nixsh.vercel.app/",
    // git: "https://github.com/Ghanishtkhurana/page-animation",
  },
];

const Project = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>Project</p>
      {project.map((el, i) => (
        <div
          key={i}
          className="flex large:flex-row small:flex-row base:flex-col w-full gap-4 bg-gray-800 bg-opacity-40 p-2 rounded-md group "
        >
          <div className="relative overflow-hidden rounded-md h-[95px] w-[160px]">
            <Image src={el.image} fill alt="img" />
          </div>
          <div className="flex-1 justify-between py-2 w-full flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <p className="text-[14px] group-hover:text-[#57d7d0] transition-all duration-300">
                {el.text}
              </p>
              <div className="group-hover:ml-1 group-hover:mb-1 group-hover:text-[#57d7d0] transition-all duration-300">
                <a href={el.liveLink}>
                  <CgArrowTopRightO className="h-5 w-5 cursor-pointer" />
                </a>
              </div>
              {el.git && (
                <div className="group-hover:ml-1 group-hover:mb-1 group-hover:text-[#57d7d0] transition-all duration-300">
                  <a href={el.git} target="_black">
                    <VscGithub className="h-5 w-5 cursor-pointer" />
                  </a>
                </div>
              )}
            </div>
            {/* <div className="text-gray-400 pr-4">
              <p className="text-[12px]">{el.dec}</p>
            </div> */}
            <div className="flex gap-2 flex-wrap">
              {el.techStack.map((otp, l) => (
                <Button
                  key={l}
                  radius="full"
                  size="sm"
                  className="bg-[#193753] h-6 text-[9px] group-hover:text-[#57d7d0] transition-all duration-300 text-[#57d7d0] font-semibold"
                  // endContent={<el.icon className={`text-[#57d7d0]`} />
                >
                  {otp}
                </Button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
