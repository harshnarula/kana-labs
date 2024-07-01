import React from "react";

export default function Section3() {
    return (
        <div className="flex justify-center items-center flex-col w-full h-auto mt-[20px]">
            <div className="flex flex-col justify-center items-center mt-[46px]">
                <p className="text-[#7D8595] ">EthosX</p>
                <p className="text-white font-bold text-xl md:text-3xl">OPerps - Derivatives Token</p>
                <button className="flex justify-center items-center w-[121px] text-sm md:text-lg md:w-[150px] h-[32px] md:h-[40px] bg-[#1D1E20]  rounded-[8px] text-[#2ED3B7] font-bold border-2 border-[#2ED3B7] hover:text-[#39ffdd] hover:border-[#39ffdd] duration-300 mt-2">See whats new</button>
            </div>
            <div className="hidden md:flex justify-center items-center w-full h-[480px] mt-[93px]">
                <div className="flex flex-row w-[1232px]  justify-center items-center py-[32px] px-[112px] h-[480px] bg-[#1D1E20] rounded-[24px]">
                    <div className="flex flex-col justify-center w-[476px] h-[148px] mr-[56px]">
                        <p className="text-white text-4xl">A derivatives token for trading and hedging.</p>
                        <button className="flex justify-center items-center text-[#2ED3B7] border-2 border-b-8 w-[133px] h-[56px] duration-300 rounded-[16px] border-[#2ED3B7] bg-[#1D1E20] hover:bg-black mt-2">Try Perps</button>
                    </div> 
                    <div className="flex flex-grow justify-center items-center">
                        <img src="../images/Group 1261152704(1).png" alt="" className="w-[476px] h-[416px] object-contain"/>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex justify-center items-center w-full h-[480px] mt-[93px]">
                <div className="flex flex-col w-[296px] justify-center items-center p-[8px] h-auto bg-[#1D1E20] rounded-[24px]">
                    <div className="flex flex-grow justify-center items-center">
                        <img src="../images/Group 1261152704(1).png" alt="" className="w-[296ox] h-auto object-contain m-4"/>
                    </div>
                    <div className="flex flex-col justify-center w-[264px] h-auto pb-4">
                        <p className="text-white text-xl">A derivatives token for trading and hedging.</p>
                        <button className="flex justify-center items-center text-[#2ED3B7] border-2 border-b-8 w-[133px] h-[56px] rounded-[16px] border-[#2ED3B7] bg-[#1D1E20] hover:bg-black mt-2">Try Perps</button>
                    </div> 
                    
                </div>
            </div>
            
        </div>
    );
}
