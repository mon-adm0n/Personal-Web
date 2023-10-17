import React, { useState, useEffect } from "react";

function ScrollTransition({ children, start, end, index }) {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolling = scrollY > start && scrollY < end;

  const fadeRight = isScrolling
    ? `transition-all transition-transform transform translate-x-0 duration-1000 ease-in-out`
    : `transition-all transition-transform transform translate-x-full duration-1000 ease-in-out`;

  const fadeLeft = isScrolling
    ? `transition-all transition-transform transform translate-x-0 opacity-100 duration-1000 ease-in-out`
    : `transition-all transition-transform transform -translate-x-full duration-1000 ease-in-out`;

  return (
    <div className={index % 2 === 0 ? fadeLeft : fadeRight}>
      {children}
    </div>
  );
}

export default ScrollTransition;
