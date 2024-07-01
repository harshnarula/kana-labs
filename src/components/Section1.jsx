import React from "react";

export default function Section1(){
    return(
        <div className="flex justify-center items-center flex-col w-full h-auto mt-[60px]">
            <div className="flex flex-col justify-center items-center mt-[46px]">
                <p className="text-white mt-2 font-bold text-xl md:text-3xl">Cross-chain swap</p>
                <button className="flex justify-center items-center text-sm md:text-xl w-[83px] h-[32px] md:w-[150px] md:h-[40px] bg-[#1D1E20] hover:text-[#39ffdd] hover:border-[#39ffdd] duration-300 rounded-[8px] text-[#2ED3B7] font-bold border-2 border-[#2ED3B7] mt-2">Try swap</button>
            </div>
            <div className="hidden md:flex justify-center items-center w-full h-[720px] mt-[93px]">
                <div className="flex flex-row w-[1232px]  justify-center items-center py-[32px] px-[112px] h-[720px] bg-[#1D1E20] rounded-[24px]">
                    <div className="flex flex-col justify-center w-[476px] h-auto mr-[56px]">
                        <p className="text-white text-4xl"><span className = "text-[#A5A5A6]">Swap tokens natively using across</span> Solana, Aptos, Ethereum, zksync, Arbitrum, Sui, Optimism, Polygon and more!</p>
                        <button className="flex box-border justify-center items-center text-[#2ED3B7] duration-300 border-2 border-b-8 w-[133px] h-[56px] rounded-[16px] border-[#2ED3B7] bg-[#1D1E20] hover:bg-black hover:border-b-[10px] mt-4">Swap now</button>
                    </div> 
                    <div className="flex flex-grow justify-center items-center">
                        <img src="../images/image 111.png" alt="" className="w-[476px] h-[416px] object-contain"/>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden justify-center items-center w-[296px] h-auto mt-[93px]">
                <div className="flex flex-col  w-[296px] h-auto  justify-center items-center p-[8px] bg-[#1D1E20] rounded-[24px]">
                    <div className="flex flex-grow h-auto justify-center items-center my-4">
                        <img src="../images/image 111.png" alt="" className="w-[275px] h-[305px] object-contain"/>
                    </div>
                    <div className="flex flex-col justify-center w-[264px] h-auto mt-4">
                        <p className="text-white text-lg"><span className = "text-[#A5A5A6] mt-4">Swap tokens natively using across</span> Solana, Aptos, Ethereum, zksync, Arbitrum, Sui, Optimism, Polygon and more!</p>
                        <button className="flex justify-center items-center text-[#2ED3B7] border-2 border-b-8 w-[264px] h-[56px] rounded-[16px] border-[#2ED3B7] bg-[#1D1E20] hover:bg-black my-4">Swap now</button>
                    </div> 
                    
                </div>
            </div>
        </div>
    )
}