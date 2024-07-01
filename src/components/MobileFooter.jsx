import React from "react"

export default function MobileFooter(){
    return(
        <div className = "md:hidden flex flex-row justify-center items-center w-screen bg-[#1D1E20] h-[64px]">
            <div className = "flex ">
                <div className = "flex flex-col justify-center items-center w-[120px] h-[64px] border-t-2 border-[#2ED3B7] m-2">
                    <img src="../images/coins-swap-03.png" alt="" className = "w-[24px] h-[24px]" />
                    <p className = "w-[auto] h-[10px] text-sm text-[#2ED3B7] scale-75" >Home</p>
                </div>
                <div className = "flex flex-col justify-center items-center w-[120px] h-[64px]  m-2">
                    <img src="../images/piggy-bank-02.png" alt="" className = "w-[24px] h-[24px]" />
                    <p className = "w-[auto] h-[10px] text-sm text-[#A5A5A6] scale-75" >Balance</p>
                </div>
                <div className = "flex flex-col justify-center items-center w-[120px] h-[64px]  m-2">
                    <img src="../images/Icon (7).png" alt="" className = "w-[24px] h-[24px]" />
                    <p className = "w-[auto] h-[10px] text-sm text-[#A5A5A6] scale-75" >Profile</p>
                </div>
            </div>
        </div>
    )
}