import React from "react";
import { FaPhone } from 'react-icons/fa6';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div className="container bg-gradient-to-b from-primary to bg-primaryDark rounded-t-3xl">
          <div>
            {/* heading section */}
            <h1 data-aos="fade-up" data-aos-delay="350" className="py-10 text-3xl font-bold text-yellow text-center">Contact Us</h1>
            {/* grid section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
              {/* address section */}
              <div data-aos="fade-up" data-aos-delay="350"  className="text-center space-y-4">
                <div className="flex justify-center">
                  <IoLocationSharp className="text-5xl" />
                </div>
                <p>
                  #8, 2nd Road , sardana apartment, Law gate <br /> LPU, Phagwara, Punjab, 144411
                </p>
              </div>
              {/* email section */}
              <div data-aos="fade-up" data-aos-delay="350" className="text-center space-y-4">
                <div className="flex justify-center">
                  <MdEmail className="text-5xl" />
                </div>
                <p>Keshavkrishn10006@gmail.com</p>
                <p>contactmeanytime123@gmail.com</p>
              </div>

              {/* contact section */}
              <div data-aos="fade-up" data-aos-delay="350" className="text-center space-y-4">
                <div className="flex justify-center">
                  <FaPhone className="text-5xl" />
                </div>
                <div data-aos="fade-up" data-aos-delay="350">
                  <p>7845578648 - Sales and Connsultent</p>
                  <p>8685468466 -Hiring quries</p>
                  <p>8255555563 - Placing order</p>
                </div>

              </div>
            </div>
          </div>
          {/* copyright */}
          <div  className="flex justify-center p-4 items-center gap-9">
            <div className="flex justify-center items-center gap-50 ">
              <p>2024 KK.All Rights Reserved</p>
            </div>
            <div className="flex items-center gap-7">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>


          </div>
        </div>
      </div>
    </>
  );

};

export default Footer;
