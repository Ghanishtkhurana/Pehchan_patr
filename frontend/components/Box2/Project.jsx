import React from "react";
import Image from "next/image";
import { CgArrowTopRightO } from "react-icons/cg";

let project = [
  {
    text: "Project 1",
    dec: "description of project 1",
    image: "/one.jpg",
  },
  {
    text: "Project 2",
    dec: "description of project 2",
    image: "/two.png",
  },
  {
    text: "Project 3",
    dec: "description of project 3",
    image: "/three.png",
  },
  {
    text: "Project 4",
    dec: "description of project 4",
    image: "/four.png",
  },
];

const Project = () => {
  return (
    <div id="project" className="flex flex-col gap-5">
      <p>Project</p>
      {project.map((el, i) => (
        <div className="flex gap-4 bg-gray-800 bg-opacity-40 p-2 rounded-md group ">
          <div className="relative overflow-hidden rounded-md h-[80px] w-[160px]">
            <Image src={el.image} fill alt="img" />
          </div>
          <div className="flex-1">
            <div className="flex gap-3 items-center">
              <p className="text-[16px] group-hover:text-[#57d7d0] transition-all duration-300">
                {el.text}
              </p>
              <div className="group-hover:rotate-45 group-hover:text-[#57d7d0] transition-all duration-300">
                <CgArrowTopRightO className="h-5 w-5 cursor-pointer" />
              </div>
            </div>
            <div className="text-gray-400">
              <p className="text-[12px]">{el.dec}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
