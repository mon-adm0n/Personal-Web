import React from "react";
import data from "../Data/Field.json";
import { Icon } from "@iconify/react";

//Tittle
export function Tittle({ text }) {
  return (
    <div
      className="flex justify-center mx-auto "
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <h1 className="text-3xl font-bold uppercase dark:text-primary/80">{text}</h1>
    </div>
  );
}

//layoutCenter
export function Center(props) {
  return (
    <>
      {React.Children.map(props.children, (child, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full h-full col-span-2 transition-all shadow group bg-main/20 hover:bg-secondary dark:hover:bg-secondary dark:bg-primary/10 active:scale-90"
        >
          {child}
        </div>
      ))}
    </>
  );
}

export function Square(props) {
  return (
    <div className="text-center text-secondary group-hover:text-white">
      <p className="items-center justify-center mx-auto text-5xl text-center ">
        {props.title}
      </p>
      <h4 className="capitalize text-slate-400">{props.desc}</h4>
    </div>
  );
}

//Button
export function Btn({ className, children, onClick }) {
  return (
    <button
      className={`py-2 px-4 rounded md:text-lg font-medium shadow-lg hover:bg-blue-400 hover:translate-y-2 duration-1000 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

//Social Media
export function Social() {
  const { socialMedia } = data;
  return (
    <>
      <div className="flex justify-center p-4 mx-auto space-x-6 md:space-x-8">
        {socialMedia.map(({ name, url, icons }, index) => (
          <a href={url} placeholder={name} key={index}>
            <div id={name}>
              <Icon
                icon={icons}
                width="28"
                className="dark:text-secondary text-white/60 hover:text-secondary darkhover:text-primary"
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
