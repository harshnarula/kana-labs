import React from "react"

export default function Section4(){
    return(
        <div className="flex justify-center items-center flex-col w-full h-auto mt-[20px]">
            <div className="flex flex-col justify-center items-center mt-[46px]">
                <h2 className="text-white mt-2 font-bold text-xl md:text-3xl">For Developers</h2>
                <button className="flex justify-center items-center px-2 py-4 w-[200px] h-[32px] md:w-[250px] text-sm md:text-xl md:h-[40px] bg-[#1D1E20] hover:text-[#39ffdd] hover:border-[#39ffdd] duration-300 rounded-[8px] text-[#2ED3B7] font-bold border-2 border-[#2ED3B7] mt-2">Explore Documentation</button>
            </div>
            <div className = "flex flex-col md:flex-row w-[326px] md:w-[1232px] h-auto md:h-[622px] mt-[93px]">
                <div className = "flex flex-col w-[326px] md:w-[608px] h-auto md:h-[622px] rounded-[24px] p-[8px] m-4 md:px-[112px] md:py-[32px] bg-[#111213]">
                    <div className = "flex flex-col w-[185px] md:w-[324px] h-auto md:h-[127px] m-4">
                        <div className = "flex w-[185px] h-auto m-2">
                            <h2 className = "w-[161px]  h-auto md:h-[43px] text-xl nd:text-3xl font-bold size-[36px] text-white leading-[42px]">Mirai SDK</h2>
                        </div>
                        <div className = "flex w-[250px] h-[26px] m-2">
                            <p className = "font-normal text-base md:text-xl text-white">integrate with other dApps</p>
                        </div>
                        <button className="flex justify-center items-center px-2 py-4 w-[200px] h-[40px] bg-[#1D1E20] hover:text-[#39ffdd] hover:border-[#39ffdd] duration-300 rounded-[8px] text-[#2ED3B7] font-bold border-2 border-[#2ED3B7] m-2">Read Documentation</button>
                    </div>
                    <div className = "flex flex-col items-center w-[296px] md:w-[384px] h-auto  md:h-[248px] rounded-[16px] border-2 m-4 border-[#17181A]">
                        <div className = "flex flex-row justify-center items-center w-[264px] md:w-[352px] h-[104px] md:h-[80px] rounded-[16px] border-2 border-[#17181A] m-2">
                            <div className = "flex  items-center w-[200px] md:w-[288px] h-[72px] md:h-[48px]">
                                <p className = "font-thin md:font-normal  text-[#D2D2D2]">npm install @kanalabs/paymaster-sdk</p>
                            </div>
                            <img src="../images/copy-04.png" alt="copy" className = "w-[16px] h-[16px]" />
                        </div> 
                        <div className ="w-[264px] md:w-[336px] h-[24px]">
                            <p className = "font-thin md:font-normal size-[16px] text-white">or</p>
                        </div>
                        <div className = "flex flex-row justify-center items-center w-[264px] md:w-[352px] h-[104px] md:h-[80px] rounded-[16px] border-2 border-[#17181A] m-2">
                            <div className = "flex  items-center w-[200px] md:w-[288px] h-[72px] md:h-[48px]">
                                <p className = "font-thin md:font-normal  text-[#D2D2D2]">yarn add @kanalabs/paymaster-sdk</p>
                            </div>
                            <img src="../images/copy-04.png" alt="copy" className = "w-[16px] h-[16px]" />
                        </div>
                    </div>
                </div>
                <div className = "flex flex-col w-[326px] md:w-[608px] h-auto md:h-[622px] rounded-[24px] p-[8px] m-4 md:px-[112px] md:py-[32px] bg-[#111213]">
                    <div className = "flex flex-col w-[185px] md:w-[324px] h-auto md:h-[127px] m-4">
                        <div className = "flex w-[185px] h-auto m-2">
                            <h2 className = "w-auto md:w-[200px]  h-auto md:h-[43px] text-xl nd:text-3xl font-bold size-[36px] text-white leading-[42px]">Cross-chain Swap</h2>
                        </div>
                        <div className = "flex w-[250px] h-[26px] m-2">
                            <p className = "font-normal text-base md:text-xl text-white">integrate with other dApps</p>
                        </div>
                        <button className="flex justify-center items-center px-2 py-4 w-[200px] h-[40px] bg-[#1D1E20] hover:text-[#39ffdd] hover:border-[#39ffdd] duration-300 rounded-[8px] text-[#2ED3B7] font-bold border-2 border-[#2ED3B7] m-2">Read Documentation</button>
                    </div>
                    <div className = "flex flex-col items-center w-[296px] md:w-[384px] h-auto  md:h-[248px] rounded-[16px] border-2 m-4 border-[#17181A]">
                        <div className = "flex flex-row justify-center items-center w-[264px] md:w-[352px] h-[104px] md:h-[80px] rounded-[16px] border-2 border-[#17181A] m-2">
                            <div className = "flex  items-center w-[200px] md:w-[288px] h-[72px] md:h-[48px]">
                                <p className = "font-thin md:font-normal  text-[#D2D2D2]">npm install @kanalabs/paymaster-sdk</p>
                            </div>
                            <img src="../images/copy-04.png" alt="copy" className = "w-[16px] h-[16px]" />
                        </div> 
                        <div className ="w-[264px] md:w-[336px] h-[24px]">
                            <p className = "font-thin md:font-normal size-[16px] text-white">or</p>
                        </div>
                        <div className = "flex flex-row justify-center items-center w-[264px] md:w-[352px] h-[104px] md:h-[80px] rounded-[16px] border-2 border-[#17181A] m-2">
                            <div className = "flex  items-center w-[200px] md:w-[288px] h-[72px] md:h-[48px]">
                                <p className = "font-thin md:font-normal  text-[#D2D2D2]">yarn add @kanalabs/paymaster-sdk</p>
                            </div>
                            <img src="../images/copy-04.png" alt="copy" className = "w-[16px] h-[16px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex justify-end w-screen h-[50px] pr-[70px] pt-[20px]">
                <button className="flex justify-center text-2xl items-center w-[50px] h-[50px] border-2 rounded-[10px] border-[#2ED3B7] text-white bg-[#1D1E20] hover:bg-[#202022]">^</button>
            </div>
                        
        </div>
    )
}