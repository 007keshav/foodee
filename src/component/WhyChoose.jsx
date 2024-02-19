import React from 'react'
import { FaBus } from "react-icons/fa";
const WhyChoose = () => {
    return (
        <>
            <div className="py-14 md:py-28 bg-gray-50">
                <div className="container">
                    <h1 data-aos="fade-up" data-aos-delay="250" className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>
                        Why Choose Us
                    </h1>
                    {/* card section */}
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
                            {/* 1stcard     */}
                            <div data-aos="fade-up" data-aos-delay="300" className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <p className=' text-dark/70 font-semibold '>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>

                                <p className='text-5xl rotate-90'>....</p>
                                <FaBus className="text-5xl text-primary bg-center" />
                            </div>
                            {/* 2nd card */}

                            <div  data-aos="fade-down" data-aos-delay="330" className='text-center flex justify-center items-center flex-col gap-2 px-3'>
                                <FaBus className="text-5xl text-secondary" />
                                <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>....</p>
                                <p className=' text-dark/70 font-semibold '>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>


                            </div>

                            {/* 3rdcard     */}
                            <div data-aos="fade-up" data-aos-delay="350" className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                                <p className=' text-dark/70 font-semibold '>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>

                                <p className='text-5xl rotate-90'>....</p>
                                <FaBus className="text-5xl text-primary bg-center" />
                            </div>
                            {/* 4th card */}

                            <div data-aos="fade-down" data-aos-delay="380" className='text-center flex justify-center items-center flex-col gap-2 px-3'>
                                <FaBus className="text-5xl text-secondary" />
                                <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>....</p>
                                <p className=' text-dark/70 font-semibold '>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose
