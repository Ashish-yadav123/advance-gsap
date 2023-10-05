import React from "react";
import boxGif from "../assets/images/gif/rotating-box.gif";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="section_1 relative h-screen bg-[red] text-start text-white flex items-center justify-center">
        <div className="container xl:max-w-[1170px] 2xl:max-w-[1320px]">
          <div className="flex items-center justify-between">
            <div className="w-[48%]">
              <h1>FIRST DIV ANIMATION PARENT</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                voluptates temporibus assumenda autem mollitia rerum laborum
                magnam nemo perspiciatis maiores delectus est maxime vitae
                perferendis veritatis doloribus nam, iusto veniam. Temporibus
                nam perspiciatis omnis, maiores sequi ad assumenda deserunt
                quisquam vitae ipsa eligendi, numquam, iste voluptatum vel neque
                quos perferendis.
              </p>
            </div>{" "}
            <div className="w-[48%] flex justify-end">
              <div className="moving_div flex items-center justify-center">
                <img src={boxGif} alt="boxGif" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
