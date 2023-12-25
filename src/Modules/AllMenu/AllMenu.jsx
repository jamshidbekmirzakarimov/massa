import React from "react";
import "./AllMenu.scss";
const AllMenu = () => {
  return (
    <>
      <section className="pt-[80px] ">
        <div className="container">
          <div className="flex items-center gap-[16px] mb-[16px]">
            <h2 className="whitespace-nowrap text-[12px] text-[#999] font-medium uppercase">
              all menu
            </h2>
            <div className="w-full h-[2px]  bg-[#333] rounded-[4px]"></div>
          </div>
          <div class="grid-container">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
            <div class="card">Card 4</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllMenu;
