import React, { useState } from "react";
import { Grid } from "./GridComponents";
import { Icon } from "@iconify/react";
import { Center, Square } from "./Components";
import data from "../Data/Field.json";
import resume from "/assets/pdf/resume.pdf";

function ToggleContent() {
  const { key } = data;
  const [toggled, setToggled] = useState();

  return (
    <>
      <div className={`px-6 py-12 md:py-24 md:px-20 `}>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 h-96">
          <div className="col-span-2 pointer-events-none">
            <Center>
              <Square
                title={data.personal[0]["experience"]}
                desc="Year Experience"
              />
            </Center>
          </div>
          <div className="grid grid-cols-2 col-span-2 gap-3 ">
            {key.map(({ keys, id }) => (
              <button
                key={id}
                onClick={() => setToggled(id)}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay={id % 2 === 0 ? 800 : 200}
              >
                <Center>
                  <Square
                    title={keys === keys && data[`${keys}`].length}
                    desc={keys}
                  />
                </Center>
              </button>
            ))}
            <div
              className="flex items-center justify-center shadow group hover:bg-secondary dark:hover:bg-secondary bg-main/20 dark:bg-primary/10 "
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="800"
            >
              <a href={resume}>
                <Square
                  title={
                    <Icon icon="fa:download" width="38" className="mb-2 ml-2" />
                  }
                  desc="Resume"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {key.map(({ keys, id }) => {
        return (
          <React.Fragment key={id}>
            {toggled === id ? <Grid data={data[`${keys}`]} /> : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default ToggleContent;
