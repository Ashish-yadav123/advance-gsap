import React from "react";

const Blog = () => {
  return (
    <div>
      {" "}
      <div className="section_4 min-h-screen bg-[green] text-start text-white flex items-center justify-center">
        <div className="container px-5 xl:max-w-[1170px] 2xl:max-w-[1320px] py-12 sm:py-0">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="w-full md:w-[48%]">
              <h1 className="text-4xl">BLOG ANIMATION PARENT</h1>
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
            <div className="w-full md:w-[40%] flex justify-center md:justify-start mt-5 md:mt-0">
              <div className="h-[250px] lg:h-[400px] w-[250px] lg:w-[400px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
