import React, { useEffect, useState } from "react";
import "../App.css";
import DialogBox, { Svg } from "./Animations";
import { Btn } from "./Components";
import data from "../Data/Field.json";
import resume from "/assets/pdf/resume.pdf";
import { Icon } from "@iconify/react";

function Header() {
  const [open, setOpen] = useState(false);
  const { firstName, lastName } = data.personal[0];
  const fullName = firstName + " " + lastName;
  const toRotate = [
    fullName,
    "Network Engineer",
    "IT Network Support",
    "IT Network Implementation",
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(toRotate[0]);

  const [typingEffect, setTypingEffect] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    let timer;

    const typeText = () => {
      setText((prevText) => toRotate[index].substring(0, charIndex));
      charIndex++;

      if (charIndex > toRotate[index].length) {
        clearInterval(timer);
        setTimeout(() => {
          setTypingEffect(false);
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % toRotate.length);
            setTypingEffect(true);
          }, 500); // Waktu untuk fade out
        }, 1000); // Waktu tunggu setelah mengetikkan semua teks
      }
    };

    if (typingEffect) {
      timer = setInterval(typeText, 100); // Kecepatan ketikan
    }

    return () => clearInterval(timer);
  }, [index, typingEffect]);

  return (
    <div className="w-full pt-8 mx-auto md:py-24 lg:pt-28 xl:pt-36">
      <div className="absolute hidden w-full z-00 md:block">
        {/* Bullet */}
        <div className="grid grid-flow-col grid-cols-3 ">
          <div className="grid col-span-2 grid-rows-4 gap-10 ">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <Svg rows={5} cols={6} />
              </div>
            ))}
          </div>

          <div className="flex items-end col-span-2 grid-rows-2 gap-y-80 ">
            <div>
              <Svg rows={6} cols={6} />
            </div>
            <div>
              <Svg rows={6} cols={6} />
            </div>
          </div>
        </div>
      </div>

      {/* Rocket */}
      <div className="z-0">
        <div className="absolute z-0 hidden md:block move-image-container lg:-right-0 md:-right-0 md:-top-40 lg:-top-60">
          <div
            className={`move-image w-28 md:w-40 lg:w-64 md:h-48 lg:h-96 bg-cover bg-[url('/assets/rocketdark.png')] dark:bg-[url('/assets/rocket.png')]`}
          ></div>
        </div>
      </div>
      {/*  */}

      {/* Text */}
      <div className="z-20 grid mb-28 md:mb-8">
        <div className="items-center px-6 pt-10 mx-auto md:pt-8 md:px-20 lg:px-28 ">
          <div className="grid gap-2 md:grid-cols-3 md:gap-24 ">
            {/* Ilustrator */}
            <div className="group ">
              <div
                className="flex items-center justify-center mx-auto md:col-span-1"
                data-aos="fade-up-right"
              >
                <div className="mt-10 md:mt-28 lg:mt-0 md:-scale-x-90">
                  <img
                    src="/assets/vectary.png"
                    alt="vectary"
                    className="h-64 image-container w-28 md:w-40 lg:w-64 md:h-max "
                    data-aos="fade-up-right"
                  />
                </div>
              </div>
              <div
                className="absolute z-0 top-8 right-8 sm:right-40 md:top-18 md:left-28 lg:top-20 lg:left-48 "
                data-aos="zoom-out"
                data-aos-duration="1000"
              >
                <DialogBox />
              </div>
            </div>
            {/* Baner content */}
            <div className="z-0 md:col-span-2 md:w-5/6 sm:pt-12">
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
                  <span className="text-secondary typing-text">
                    Hi! I'm {text}
                  </span>
                  <br />
                  <p className="text-2xl md:pt-2 md:text-3xl lg:text-5xl">
                    Great to see you.{" "}
                  </p>
                </h1>
                <p className="pt-2 text-base font-normal md:pt-4 md:text-lg">
                  {data.personal[0].introduce}
                </p>
              </div>

              <div className="flex pt-6 space-x-8">
                <div data-aos="zoom-in" data-aos-anchor="#example-anchor">
                  <a href={`mailto:saifulhuda020@gmail.com?`}>
                    <Btn
                      onClick={() => setOpen(true)}
                      className="bg-secondary dark:text-white"
                    >
                      <div className="flex items-center gap-1">
                        <Icon icon="ic:baseline-email" width="24" />
                        Email Me
                      </div>
                    </Btn>
                  </a>
                </div>

                <div
                  className="hidden md:block"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <a href={resume}>
                    <Btn
                      onClick={() => setOpen(true)}
                      className="bg-white text-secondary dark:bg-white dark:text-secondary"
                    >
                      <div className="flex items-center gap-1">
                        <Icon icon="ph:read-cv-logo-fill" />
                        Resume
                      </div>
                    </Btn>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
