import React from "react";
import mid from "../assets/gundar.png";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              I am currently a 6th-semester student pursuing a degree in
              Computer Science at Gunadarma University. Alongside my studies, I
              am gaining practical experience as a junior web developer. My
              coursework and hands-on projects have equipped me with a solid
              foundation in web development, and I am eager to apply my skills
              in real-world scenarios. My academic journey and professional
              aspirations are driven by a strong passion for technology and
              problem-solving
            </p>
          </div>
        </div>

        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={mid}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default About;
