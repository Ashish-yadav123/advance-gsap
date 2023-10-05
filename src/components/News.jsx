import React from "react";

const News = () => {
  return (
    <div>
      {" "}
      <div className="section_6 h-screen bg-[green] text-start text-white flex items-center justify-center">
        <div className="container xl:max-w-[1170px] 2xl:max-w-[1320px]">
          <div className="flex items-center justify-between">
            <div className="w-[25%] flex items-center justify-center flex-col gap-4">
              <div className="section_6_yellow_box"></div>
              <div className="section_6_black_box"></div>
            </div>
            <div className="w-[40%] flex items-center justify-center flex-col">
              <div className="section_6_center_box"></div>
            </div>
            <div className="w-[25%] flex items-center justify-center flex-col gap-4">
              <div className="section_6_yellow_box"></div>
              <div className="section_6_black_box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
