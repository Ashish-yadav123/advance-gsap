import React, { useEffect, useRef, useState } from "react";
import boxGif from "../assets/rotating-box.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MovingBox = () => {
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
        left: "70%",
        top: "20%",
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
        <img className="moving_img" ref={imageRef} src={boxGif} alt="boxGif" />
        <div className="py-5"></div>
        <div className="section_1 position-relative vh-100 bg-warning text-start text-white d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-6">
                <h1>FIRST DIV ANIMATION PARENT</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  voluptates temporibus assumenda autem mollitia rerum laborum
                  magnam nemo perspiciatis maiores delectus est maxime vitae
                  perferendis veritatis doloribus nam, iusto veniam. Temporibus
                  nam perspiciatis omnis, maiores sequi ad assumenda deserunt
                  quisquam vitae ipsa eligendi, numquam, iste voluptatum vel
                  neque quos perferendis.
                </p>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <div className="moving_div d-flex align-items-center justify-content-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_2 vh-100 bg-success text-start text-white d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-6">
                <h1 ref={containerRef} id="heading_2">
                  SECOND DIV ANIMATION PARENT
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  voluptates temporibus assumenda autem mollitia rerum laborum
                  magnam nemo perspiciatis maiores delectus est maxime vitae
                  perferendis veritatis doloribus nam, iusto veniam. Temporibus
                  nam perspiciatis omnis, maiores sequi ad assumenda deserunt
                  quisquam vitae ipsa eligendi, numquam, iste voluptatum vel
                  neque quos perferendis.
                </p>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <div className="white_big_div"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_3 vh-100 bg-white text-start text-black d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-6">
                <h1>THIRD DIV ANIMATION PARENT</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  voluptates temporibus assumenda autem mollitia rerum laborum
                  magnam nemo perspiciatis maiores delectus est maxime vitae
                  perferendis veritatis doloribus nam, iusto veniam. Temporibus
                  nam perspiciatis omnis, maiores sequi ad assumenda deserunt
                  quisquam vitae ipsa eligendi, numquam, iste voluptatum vel
                  neque quos perferendis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_4 vh-100 bg-success text-start text-white d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-6">
                <div className="white_big_div"></div>
              </div>
              <div className="col-6">
                <h1>SECOND DIV ANIMATION PARENT</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  voluptates temporibus assumenda autem mollitia rerum laborum
                  magnam nemo perspiciatis maiores delectus est maxime vitae
                  perferendis veritatis doloribus nam, iusto veniam. Temporibus
                  nam perspiciatis omnis, maiores sequi ad assumenda deserunt
                  quisquam vitae ipsa eligendi, numquam, iste voluptatum vel
                  neque quos perferendis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_5 vh-100 bg-danger text-start text-white d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-6">
                <div className="white_big_div"></div>
              </div>
              <div className="col-6">
                <h1>SECOND DIV ANIMATION PARENT</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  voluptates temporibus assumenda autem mollitia rerum laborum
                  magnam nemo perspiciatis maiores delectus est maxime vitae
                  perferendis veritatis doloribus nam, iusto veniam. Temporibus
                  nam perspiciatis omnis, maiores sequi ad assumenda deserunt
                  quisquam vitae ipsa eligendi, numquam, iste voluptatum vel
                  neque quos perferendis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_6 vh-100 bg-success text-start text-white d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-3 d-flex align-items-center justify-content-center flex-column gap-4">
                <div className="section_6_green_box"></div>
                <div className="section_6_black_box"></div>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center flex-column">
                <div className="section_6_center_box"></div>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center flex-column gap-4">
                <div className="section_6_green_box"></div>
                <div className="section_6_black_box"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_7 vh-100 bg-danger text-start text-white d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-6">
                <h1>THIRD DIV ANIMATION PARENT</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  voluptates temporibus assumenda autem mollitia rerum laborum
                  magnam nemo perspiciatis maiores delectus est maxime vitae
                  perferendis veritatis doloribus nam, iusto veniam. Temporibus
                  nam perspiciatis omnis, maiores sequi ad assumenda deserunt
                  quisquam vitae ipsa eligendi, numquam, iste voluptatum vel
                  neque quos perferendis.
                </p>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <div className="white_big_div"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer vh-100 bg-black text-start text-white d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <h3>LOGO</h3>
              <p>HOME </p>
              <p>ABOUT </p>
              <p>SERVICE </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovingBox;
