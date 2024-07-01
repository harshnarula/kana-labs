import React from "react";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col justify-between items-end p-[16px] w-[88px] h-auto bg-[#17181A]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-[56px] h-[64px] mb-[30px]">
          <img src="../images/Group 6.png" alt="logo" className="w-[25px] h-[32px]" />
        </div>
        <div className="flex justify-center items-center w-[56px] h-[56px] rounded-[16px] bg-[#242020] mb-2">
          <img src="../images/coins-swap-01.png" alt="coin-swap" className="w-[16px] h-[16px]" />
        </div>
        <div className="flex justify-center items-center w-[56px] h-[56px] rounded-[16px] mb-2">
          <img src="../images/coins-stacked-03.png" alt="coin-stacked" className="w-[16px] h-[16px]" />
        </div>
        <div className="flex justify-center items-center w-[56px] h-[56px] rounded-[16px] mb-2">
          <img src="../images/coins-hand.png" alt="coin-hand" className="w-[16px] h-[16px]" />
        </div>
        <div className="flex justify-center items-center w-[56px] h-[56px] rounded-[16px] mb-2">
          <img src="../images/scales-02.png" alt="scales-02" className="w-[16px] h-[16px]" />
        </div>
        <div className="flex justify-center items-center w-[56px] h-[56px] rounded-[16px] mb-2">
          <img src="../images/bar-chart-square-01.png" alt="bar-chart-square-01" className="w-[16px] h-[16px]" />
        </div>
        <div className="flex justify-center items-center w-[56px] h-[56px] rounded-[16px] mb-2">
          <img src="../images/grid-01.png" alt="grid-01" className="w-[16px] h-[16px]" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-[56px] h-[56px] rounded-[16px] bg-[#242020]">
          <img src="../images/Icon.png" alt="Icon" className="w-[16px] h-[16px]" />
        </div>
      </div>
    </div>
  );
}
