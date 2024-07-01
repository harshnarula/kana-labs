import React from "react";

export default function WalletBar() {
  return (
    <div className="flex flex-row w-auto h-[104px] p-[16px] mx-[16px] mb-[16px] rounded-x-[16px] rounded-b-[16px] bg-[#17181A]">
      <div className = "flex flex-row justify-around items-center w-[390px] m-2 rounded-[16px]  h-[56px] bg-[#242020]">
            <p className = "w-[100px] h-[24px] font-sm text-white">Your Balance</p>
            <div className = "flex justify-end items-center w-[244px] h-[20px] ">
                <p className = "font-sm text-[#4A4B4D]">Wallet not connected</p>
            </div>
      </div>
      <div className = "flex flex-row justify-start items-center w-[390px] my-2 rounded-[16px]  h-[56px] bg-[#242020]">
            <div className= "flex flex-row m-4">
                <img src="../images/search-md.png" alt="" className = "w-[24px] h-[24px] m-2" />
                <p className = "w-[49px] h-[20px] text-white my-2">Search</p>
            </div>
      </div>
      <div className = "flex flex-row justify-start items-center m-2 w-[390px]  rounded-[16px]  h-[56px] bg-[#242020]">
            <div className= "flex flex-row m-4">
                <img src="../images/user-circle.png" alt="" className = "w-[24px] h-[24px] m-2" />
                <p className = "w-[309px] h-[20px] text-[#2ED3B7] my-2">Connect wallet</p>
            </div>
      </div>
      <div className = "flex justify-center items-center w-[56px] h-[56px] m-2 bg-[#242020] rounded-[16px]">
        <img src="../images/settings-01.png" alt="" className = "w-[24px] h-[24px]" />
      </div>
    </div>
  );
}