import React from "react";

const About = () => {
  return (
    <div>
      <div className="section_2 h-screen bg-[green] text-start text-white flex items-center justify-center">
        <div className="container xl:max-w-[1170px] 2xl:max-w-[1320px]">
          <div className="flex items-center justify-between">
            <div className="w-[48%]">
              <h1 className="text-4xl">ABOUT ANIMATION PARENT</h1>
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
              <div className="h-[400px] w-[400px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
