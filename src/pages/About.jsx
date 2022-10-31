import React from "react";
import AboutSection from "../components/AboutSection";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="flex flex-col mb-20">
        <AboutSection
          imageSrcAbout="https://drive.google.com/uc?export=view&id=1V6t3lUbySQXN3juvf4-5ScanyKu6xpnX"
          imageAltAbout="About Section"
          titleAbout="About Peach Blossoms Project"
          descriptionAbout1="This project is a website to display makeup data from the MAKEUP API. There are various brands of makeup displayed."
          descriptionAbout2="This project in addition to displaying a list of makeup that is in the MAKEUP API also has a makeup search feature by brand name. This website is built using React JS, Tailwind CSS, Font Awesome, Axios. Photo assets taken from Pexels. Logo made with Coreldraw."
        />
        <div className="w-10/12 self-center py-20">
          <img src="https://drive.google.com/uc?export=view&id=18NGsf0TQmfZ-yp3EXyWLba2fho-UxG1v" alt="Peach Blossoms" />
        </div>
        <AboutSection
          imageSrcAbout="https://drive.google.com/uc?export=view&id=17rZwEUk-fK98--4BLCFPk1Pp4vZTamfR"
          imageAltAbout="About Section"
          titleAbout="What is Lorem Ipsum?"
          descriptionAbout1="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          descriptionAbout2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          className="lg:flex-row-reverse lg:text-right"
        />
      </div>
    </Layout>
  );
}

export default About;
