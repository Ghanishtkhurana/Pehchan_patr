import { Button } from "@nextui-org/react";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongoose } from "react-icons/si";
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
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-200">Experience</p>

      <div className="flex base:gap-10 large:flex-row small:flex-row base:flex-col group bg-gray-800 bg-opacity-40 text-[14px] px-2 py-4 rounded-md">
        <div className="text-gray-400 min-w-[150px] flex justify-start px-5 pt-1">
          <p className="text-[13px]">2024 - PRESENT</p>
        </div>
        <div className="flex-1 base:px-5 flex flex-col gap-4">
          {/* heading  */}
          <div className="flex gap-3 group-hover:text-[#57d7d0] transition-all duration-300 items-center">
            <p className="text-[16px]">Lead Engineer - Web Developer</p>
            <div className="group-hover:ml-1 group-hover:mb-1 transition-all duration-300">
              <CgArrowTopRightO className="h-5 w-5 cursor-pointer" />
            </div>
          </div>
          <div className="text-gray-400 flex flex-col gap-1 text-[13px]">
            <p>Senior Engineer</p>
            <p>Full Stack Developer</p>
          </div>
          <div>
            <p className="text-gray-400 text-[13px]">
              Build, style, and ship high-quality websites, design systems,
              mobile apps, and digital experiences for a diverse array of
              projects for clients including Harvard Business School, Everytown
              for Gun Safety, Pratt Institute, Koala Health, Vanderbilt
              University, The 19th News, and more. Provide leadership within
              engineering department through close collaboration, knowledge
              shares, and spearheading the development of internal tools.
            </p>
          </div>
          {/* skill btn  */}
          <div className="flex gap-2 flex-wrap">
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
