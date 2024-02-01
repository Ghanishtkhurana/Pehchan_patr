import { Tooltip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogo } from "react-icons/pi";

let socialLink = [
  {
    icon: FaGithub,
    text: "Github",
  },
  {
    icon: FaLinkedin,
    text: "LinkedIn",
  },
  {
    icon: PiInstagramLogo,
    text: "Instagram",
  },
  {
    icon: FaXTwitter,
    text: "Twitter",
  },
];

const SocialLink = () => {
  return (
    <div className="flex gap-5 items-center justify-center h-[60px] min-w-[250px]">
      {socialLink.map((el, i) => (
        <div className="h-[35px] w-[35px] flex justify-center items-center">
          <Tooltip showArrow={true} content={el.text}>
            <Button isIconOnly variant="light">
              {
                <el.icon className="text-gray-400 h-6 w-6 hover:text-gray-200 transition-all duration-300" />
              }
            </Button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default SocialLink;
