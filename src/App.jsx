import React,{useState,useEffect} from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero/Hero';
import Banner from './component/Banner/Banner';
import WhyChoose from './component/WhyChoose';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Popup from './component/Popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css"

const App = () => {

  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() =>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);

  return (
    <>
      <div className="overflow-x-hidden" >
        <Navbar HandlePopup={HandlePopup}/>
        <Hero />
        <Banner />
        <WhyChoose />
        <About HandlePopup={HandlePopup} />
        <Banner />
        <Footer />
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </>
  )
}

export default App
