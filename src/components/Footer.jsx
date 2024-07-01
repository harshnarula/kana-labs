import React from "react"

export default function Footer(){
    return(
        <>
        <div className = "hidden md:flex w-screen h-[400px]">
            <div className = "mt-[70px] ml-[48px]">
                <div className = "flex flex-row justify-center items-center  w-[172px] h-[36px]">
                    <div className = "flex ">
                        <img src="../images/Group 6.png" alt="logo" />
                    </div>
                    <div className = "flex flex-row ml-4 w-[142px] h-[22px]">
                        <p className = "font-bold text-white text-xl">Kana</p>
                        <p className = "font-normal text-white text-xl">labs</p>
                    </div>
                </div>
                <p className= "w-[200px] mt-[20px] h-[16px] text-[#A5A5A6] text-sm">© Copyright 2023 Kana Labs</p>
            </div>
            <div className = "flex flex-col mt-[70px] ml-[482px]" >
                <div className = "flex flex-row ">
                    <div className = "flex flex-col w-[190px] h-[136px]">
                        <p className= "h-[19px] text-[#A5A5A6] text-sm mb-[30px]">Company</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">Who we are</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">FAQs</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">Blog</p>
                    </div>
                    <div className = "flex flex-col w-[190px] h-[136px] ml-[28px]">
                        <p className= "h-[19px] text-[#A5A5A6] text-sm mb-[30px]">Links</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">Documentation</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">SDK Docs</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">Launch App</p>
                    </div>
                </div>
                <div className = "w-[300px] h-[16px] mt-[141px]">
                    <p className = "text-[#A5A5A6] font-thin">Terms & Conditions | Privacy Policy | Security</p>
                </div>
            </div>
            <div className = "flex flex-col w-[168px] h-[55px] mt-[70px] ml-[30px]">
                <p className = "h-[19px] text-[#A5A5A6] text-sm mb-[30px]">FOLLOW US</p>
                <div className = "flex flex-row mt-[12px] h-[24px]">
                    <img src="../images/telegram.png" alt="telegram" className = "w-[24px] h-[24px]" />
                    <img src="../images/twitter.png" alt="twitter" className = "w-[24px] h-[24px] ml-[24px]" />
                    <img src="../images/medium.png" alt="medium" className = "w-[24px] h-[24px] ml-[24px]" />
                    <img src="../images/discord.png" alt="discord" className = "w-[24px] h-[24px] ml-[24px]" />
                </div>
                <div className = "flex  mt-[24px]">
                    <button className = "w-[168px] h-[39px] text-white border-2 rounded-[4px] border-gradient-to-r from-[#4F9DFF] to-[#67FFD1]" >Contact us</button>
                </div>
                <div className = "flex flex-row justify-center items-center mt-[137px] w-[126px] h-[16px]">
                    <img src="../images/Envelope.png" alt="" className = "w-[16px] h-[16px]" />
                    <p className = "w-[100px] ml-[10px] text-[#A5A5A6] font-sm">hello@kanalabs.io</p>
                </div>
            </div>
            
        </div>
        <div className = "md:hidden flex flex-col justify-center items-center w-auto h-auto">
        <div className = "flex flex-row ">
                    <div className = "flex flex-col w-[133px] h-[136px]">
                        <p className= "h-[19px] text-[#A5A5A6] text-sm mb-[30px]">Company</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">Who we are</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">FAQs</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">Blog</p>
                    </div>
                    <div className = "flex flex-col w-[133px] h-[136px] ml-[28px]">
                        <p className= "h-[19px] text-[#A5A5A6] text-sm mb-[30px]">Links</p>
                        <p className = "flex  items-center h-[27px] text-sm text-white">Documentation</p>
                        <div className = "flex flex-row">
                            <div className = "flex flex-col">
                                <p className = "flex  items-center h-[27px] text-sm text-white">SDK Docs</p>
                                <p className = "flex  items-center h-[27px] text-sm text-white">Launch App</p>
                            </div>
                            <div className="md:hidden flex justify-center w-[50px] h-[50px] ml-2">
                                <button className="flex justify-center text-2xl items-center w-[50px] h-[50px] border-2 rounded-[10px] hover:bg-[#2e3034] hover:text-[#2ED3B7] duration-300  border-[#2ED3B7] text-red-700 bg-[#1D1E20] ">^</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className = "flex flex-col w-[168px] h-[55px] mt-[70px] mr-[130px]">
                <p className = "h-[19px] text-[#A5A5A6] text-sm mb-[30px]">FOLLOW US</p>
                <div className = "flex flex-row mt-[12px] h-[24px]">
                    <img src="../images/telegram.png" alt="telegram" className = "w-[24px] h-[24px]" />
                    <img src="../images/twitter.png" alt="twitter" className = "w-[24px] h-[24px] ml-[24px]" />
                    <img src="../images/medium.png" alt="medium" className = "w-[24px] h-[24px] ml-[24px]" />
                    <img src="../images/discord.png" alt="discord" className = "w-[24px] h-[24px] ml-[24px]" />
                </div>
                <div className = "flex flex-row">
                    <div className = "flex  mt-[24px]">
                        <button className = "w-[168px] h-[39px] text-white border-2 rounded-[4px] border-gradient-to-r from-[#4F9DFF] to-[#67FFD1]" >Contact us</button>
                    </div>
                    <div className = "flex flex-row justify-center items-center mt-[35px] ml-4 w-[126px] h-[16px]">
                        <img src="../images/Envelope.png" alt="" className = "w-[16px] h-[16px]" />
                        <p className = "w-[100px] ml-2 text-[#A5A5A6] font-sm">hello@kanalabs.io</p>
                    </div>
                </div>
            </div>
            <div className = "flex flex-col mt-[35px] ml-[20px] " >
                <div className = "w-[300px] h-[16px] mt-[141px]">
                    <p className = "text-[#A5A5A6] font-thin">Terms & Conditions | Privacy Policy | Security</p>
                </div>
            </div>
            <div className = "mt-[50px] ml-[38px]">
                <div className = "flex flex-row justify-center items-center  w-[172px] h-[36px]">
                    <div className = "flex ">
                        <img src="../images/Group 6.png" alt="logo" className = "w-[30px] h-[39px]"/>
                    </div>
                    <div className = "flex flex-row ml-4 w-[142px] h-[22px]">
                        <p className = "font-bold text-white text-3xl">Kana</p>
                        <p className = "font-normal text-white text-3xl">labs</p>
                    </div>
                </div>
                <p className= "w-[200px] mt-[20px] h-[16px] text-[#A5A5A6] text-sm">© Copyright 2023 Kana Labs</p>
            </div>
            
            
            
        </div>
        </>
    )
}