import "./App.css";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import { useLayoutEffect } from "react";
import boxGif from "../src/assets/images/gif/rotating-box.gif";
import About from "./components/About";
import Blog from "./components/Blog";
import Docs from "./components/Docs";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import News from "./components/News";
import Service from "./components/Service";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.set(".moving_div", {
      xPercent: 0,
      yPercent: 0,
      width: 300,
      height: 300,
    });
  }, []);
  useLayoutEffect(() => {
    const boxmove = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_1",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
    });

    boxmove.fromTo(
      ".moving_div",
      {
        x: 0,
        y: 0,
        width: 300,
        height: 300,
      },
      {
        y: "200%",
        x: -152,
        width: 250,
        height: 250,
        ease: "power1.out",
      }
    );
    const boxmove2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false,
      },
    });

    boxmove2.fromTo(
      ".moving_div",
      {
        yPercent: 184,
        xPercent: -152,
        width: 350,
        height: 350,
        ease: "power1.out",
      },
      {
        yPercent: 340,
        xPercent: -200,
        scale: 0.2,
      }
    );
  }, []);
  return (
    <>
      <div className="relative">
        <div className="bg-white w-[400px] h-[400px] flex items-center justify-center z-[111] absolute left-1/2 top-[2%]">
          <img className="moving_div w-full h-full" src={boxGif} alt="boxGif" />
        </div>
        <Hero />
        <About />
        <Service />
        <Blog />
        <Docs />
        <News />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default App;
