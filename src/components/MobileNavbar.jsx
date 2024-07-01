import React from "react";

export default function MobileNavbar(){
    return(
        <div className = "md:hidden flex flex-row justify-between items-center w-screen bg-[#1D1E20] h-[64px]">
            <div className = "flex justify-center items-center">
                <img src="../images/Group 6.png" alt="" className = "w-[19px] h-[24px] m-2" />
                <p className = "w-auto h-[20px] text-white text-sm m-2">Swap</p>
            </div>
            <div className = "flex justify-center items-center">
                <img src="../images/settings-01.png" alt="" className = "w-[24px] h-[24px] m-2" />
                <img src="../images/Frame 1261153252.png" alt="" className = "w-[24px] h-[24px] my-2 mr-2" />
            </div>
        </div>
    )
}