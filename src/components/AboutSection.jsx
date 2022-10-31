import React from "react";

function AboutSection({ imageSrcAbout, imageAltAbout, titleAbout, descriptionAbout1, descriptionAbout2, className }) {
  return (
    <div className={`flex flex-col lg:flex-row gap-2 bg-[#FF9494] ${className}`}>
      <img src={imageSrcAbout} alt={imageAltAbout} className="w-full lg:w-1/3" />
      <div className="flex justify-center w-full h-auto">
        <div className="flex flex-col self-center w-full lg:w-2/3 px-6 lg:px-0 py-10 lg:py-0 font-gill-sans-mt text-[#FFF5E4] gap-4">
          <p className="font-bold text-2xl lg:text-3xl">{titleAbout}</p>
          <p className="text-md lg:text-xl">{descriptionAbout1}</p>
          <p className="text-md lg:text-xl">{descriptionAbout2}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
