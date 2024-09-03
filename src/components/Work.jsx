import React from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out my work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-black 
  group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative"
        >
          <img src={work1} layout="fill" objectFit="cover" alt="work1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://health-direction-site.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Go
                </button>
              </a>
            </div>
          </div>
        </div>
    
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-black 
  group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative"
        >
          <img src={work2} layout="fill" objectFit="cover" alt="work1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="http://libaniu.my.id/booking/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Go
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transfomr transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-black 
      group container rounded-md flex justifiy-center items-center mx-auto content-div h-[200px] bg-cover relative"
        >
          <img src={work3} layout="fill" objectFit="cover" alt="work1" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absoule insert-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Go
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
