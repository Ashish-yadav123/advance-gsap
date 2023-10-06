import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="section_1 relative min-h-screen bg-[red] text-start text-white flex items-center justify-center">
        <div className="container px-5 xl:max-w-[1170px] 2xl:max-w-[1320px] py-12 sm:py-0">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="w-full md:w-[48%]">
              <h1 className="text-4xl">HERO ANIMATION PARENT</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                voluptates temporibus assumenda autem mollitia rerum laborum
                magnam nemo perspiciatis maiores delectus est maxime vitae
                perferendis veritatis doloribus nam, iusto veniam. Temporibus
                nam perspiciatis omnis, maiores sequi ad assumenda deserunt
                quisquam vitae ipsa eligendi, numquam, iste voluptatum vel neque
                quos perferendis.
              </p>
            </div>
            <div className="w-full md:w-[48%] mt-6 md:mt-0 flex items-center justify-center">
              <div className="bg-white w-[250px] sm:w-[250px] lg:w-[400px] h-[250px] sm:h-[250px] lg:h-[400px] flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
