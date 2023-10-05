import React from "react";

const News = () => {
  return (
    <div>
      {" "}
      <div className="section_6 h-screen bg-[green] text-start text-white flex items-center justify-center">
        <div className="container xl:max-w-[1170px] 2xl:max-w-[1320px]">
          <h1 className="text-4xl text-center mb-4">NEWS ANIMATION PARENT</h1>
          <div className="flex items-center justify-between">
            <div className="w-[25%] flex items-center justify-center flex-col gap-4">
              <div className="bg-[yellow] w-[200px] h-[200px]"></div>
              <div className="bg-black w-[200px] h-[200px]"></div>
            </div>
            <div className="w-[40%] flex items-center justify-center flex-col">
              <div className="bg-white w-[300px] h-[500px]"></div>
            </div>
            <div className="w-[25%] flex items-center justify-center flex-col gap-4">
              <div className="bg-[yellow] w-[200px] h-[200px]"></div>
              <div className="bg-black w-[200px] h-[200px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
