import React from "react";

export default function Main(){
    return(
        <div className = "w-screen h-auto flex flex-col justify-center items-center  relative">
            <div className = "w-auto h-auto absolute top-[0px] md:top-[-100px] ">
                <img src="../images/export as whole.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center mt-[30px] w-[291px] h-[129px] md:w-[571px] md:h-[206px] ">
                <div className="flex justify-center items-center h-[66px] md:h-[143px] w-full mb-[45px]">
                    <p className="text-2xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#67FFD1] to-[#4F9DFF]">
                        Connected and simplified web3
                    </p>
                </div>
                <div className="flex justify-center items-center w-[291px] md:w-auto h-[18px] mb-[45px]">
                    <p className="text-white text-base md:text-lg text-center">Where Chains and Experiences Unite</p>
                </div>
            </div>

            <div className = "flex flex-col md:flex-row justify-center items-center w-[292px] h-auto md:h-[56px]">
                <button className = "flex w-[312px] md:w-[140px] h-[56px] justify-center items-center bg-[#1D1E20] hover:bg-black hover:border-b-[10px] duration-300 rounded-[16px] text-[#2ED3B7] font-bold border-2 border-b-8 border-[#2ED3B7]">Launch App</button>
                <button className = "flex w-[312px] md:w-[140px] h-[56px] justify-center items-center  rounded-[16px] text-[#2ED3B7] font-bold hover:text-[#39ffdd] duration-300 ">Learn More</button>
            </div>
            <div className = "flex flex-col md:flex-row justify-center items-center w-[1008px] h-[160px] mt-[163px]">
                <div className= "flex flex-col w-[240px] h-[160px] rounded-[16px] bg-[#0c0d0e] mr-[16px]">
                <div className = "hidden md:flex justify-end w-auto h-auto relative">
                    <img src="../images/Icon (3).png"  className = "mt-[12px] hover:shadow-[#00FFFF] brightness-[0.2] scale-90" alt="" />
                </div>
                    <div className= "hidden md:flex justify-center items-center h-[100px] absolute">
                        <p className= "text-[#777879] text-xl w-[220px] h-[56px] font-normal ml-4">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className= "flex flex-row justify-center items-center h-[60px] rounded-[] md:rounded-x-[16px] mb-2 mx-2 md:rounded-b-[16px] bg-[#1D1E20]">
                        <p className= "w-[168px] h-[28px] text-white ">Trade</p>
                        <img className= "flex w-[16px] h-[16px]" src="../images/link-external-01.png" alt="" />
                    </div>
                </div>   
                <div className= "flex flex-col w-[240px] h-[160px] rounded-[16px] bg-[#0c0d0e] mr-[16px] hover:shadow-[0_10px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[#00FFFF]">
                    <div className = "hidden md:flex justify-end w-auto h-auto relative">
                        <img src="../images/Icon (4).png"  className = "mt-[12px] hover:shadow-[#00FFFF] brightness-[0.2]  scale-90" alt="" />
                    </div>
                    <div className= "hidden md:flex justify-center items-center h-[100px] absolute">
                        <p className= "text-[#777879] text-xl w-[220px] h-[56px] font-normal ml-4">Try the new cross-chain swap</p>
                    </div>
                    <div className= "flex flex-row justify-center items-center h-[60px] rounded-[] md:rounded-x-[16px] mb-2 mx-2 md:rounded-b-[16px] bg-[#1D1E20]">
                        <p className= "w-[168px] h-[28px] text-white ">Swap</p>
                        <img className= "flex w-[16px] h-[16px]" src="../images/link-external-01.png" alt="" />
                    </div>
                </div>
                <div className= "flex flex-col w-[240px] h-[160px] rounded-[16px] bg-[#0c0d0e] mr-[16px]">
                    <div className = "hidden md:flex justify-end w-auto h-auto relative">
                        <img src="../images/Icon (2).png"  className = "mt-[12px] hover:shadow-[#00FFFF] brightness-[0.2]  scale-90" alt="" />
                    </div>
                    <div className= "hidden md:flex justify-center items-center h-[100px] absolute">
                        <p className= "text-[#777879] text-xl w-[220px] h-[56px] font-normal ml-4">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className= "flex flex-row justify-center items-center h-[60px] rounded-[] md:rounded-x-[16px] mb-2 mx-2 md:rounded-b-[16px] bg-[#1D1E20]">
                        <p className= "w-[168px] h-[28px] text-white ">Perps</p>
                        <img className= "flex w-[16px] h-[16px]" src="../images/link-external-01.png" alt="" />
                    </div>
                </div>
                <div className= "flex flex-col w-[240px] h-[160px] rounded-[16px] bg-[#0c0d0e] mr-[16px]">
                    <div className = "hidden md:flex justify-end w-auto h-auto relative">
                        <img src="../images/Icon (2).png"  className = "mt-[12px] hover:shadow-[#00FFFF] brightness-[0.2]  scale-90" alt="" />
                    </div>
                    <div className= "hidden md:flex justify-center items-center h-[100px] absolute">
                        <p className= "text-[#777879] text-xl w-[220px] h-[56px] font-normal ml-4">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className= "flex flex-row justify-center items-center h-[60px] rounded-[] md:rounded-x-[16px] mb-2 mx-2 md:rounded-b-[16px] bg-[#1D1E20]">
                        <p className= "w-[168px] h-[28px] text-white ">OPerps</p>
                        <img className= "flex w-[16px] h-[16px]" src="../images/link-external-01.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}