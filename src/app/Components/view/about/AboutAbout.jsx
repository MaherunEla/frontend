import React from "react";
import { AboutAboutData } from "./AboutData";


const AboutAbout = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[61px] bg-[#F4F0F8] py-12 px-10 lg:py-24 lg:px-20">
        {AboutAboutData.map((item, index) => (
          <div className="xl:w-[515px] w-full" key={index}>
            <span className="tracking-[3px] font-medium mb-6 inline-block uppercase">{item.title}</span>
            <h3 className="mb-4 text-2xl font-bold md:text-[28px] font-sen leading-10 -tracking-[1px]">{item.subTitle}</h3>
            <p className="text-sm font-normal leading-7 md:text-base font-inter text-[#6D6E76]">{item.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAbout;
