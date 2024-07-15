import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Navbar from "./components/Navbar";
import { Tittle, Btn, Social } from "./components/Components";
import {
  GridSkills,
  Testimoni,
  ContentCard,
} from "./components/GridComponents";
import "./App.css";
import Header from "./components/Header";
import ToggleContent from "./components/ToggleContent";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [data, setData] = useState({ softSkills: [], project: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode("light");
    } else {
      setIsDarkMode("dark");
    }

    fetch("/assets/Data/Field.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode === "dark");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode === "dark" ? "light" : "dark");
  };

  const darkTheme =
    "bg-primary text-white/80 dark:bg-white/80 dark:text-primary";

  const { softSkills, project } = data;

  return (
    <div className={`${darkTheme}`}>
      <div className="flex justify-center text-center">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <Header />
      {/* <div className="justify-center mx-auto pt-28">
        <Tittle text="Focus" />
        <div className="container flex mx-auto mt-6 mb-24 md:mt-12 lg:px-24">
          <GridSkills />
        </div>
      </div> */}
      {/* <div className="pt-20 mx-auto md:px-24">
        <Tittle text="Why Hire Me?" />
        <div className="grid grid-cols-1 pt-16 lg:gap-6 md:grid-cols-2 lg:grid-cols-4 pb-28">
          <Testimoni data={softSkills} />
        </div>
      </div> */}
      {/* <div className="py-10 mb-24 bg-main dark:bg-secondary/20 md:h-52">
        <h1 className={`text-white flex justify-center mx-auto text-xl font-bold md:text-3xl`}>
          Interested working with me?
        </h1>
        <div className="flex justify-center pt-8 mx-auto">
          <Btn className="bg-secondary hover:bg-white dark:text-white hover:text-secondary image-container">
            <div className="flex items-center gap-1">
              <Icon icon="ic:baseline-email" width="24" />
              Hiring Me
            </div>
          </Btn>
        </div>
      </div> */}
      <Tittle text="Portofolio" />
      <div>
        <ContentCard data={project} />
      </div>
      <div className="container justify-center mx-auto">
        <ToggleContent />
      </div>
      <div className="flex items-center w-full mt-20 dark:bg-main/20 bg-main">
        <Social />
      </div>
    </div>
  );
}

export default App;
