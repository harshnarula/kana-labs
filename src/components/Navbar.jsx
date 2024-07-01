import React from "react"

export default function Navbar(){
    return(
        <div className = "flex justify-center items-center ">
            <div className = "flex justify-around items-center w-screen h-[66px] md:h-[96px]">
                <div className = "flex flex-row justify-center items-center  w-[172px] h-[36px]">
                    <div className = "flex ">
                        <img src="../images/Group 6.png" alt="logo" />
                    </div>
                    <div className = "flex flex-row ml-4 w-[128px] h-[20px]">
                        <p className = "font-bold text-white text-xl">Kana</p>
                        <p className = "font-normal text-white text-xl">labs</p>
                    </div>
                </div>
                <div className = "flex w-[388px] h-[22px]">
                </div>
                <div className = "flex justify-center items-center w-[24px] h-[24px]">
                    <img src="../images/menu.png" alt="menu" />
                </div>
            </div>
        </div>
    )    
}