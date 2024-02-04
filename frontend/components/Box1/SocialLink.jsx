import { Tooltip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogo } from "react-icons/pi";

let socialLink = [
  {
    icon: FaGithub,
    text: "Github",
    link: "https://github.com/Ghanishtkhurana",
  },
  {
    icon: FaLinkedin,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/ghanisht-khurana-355b691b0",
  },
  {
    icon: PiInstagramLogo,
    text: "Instagram",
    link: "https://www.instagram.com/khurana_editz",
  },
  {
    icon: FaXTwitter,
    text: "Twitter",
    link: "https://github.com/Ghanishtkhurana",
  },
];

const SocialLink = () => {
  return (
    <div className="flex gap-5 items-center justify-center h-[60px] min-w-[250px]">
      {socialLink.map((el, i) => (
        <div
          key={i}
          className="h-[35px] w-[35px] flex justify-center items-center"
        >
          <Tooltip showArrow={true} content={el.text}>
            <Button isIconOnly variant="light">
              <Link href={el.link}>
                {
                  <el.icon className="text-gray-400 h-6 w-6 hover:text-gray-200 transition-all duration-300" />
                }
              </Link>
            </Button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default SocialLink;
