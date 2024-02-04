// components/AnimatedContainer.js
// import { useEffect, useRef } from "react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedContainer = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center">
      {inView && (
        <div
          className={`transition-opacity duration-500 ${
            scrollDirection === "down" ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default AnimatedContainer;
