import { Button } from "@nextui-org/react";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongoose, SiTypescript } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaAws } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";

let skillArr = [
  {
    text: "HTML",
    color: "F3B95F",
    icon: FaHtml5,
  },
  {
    text: "CSS",
    icon: FaCss3Alt,
  },
  {
    text: "JavaScript",
    color: "F3B95F",
    icon: IoLogoJavascript,
  },
  {
    text: "MongoDb",
    icon: BiLogoMongodb,
  },
  {
    text: "Mongoose",
    icon: SiMongoose,
  },
  {
    text: "Aws",
    icon: FaAws,
  },
  {
    text: "Next JS",
    icon: TbBrandNextjs,
  },
  {
    text: "Node JS",
    icon: IoLogoNodejs,
  },
  {
    text: "Express JS",
    icon: SiExpress,
  },
  {
    text: "Typescript",
    icon: SiTypescript,
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-200">Experience</p>

      <div className="flex base:gap-10 large:flex-row small:flex-row base:flex-col group bg-gray-800 bg-opacity-40 text-[14px] px-1 py-4 rounded-md">
        <div className="flex-1 base:px-5 flex flex-col gap-6">
          {/* heading  */}
          <div className="flex base:flex-col small:flex-row justify-between">
            <div className="flex gap-3 group-hover:text-[#57d7d0] transition-all duration-300 items-center">
              <p className="text-[16px]">Full-Stack Web Developer</p>
              <div className="group-hover:ml-1 group-hover:mb-1 transition-all duration-300">
                <CgArrowTopRightO className="h-5 w-5 cursor-pointer" />
              </div>
            </div>
            <div className="text-gray-400 flex justify-start pt-2">
              <p className="text-[13px]">2024 - PRESENT</p>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-[13px]">
              In my recent projects, {"I've"} demonstrated expertise in diverse
              areas including SMS API integration, CRM development, and
              automation solutions. One notable project involved developing a
              robust SMS management system utilizing third-party APIs. This
              system facilitated administrators in sending messages to users
              using a template-based approach. Additionally, functionalities
              such as tracking user logins across multiple devices and bulk user
              uploads via Excel sheets were incorporated for enhanced usability.
              Another significant endeavor involved crafting a comprehensive CRM
              system focusing on lead management within organizations. This CRM
              offered features such as employee management with hierarchical
              authorization, branch management, and lead assignment mechanisms.
              Lead acquisition from Facebook webhook and Excel sheet imports
              were seamlessly integrated to streamline lead management
              processes. Currently, I am engrossed in an automation project
              centered around Telegram bot functionality. This project enables
              effective management of user interactions with the bot, allowing
              for the exchange of messages, media, and documents. Furthermore, I
              am actively developing a flow builder tool to automate bot
              interactions based on predefined criteria, ensuring a seamless
              user experience.
            </p>
          </div>
          {/* skill btn  */}
          <div className="flex gap-3 flex-wrap">
            {skillArr.map((el, i) => (
              <Button
                key={i}
                radius="full"
                size="sm"
                className="bg-[#193753] group-hover:text-[#57d7d0] transition-all duration-300 text-[#57d7d0] font-semibold"
                endContent={<el.icon className={`text-[#57d7d0]`} />}
              >
                {el.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
