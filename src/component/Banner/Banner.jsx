import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import lemon from '../../assets/png/lemon.png';
import leaf from '../../assets/png/leaf.png';
import tomato from '../../assets/png/tomato.png';
import apple from '../../assets/png/apple.png';
import kiwi from '../../assets/png/kiwi.png';


const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div>
          <h1 data-aos="fade-up" data-aos-delay="300"
          className="py-8 tracking-wider text-2xl font-semibold text-dark
          text-center">
            Taste the Healthy Diffrence
          </h1>


        {/* content section */}
          <div className="space-y-10">
            <div data-aos="fade-up" data-aos-delay="350" className="grid grid-col-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p> {" "} We Know that <span className="text-primary">time{" "}</span>
                  is the greastest value in the modern world. Our healthy meal plan delivery
                  service Good Food in Bharat is the answer for those who want to eat
                  healthy, saving time for buying food and preparing delicious, healthy
                  meals.
                </p>
              </div>
              <div></div>
            </div>
            
            <div className="grid grid-col-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
              <div data-aos="fade-up" data-aos-delay="350">
                <p> {" "} We Know that <span className="text-primary">time{" "}</span>
                  is the greastest value in the modern world. Our healthy meal plan delivery
                  service Good Food in Bharat is the answer for those who want to eat
                  healthy, saving time for buying food and preparing delicious, healthy
                  meals.
                </p>
              </div>
            </div>
          </div>

          {/* button section */}
          <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center mt-10 sm:mt-14">
            <PrimaryButton/>
          </div>
        </div>
        {/* bg fruits png */}
        <div data-aos="fade-right" data-aos-delay="350" className="absolute top-5 -leaf-16 sm:bottom-0 sm:left-0
        opacity-50 sm:opacity-100">
          <img src={leaf} alt="" className="max-w-[160px]"/>
        </div>

        <div data-aos="fade-right" data-aos-delay="3800" className="absolute -bottom-16 -leaf-16 sm:bottom-0
          sm:left-0 opacity-50 sm:opacity-100">
          <img src={tomato} alt="" className="max-w-[280px]"/>
        </div>

        <div  data-aos="fade-down" data-aos-delay="410" className="absolute top-10 -right-16 sm:right-20 
           opacity-50 sm:opacity-100">
          <img src={lemon} className="max-w-[200px]" alt="" />
        </div>

        <div data-aos="fade-right" data-aos-delay="420" className=" hidden sm:block absolute bottom-0 right-0">
          <img src={apple} className="max-w-[200px]" alt="" />
        </div>
        
        <div  data-aos="fade-right" data-aos-delay="430" className=" absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100">
          <img src={kiwi} className="max-w-[180px]" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
