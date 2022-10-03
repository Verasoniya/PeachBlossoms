import React from "react";

function AboutSection({ imageSrcAbout, imageAltAbout, titleAbout, descriptionAbout1, descriptionAbout2, className }) {
  return (
    <div className={`flex gap-2 bg-[#FF9494] ${className}`}>
      <img src={imageSrcAbout} alt={imageAltAbout} className="w-1/3" />
      <div className="flex justify-center w-full h-auto">
        <div className="flex flex-col self-center w-2/3 font-gill-sans-mt text-[#FFF5E4] gap-4">
          <p className="font-bold text-3xl">{titleAbout}</p>
          <p className="text-xl">{descriptionAbout1}</p>
          <p className="text-xl">{descriptionAbout2}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
