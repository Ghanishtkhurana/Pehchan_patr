import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

let uiArr = [
  {
    text: "About",
    link: "/",
    id: "#about",
  },
  {
    text: "Experience",
    link: "/",
    id: "#experience",
  },
  {
    text: "Project",
    link: "/",
    id: "#project",
  },
];

const UiElements = (id) => {
  console.log("id check", id);
  const scrollToAboutSection = () => {
    // Replace 'aboutSection' with the ID of your about section
    scroll.scrollTo(document.getElementById("experience").offsetTop, {
      smooth: true,
    });
  };

  return (
    <div className="flex flex-col gap-3 text-gray-400 hover:text-gray-200">
      {uiArr.map((el, i) => (
        <div
          className="flex group gap-4 items-center"
          onClick={() => scrollToAboutSection(el.id)}
        >
          <div className="bg-gray-400 w-7 group-hover:w-20 group-hover:bg-gray-200 transition-all duration-300 h-[2px]"></div>
          <p className="cursor-pointer">{el.text}</p>
        </div>
      ))}
    </div>
  );
};

export default UiElements;
