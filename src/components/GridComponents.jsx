import React, { useState, useEffect } from "react";
import { Btn } from "./Components";
import { Icon } from "@iconify/react";
import data from "../Data/Field.json";
import axios from "axios";

export function GridSkills() {
  const [generalSkills, setGeneralSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(data)
      .then((response) => {
        setGeneralSkills(response.data.generalSkills);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const gridCols =
    generalSkills.length % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  const colClass =
    generalSkills.length % 2 === 1
      ? "lg:col-span-1 md:col-span-2"
      : "lg:col-span-1 md:col-span-1";

  return (
    <div
      className={`overflow-x-hidden grid md:grid-cols-2 ${gridCols} gap-8 lg:gap-12 md:gap-10 py-4`}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        generalSkills.map((item, index) => (
          <div
            key={index}
            className={`h-64 border border-secondary/30 w-11/12 cursor-pointer md:w-full mx-auto py-4 px-4 lg:px-6 hover:bg-secondary  shadow-xl rounded group ${colClass}`}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-offset="-100"
            data-aos-duration="500"
            data-aos-anchor-placement="top-center"
          >
            <div className="flex items-center pb-2 dark:text-primary dark:group-hover:text-white">
              <Icon
                icon={item.icons}
                width="48"
                className="mr-4 text-secondary group-hover:text-white dark:group-hover:text-white"
              />
              <h3 className="text-xl font-bold ">{item.name}</h3>
            </div>
            <p className="text-sm font-light text-justify md:text-base md:font-medium dark:group-hover:text-white line-clamp-7 lg:line-clamp-7">
              {item.desc}
            </p>
            <div className="pt-4"></div>
          </div>
        ))
      )}
    </div>
  );
}

function ClassGrid({ img, title, text, date, url }) {
  return (
    <div
      className="flex justify-center pb-8 mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-11/12 grid-cols-2 gap-4 p-4 rounded-lg shadow-lg md:grid bg-secondary/10 md:w-11/12 lg:w-4/5">
        <div className="col-span-1 mx-auto">
          <div>
            <img
              src={`/assets/${img}`}
              alt={img}
              className="w-full h-48 duration-300 shadow h-90 brightness-90 md:h-64 lg:h-72 rounded-tl-3xl rounded-br-3xl hover:scale-110 hover:transform"
            />
          </div>
        </div>
        <div className="w-full col-span-1 px-2 pt-4 mx-auto text-lg">
          <h2 className="font-semibold truncate">{title}</h2>
          {/* <p className="py-2">{date}</p> */}
          <p className="font-normal line-clamp-2 md:line-clamp-3">{text}</p>
          <div className="grid grid-cols-1 gap-4 pt-6">
            <a href={url}>
              <Btn className="bg-secondary ">Check</Btn>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

//Sertifikat Grid
export function GridCertifed({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <ClassGrid
          key={index}
          img={item.img}
          title={item.title}
          text={item.desc}
          url={item.url}
        />
      ))}
    </>
  );
}

// Grid Testimoni
export function GridTestimoni(props) {
  const image = {
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="px-4 pt-16 mx-auto bg-contain md:px-8 md:pt-8"
      key={props.id}
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-offset="0"
      data-aos-delay={props.index % 2 === 0 ? "500" : "200"}
    >
      <div className="flex justify-center brightness-75">
        <div className="border rounded-full shadow ring-2 ring-white/50 dark:ring-primary/50">
          <img
            src={`assets/${props.img}`}
            alt={props.img}
            className="m-2 rounded-full w-36 border-white/20 dark:border-primary/20 h-36 md:w-28 md:h-28 xl:h-48 xl:w-48"
            style={image}
          />
        </div>
      </div>

      <h4 className="pt-4 text-xl font-medium text-center">{props.name}</h4>
      <p className="pt-2 text-sm font-light text-center lg:text-md line-clamp-3">
        {props.desc}
      </p>
    </div>
  );
}

export function Testimoni() {
  const [testimoniData, setTestimoniData] = useState([]);

  useEffect(() => {
    // Mengambil data testimoni menggunakan Axios Fetch
    axios
      .get("/assets/Data/data.json")
      .then((response) => {
        setTestimoniData(response.data["softSkills"]);
      })
      .catch((error) => {
        console.error("Error fetching testimoni data:", error);
      });
  }, []);

  return (
    <>
      {testimoniData.map((item, index) => (
        <GridTestimoni
          key={item.id}
          img={item.img}
          name={item.name}
          desc={item.desc}
          index={index}
        />
      ))}
    </>
  );
}

export function GridChild({ title, text, img, id, onModalOpen }) {
  const openModal = () => {
    onModalOpen(id);
  };

  return (
    <div
      key={img}
      onClick={openModal}
      className="p-2 pb-4 rounded shadow cursor-pointer brightness-90 bg-main/80 text-white/70 dark:bg-primary/10 dark:text-primary/70 lg:h-full"
    >
      <img
        src={`/assets/${img}`}
        alt=""
        className="w-full rounded md:h-2/3 lg:h-3/4 xl:h-4/5"
      />
      <div className="mx-2 text-sm">
        <h4 className="flex py-2 font-semibold">{title}</h4>
        <p className="leading-tight tracking-tight text-justify line-clamp-2 lg:line-clamp-2 xl:line-clamp-2">
          {text}
        </p>
      </div>
    </div>
  );
}

function Modals({ open, onClose, modalData }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors pt-8 
        ${open ? "visible bg-primary/75" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-primary dark:bg-white rounded-lg shadow transition-all
         ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <button className="absolute top-3 right-3" onClick={onClose}>
          <Icon
            icon="ic:baseline-clear"
            className="text-2xl text-white md:text-4xl dark:text-primary hover:text-white/50 "
          />
        </button>
        <div className="pt-8 md:w-[50rem] md:h-[44rem] pb-4 px-6 mx-auto items-center text-justify">
          {modalData && (
            <>
              <div
                keu={modalData.id}
                className="flex justify-center mb-4 h-2/3"
              >
                <img
                  src={`/assets/${modalData.img}`}
                  alt=""
                  className="z-10 w-11/12 rounded-lg shadow opacity-90 md:active:scale-150 md:active:translate-y-20 hover:cursor-all-scroll"
                />
              </div>
              <div className="px-8 pt-2 text-lg text-justify text-white dark:text-primary">
                <h2 className="font-semibold ">{modalData.title}</h2>
                <p className="line-clamp-7">{modalData.desc}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function Grid({ data }) {
  const [modalData, setModalData] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const gridCols =
    data.length === 2
      ? "md:col-span-4 lg:col-span-3"
      : "md:col-span-5 lg:col-span-4";
  const ColsChild =
    data.length === 2
      ? "md:col-span-4 lg:col-span-3 md:row-span-2"
      : "md:col-span-3 lg:col-span-2";
  const ColsChildSec =
    data.length < 2
      ? "md:col-span-4 lg:col-span-3 md:row-span-2"
      : "md:col-span-4 lg:col-span-2";

  const openModal = (id) => {
    const selected = data.find((item) => item.id === id);
    setSelectedData(selected);
    setOpen(true);
  };

  const closeModal = () => {
    setSelectedData(null);
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="grid gap-4 px-4 lg:grid-cols-6 md:grid-cols-8 grid-flow-rows lg:px-12">
        <div
          className={`${gridCols} z-0 relative row-span-2 cursor-pointer rounded-lg`}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
        >
          <div
            key={data[0].id}
            onClick={() => openModal(data[0].id)}
            className="pb-4 rounded-lg shadow brightness-95 bg-main/80 text-white/70 dark:bg-primary/10 dark:text-primary/70 xl:h-full"
          >
            <img
              src={`/assets/${data[0].img}`}
              alt=""
              className="w-full p-2 bg-cover md:h-2/4 lg:h-2/3 xl:h-4/5 rounded-xl"
            />
            <div className="mx-4 mt-4 mb-3 text-lg leading-snug">
              <h4 className="flex font-semibold">{data[0].title}</h4>
              <p className="pt-2 text-justify line-clamp-3 md:line-clamp-6 lg:line-clamp-7 xl:line-clamp-3">
                {data[0].desc}
              </p>
            </div>
          </div>
        </div>
        {data.slice(1).map((item, index) => (
          <div
            className={index > 1 ? ColsChildSec : ColsChild}
            key={item.id}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay={index % 2 === 0 ? "800" : "300"}
          >
            <GridChild
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              text={item.desc}
              onModalOpen={openModal}
            />
          </div>
        ))}
      </div>

      <Modals open={open} onClose={closeModal} modalData={selectedData} />
    </div>
  );
}
