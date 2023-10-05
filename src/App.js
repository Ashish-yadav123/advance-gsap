import React, { useEffect, useRef, useState } from "react";
import "./App.css";
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

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [leftValue, setLeftValue] = useState(0);
  const [topValue, setTopValue] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      setLeftValue(containerRef.current.getBoundingClientRect().left);
      setTopValue(containerRef.current.getBoundingClientRect().top);
    }
    if (imageRef.current) {
      setImageHeight(imageRef.current.getBoundingClientRect().height);
    }
    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setLeftValue(containerRef.current.getBoundingClientRect().left);
        setTopValue(containerRef.current.getBoundingClientRect().top);
      }
      if (imageRef.current) {
        setImageHeight(imageRef.current.getBoundingClientRect().height);
      }
    });
  }, [leftValue, topValue, imageHeight]);
  console.log(leftValue);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
    tl.fromTo(
      ".moving_img",
      {
        left: "54%",
        top: "35%",
        width: "100%",
      },
      {
        left: `${leftValue}px`,
        top: `${topValue}px`,
        width: "20px",
      }
    );
  }, []);
  return (
    <>
      <div>
        <img
          className="moving_img absolute z-[1] max-w-[300px]"
          ref={imageRef}
          src={boxGif}
          alt="boxGif"
        />
        <Hero />
        <div className="section_2">
          <About />
        </div>
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
