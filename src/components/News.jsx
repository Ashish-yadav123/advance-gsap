import React from "react";

const News = () => {
  return (
    <div>
      {" "}
      <div className="section_6 min-h-screen bg-[green] text-start text-white flex items-center justify-center py-16 lg:py-0">
        <div className="container px-5 xl:max-w-[1170px] 2xl:max-w-[1320px] py-12 sm:py-0">
          <h1 className="text-4xl text-center mb-4">NEWS ANIMATION PARENT</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between">
            <div className="sm:w-[25%] flex sm:flex-col items-center justify-center gap-4">
              <div className="bg-[yellow] w-[150px] lg:w-[200px] h-[150px] lg:h-[200px]"></div>
              <div className="bg-black w-[150px] lg:w-[200px] h-[150px] lg:h-[200px]"></div>
            </div>
            <div className="sm:w-full md:w-[40%] flex justify-center md:justify-start my-5 md:my-0 items-center flex-col">
              <div className="bg-white w-[320px] sm:w-[200px] md:w-[300px] h-[300px] sm:h-[400px] md:h-[500px]"></div>
            </div>
            <div className="sm:w-[25%] flex sm:flex-col items-center justify-center gap-4">
              <div className="bg-[yellow] w-[150px] lg:w-[200px] h-[150px] lg:h-[200px]"></div>
              <div className="bg-black w-[150px] lg:w-[200px] h-[150px] lg:h-[200px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
