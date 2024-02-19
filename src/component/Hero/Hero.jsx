import React from 'react';
import HeroImg from "../../assets/hero.png";
import HeroBg from "../../assets/heroBg.png";
import PrimaryButton from '../Shared/PrimaryButton';


const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize:"100%",
    width:"100%",
    height:"100",
};
const Hero = () => {
    return (
        <>
            <div style={BgStyle} className='relative z-[-1]'>
                <div className="container py-16 sm:py-0">
                    <div className="grid grid-col-1 sm:grid-cols-2 
                        gap-4 place-items-center min-h-[600px]">
                        {/* text content section */}
                        <div className='space-y-7 text-dark order-2 sm:order-1'>
                            <h1 data-aos="fade-up" className='text-5xl'>fresh & Healthy plan {" "}
                                <span data-aos="fade-up" className='text-secondary font-cursive text-7xl'>
                                    Delivery {" "} 
                                </span>
                                in
                                {" "}
                                <span data-aos="fade-up" className='text-secondary font-cursive text-7xl'>
                                    Bharat
                                </span>
                            </h1>

                            <div data-aos="fade-up " data-aos-dealy="300">
                            <p  data-aos="fade-up " data-aos-dealy="380" className='lg:pr-64'>Delicious Meals Delivered to Your Door <br />
                                <span data-aos="fade-up " data-aos-dealy="340" className='text-secondary font-cursive text-4xl'>
                                    Eat  & Repeat 
                                </span>
                            </p>
                            </div>
                            {/* button section */}
                            <div data-aos="fade-up" data-aos-delay="550">
                                <PrimaryButton/>
                            </div>

                        </div>
                        {/* image section */}
                        <div data-aos="fade-up" data-aos-delay="600" className='relative z-30 order-1 sm:order-2'>
                            <img src={HeroImg} alt="hero"
                            className='w-full sm:scale-19
                            sm:translate-y-10 '/>    
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
