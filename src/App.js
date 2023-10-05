import "./App.css";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import { useLayoutEffect } from "react";
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
      width: 400,
      height: 400,
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
        xPercent: 0,
        yPercent: 0,
        width: 400,
        height: 400,
      },
      {
        yPercent: 184,
        xPercent: -152,
        width: 350,
        height: 350,
        rotate: 180,
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

    const textmove = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_3",
        start: "-100% top",
        end: "bottom top",
        scrub: 1,
        yoyo: true,
        markers: false,
      },
    });

    textmove.fromTo(
      ".section_3_text",
      {
        xPercent: 0,
      },
      {
        xPercent: 30,
      }
    );
    textmove.to(".section_3_text", {
      xPercent: 0,
    });

    const boxmove3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_3",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false,
      },
    });

    boxmove3.fromTo(
      ".moving_div",

      {
        yPercent: 340,
        xPercent: -200,
      },
      {
        yPercent: 550,
        xPercent: -50,
        scale: 1,
        width: 350,
        height: 350,
      }
    );
  }, []);
  return (
    <>
      <div>
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
