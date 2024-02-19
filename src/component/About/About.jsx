import React from "react";
import { FaUser } from 'react-icons/fa';
import BgPolygon from '../../assets/polygon.png';
import Vector from '../../assets/vector-wave.png';

const BgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100%",
  width: "100%",
  height: "100",
};


const About = ({HandlePopup}) => {
  return (
    <>
      <div data-aos="fade-up" data-aos-delay="200" style={BgStyle} className="">
        <div className="container min-h-[700px] relative z-10">
          <h1 className="pt-40 tracking-wider text-4xl font-semibold text-white text-center"> About Us</h1>

          {/* card section */}
          <div data-aos="fade-up" data-aos-delay="350" className=" p-10 my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aspernatur fuga ipsum
            libero reprehenderit expedita, velit voluptas ea suscipit fugit magnam dolores praesentium
            iure quaerat eaque maxime provident incidunt. Dignissimos! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quasi quisquam vitae beatae nulla in suscipit eius,
            maiores odio hic consequuntur qui assumenda aperiam vel doloribus!
            Cumque earum odio odit quas! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur velit cupiditate asperiores maxime. Excepturi mollitia porro minus quam
            a non ipsa, officiis, similique totam deleniti explicabo vitae earum eaque sequi.

            <div data-aos="fade-down" data-aos-delay="200" className="pt-10 flex justify-center">
              <button data-aos="fade-up" data-aos-delay="200" onClick={HandlePopup} className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px]
              text-white px-5 py-2 hover:scale-105 duration-300">
                <FaUser />
                Account
              </button>
            </div>
          </div>
          {/* Wave vector */}
        <div data-aos="fade-up" data-aos-delay="270" className="absolute top-0 right-0 w-full">
            <img  data-aos="fade-up" data-aos-delay="400" src={Vector} className="mx auto w-full " />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;