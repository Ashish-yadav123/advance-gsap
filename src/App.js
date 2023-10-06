import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const fullHeight = document.documentElement.scrollHeight;
  console.log(fullPageHeight, fullHeight, "height");

  const [leftValue, setLeftValue] = useState(0);
  const [rightValue, setRightValue] = useState(0);
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
  useEffect(() => {
    if (containerRef.current) {
      setRightValue(containerRef.current.getBoundingClientRect().right);
    }

    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setRightValue(containerRef.current.getBoundingClientRect().right);
      }
    });
  }, [rightValue]);

  console.log(topValue, "topValue");
  console.log(leftValue, "leftValue");

  useEffect(() => {
    gsap.set(".moving_img", {
      left: "60%",
      top: "50%",
      xPercent: -30,
      yPercent: -50,
      maxWidth: "300px",
    });
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
    tl.fromTo(
      ".moving_img",
      {
        left: "66vw",
        top: "50vh",
        yPercent: -50,
        width: "100%",
      },
      {
        left: "2%",
        top: `135vh`,
        width: "20px",
        yPercent: 0,
      }
    );
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_2",
        start: "40% top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
    tl2.fromTo(
      ".moving_img",
      {
        left: "2%",
        top: `150vh`,
        maxWidth: "300px",
        width: "20px",
      },
      {
        left: "50%",
        xPercent: -50,
        top: `200vh`,
        maxWidth: "100%",
        maxHeight: "100vh",
        width: "100%",
      }
    );
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_3",
        start: "30% top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
    tl3.fromTo(
      ".moving_img",
      {
        left: "50%",
        xPercent: -50,
        top: `200vh`,
        maxWidth: "100%",
        maxHeight: "100vh",
        yPercent: 0,
      },
      {
        left: "62vw",
        xPercent: 0,
        top: `350vh`,
        maxWidth: "300px",
        maxHeight: "100vh",
        yPercent: -50,
      }
    );
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_4",
        start: "30% top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
    tl4.fromTo(
      ".moving_img",
      {
        left: "62vw",
        xPercent: 0,
        top: `350vh`,
        maxWidth: "300px",
        maxHeight: "100vh",
        yPercent: -50,
      },
      {
        left: "9vw",
        xPercent: 0,
        top: `450vh`,
        maxWidth: "300px",
        maxHeight: "100vh",
        yPercent: -50,
      }
    );
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_5",
        start: "30% top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
    tl5.fromTo(
      ".moving_img",
      {
        left: "9vw",
        xPercent: 0,
        top: `450vh`,
        maxWidth: "300px",
        maxHeight: "100vh",
        yPercent: -50,
      },
      {
        left: "50vw",
        xPercent: -50,
        top: `550vh`,
        maxWidth: "300px",
        maxHeight: "100vh",
        yPercent: -50,
      }
    );
    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_6",
        start: "30% top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
    tl6.fromTo(
      ".moving_img",
      {
        left: "50vw",
        xPercent: -50,
        top: `550vh`,
        maxWidth: "300px",
        maxHeight: "100vh",
        yPercent: -50,
        width: "100%",
      },
      {
        left: "5vw",
        xPercent: -50,
        top: `640vh`,
        maxWidth: "300px",
        maxHeight: "100vh",
        yPercent: -50,
        width: "50px",
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
        <div className="section_3">
          <Service containerRef={containerRef} />
        </div>
        <div className="section_4">
          <Blog containerRef={containerRef} />
        </div>
        <div className="section_5">
          <Docs />
        </div>
        <div className="section_6">
          <News />
        </div>
        <div className="section_7">
          <Faqs />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
