import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import React, { useEffect, useRef, useState } from "react";
import boxGif from "../src/assets/images/gif/rotating-box.gif";
import "./App.css";
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
  const fullPageHeight = window.innerHeight;
  // const fullHeight = document.documentElement.scrollHeight;

  const [leftValue, setLeftValue] = useState(0);
  const [topValue, setTopValue] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setTopValue(containerRef.current.getBoundingClientRect().top);
    }

    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setTopValue(containerRef.current.getBoundingClientRect().top);
      }
    });
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setLeftValue(containerRef.current.getBoundingClientRect().left);
    }

    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setLeftValue(containerRef.current.getBoundingClientRect().left);
      }
    });
  }, [leftValue]);

  console.log(topValue);
  console.log(leftValue, "dfghjk");

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
        top: `${fullPageHeight - topValue + 250}px`,
        width: "100px",
      }
    );
    const section3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_2",
        start: "center center",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
    section3
      .fromTo(
        ".moving_img",
        {
          left: `${leftValue}px`,
          top: `${fullPageHeight + 250}px`,
          width: "100px",
        },
        {
          left: `50%`,
          xPercent: -50,
          y: "50vh",
          top: `${fullPageHeight + 382}px`,
          width: "100%",
        }
      )
      .fromTo(
        ".moving_img",
        {
          maxWidth: "300px",
          maxHeight: "100vh",
        },
        {
          maxWidth: "100%",
          maxHeight: "100vh",
        }
      );
  }, []);
  return (
    <>
      <div>
        <img
          className="moving_img absolute z-[1] max-w-[300px] object-cover"
          ref={imageRef}
          src={boxGif}
          alt="boxGif"
        />
        <Hero />
        <div className="section_2">
          <About containerRef={containerRef} />
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
