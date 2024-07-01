import React from "react";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { RiShareBoxFill } from "react-icons/ri";


export default function SwapPanel(){

    const [clicked01, setClicked01] = useState(false);
    const [clicked02, setClicked02] = useState(false);
    const [additionalMenu, setAdditionalMenu] = useState(false)
    

    return(
        <>
        <div className = "hidden md:flex flex-col justify-center items-center rounded-[16px] w-[1240px] h-[651px] p-[16px] m-[16px]">
            <div className = "flex flex-col w-[536px] h-[651px] ">
                <div className = "flex flex-row justify-between w-[536px] h-[56px] bg-[#0A0A0A]">
                    <div className = "flex">
                        <div className = "flex flex-row h-[56px] ">
                            <div className = "flex justify-center items-center w-[152px] rounded-x-[16px] rounded-t-[16px] border-x-2 border-t-2 bg-[#17181A] border-[#FFFFFF1A]">
                                <img src="../images/tabler_arrows-split-2.png" alt="" className = "w-[24px] h-[24px] m-2" />
                                <p className = "w-[90px] h-[18px] mb-[6px] align-middle text-white font-sm">Same-chain</p>
                            </div>
                        </div>
                        <div className = "flex flex-row h-[56px]">
                            <div className = "flex justify-center items-center w-[152px] rounded-x-[16px] rounded-t-[16px] border-r-2 border-t-2 bg-[#111213] border-[#FFFFFF1A]">
                                <img src="../images/tabler_arrows-shuffle.png" alt="" className = "w-[24px] h-[24px] m-2" />
                                <p className = "w-[90px] h-[18px] mb-[6px] align-middle text-white font-sm">Cross-chain</p>
                            </div>
                        </div>
                    </div>
                    <div className = "flex justify-center items-center w-[48px] h-[48px] my-2 p-2">
                        <img src="../images/grid-01 (1).png" alt="" className = "w-[16px] h-[16px] m-2 " />
                    </div>
                </div>
                <div className = "flex flex-col justify-center items-center w-[536px] h-[512px] rounded-r-[16px] rounded-b-[16px] border-2 bg-[#17181A] border-[#FFFFFF1A]">
                    <div className = "flex flex-row w-[488px] h-[32px] justify-center items-center m-4">
                        <div className = "flex w-[408px] h-[20px]  mr-2 mb-[6px]">
                            <p className = "font-sm text-white">Same-chain Swap</p>
                        </div>
                        <div className = "flex justify-center items-center w-[32px] h-[32px] rounded-[8px]">
                            <img src="../images/refresh-ccw-05.png" alt="" className = "w-[16px] h-[16px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[32px] h-[32px] rounded-[8px]">
                            <img src="../images/Icon (1).png" alt="" className = "w-[16px] h-[16px]"/>
                        </div>
                    </div>
                    <div className = "flex flex-row w-[488px] h-[40px]justify-center items-center mb-4 ">
                        <div className = "flex justify-center items-center w-[40px] h-[40px] bg-[#17181A] rounded-[8px] border-2 border-[#FFFFFF1A]">
                            <img src="../images/aptos.png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/zksync.png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/bsc_2.png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/polygon1.png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/arbitrum (1).png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/avalanche (1).png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/ethereum.png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/solana.png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/sui-sui-logo (1).png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>


                    </div>
                    <div className = "flex flex-col justify-center items-center relative">
                    <div className = "flex flex-col w-[488px] h-[136px] justify-center items-center m-4 bg-[#111213] rounded-[16px] border-2 border-[#FFFFFF1A]">
                            <div className = "flex flex-row w-[440px] h-[74px] m-4">
                                <div className = "flex flex-col ">
                                    <div className = "flex flex-row justify-start items-center w-[264px] h-[18px]">
                                        <p className = "w-[70px] h-[18px] font-sm text-[#A5A5A6]">Pay from</p>
                                        <p className = "w-[120px] h-[18px] font-bold text-[#2ED3B7]">Connect Wallet</p>
                                    </div>
                                    
                                        {
                                            clicked01 ?
                                            <div className = "flex justify-between flex-row items-center w-[264px] h-[74px] border-b-2 border-[#FFFFFF1A]">
                                                <p className = "w-[43px] text-2xl font-bold h-[30px] text-white">123.00</p>
                                                <MdOutlineCancel className="w-[16px] h-[16px] mt-2 text-[#A5A5A6]" onClick={() => setClicked01(false)} />
                                            </div>
                                            :
                                            <div className = "flex justify-start items-center w-[264px] h-[74px] border-b-2 border-[#FFFFFF1A]" onClick={() => setClicked01(true)}>
                                                <p className = "w-[43px] text-2xl h-[30px] text-[#A5A5A6]">0.00</p>
                                            </div>
                                            
                                        }
                                        
                                        
                                        
                                    
                                </div>
                                <div className = "flex flex-row justify-start items-center w-[164px] h-[74px] rounded-[16px] bg-[#17181A] border-[#FFFFFF1A] border-2 ml-4 p-4">
                                    <img src="../images/Group 1261152694.png" alt="" className = "w-[40px] h-[40px]" />
                                    <div className = "flex flex-col justify-start ml-2">
                                        <p className = "w-[70px] h-auto text-white text-base">Token</p>
                                        <p className = "w-[60px] h-[14px] text-white text-sm scale-75">on Chain</p>
                                    </div>
                                </div>
                            </div>
                            <div className = "flex flex-row justify-between items-center w-[440px] h-[22px] mx-4 mb-4">
                                <p className = "w-[50px] h-[18px] text-[#A5A5A6] text-sm">USD 0</p>
                                <p className = "w-[60px] h-[18px] text-[#A5A5A6] text-sm">Balance -</p>
                            </div>
                    </div>
                    <div className = "flex justify-center  absolute z-10 items-center w-[40px] h-[40px]  rounded-[8px] border-2 bg-[#17181A] border-[#FFFFFF1A]">
                        <img src="../images/switch-vertical-02.png" alt="" className = "w-[24px] h-[24px]" />
                    </div>
                    
                    <div className = "flex flex-col w-[488px] h-[136px] justify-center items-center mx-4 mb-4 bg-[#111213] rounded-[16px] border-2 border-[#FFFFFF1A]">
                            <div className = "flex flex-row w-[440px] h-[74px] m-4">
                                <div className = "flex flex-col ">
                                    <div className = "flex flex-row justify-start items-center w-[264px] h-[18px]">
                                        <p className = "w-[77px] h-[18px] font-sm text-[#A5A5A6]">Receive to</p>
                                        <p className = "w-[120px] h-[18px] font-bold text-[#2ED3B7]">Connect Wallet</p>
                                    </div>
                                    {
                                            clicked02 ?
                                            <div className = "flex justify-between flex-row items-center w-[264px] h-[74px] border-b-2 border-[#FFFFFF1A]">
                                                <p className = "w-[43px] text-2xl font-bold h-[30px] text-white">123.00</p>
                                                <MdOutlineCancel className="w-[16px] h-[16px] mt-2 text-[#A5A5A6]" onClick={() => setClicked02(false)} />
                                            </div>
                                            :
                                            <div className = "flex justify-start items-center w-[264px] h-[74px] border-b-2 border-[#FFFFFF1A]" onClick={() => setClicked02(true)}>
                                                <p className = "w-[43px] text-2xl h-[30px] text-[#A5A5A6]">0.00</p>
                                            </div>
                                            
                                        }
                                </div>
                                <div className = "flex flex-row justify-start items-center w-[164px] h-[74px] rounded-[16px] bg-[#17181A] border-[#FFFFFF1A] border-2 ml-4 p-4">
                                    <img src="../images/Group 1261152694.png" alt="" className = "w-[40px] h-[40px]" />
                                    <div className = "flex flex-col justify-start ml-2">
                                        <p className = "w-[70px] h-auto text-white text-base">Token</p>
                                        <p className = "w-[60px] h-[14px] text-white text-sm scale-75">on Chain</p>
                                    </div>
                                </div>
                            </div>
                            <div className = "flex flex-row justify-between items-center w-[440px] h-[22px] mx-4 mb-4">
                                <p className = "w-[50px] h-[18px] text-[#A5A5A6] text-sm">USD 0</p>
                                <p className = "w-[60px] h-[18px] text-[#A5A5A6] text-sm">Balance -</p>
                            </div>
                    </div>
                    </div>
                    <button className = "flex w-[488px] h-[56px] justify-center items-center mx-4 mb-4 rounded-[16px] border-t-2 border-x-2 border-b-8 text-[#0E9384] border-[#0E9384]">
                        Swap now
                    </button>
                </div>
                {
                    additionalMenu ? 
                    <div className = "flex flex-col justify-between items-center w-[536px] h-auto rounded-[16px] border-2 bg-[#17181A] border-[#FFFFFF1A] my-4 p-4" onClick={() => setAdditionalMenu(!additionalMenu)}>
                        <div className = "flex flex-row justify-between items-center w-[500px] ">
                            <p className = "w-[200px] h-[20px] text-[#a6a5a5a8] text-sm">Additional details</p>
                            <div className = "flex justify-center items-center w-[20px] h-[20px]">
                                <p className = " text-[#a6a5a5a8] text-sm">^</p>
                            </div>
                        </div>
                        <div class="h-[1px] border-[1px] border-[#a6a5a526] w-[500px] mt-4"></div>
                        <div className = "flex flex-row justify-between items-center w-[500px] my-4">
                            <p className = "w-[200px] h-[20px] text-[#a6a5a5a8] text-sm">Minimum Received</p>
                            <p className = "w-auto h-[20px] text-[#a6a5a5a8] text-sm ">0.00</p>
                        </div>
                        <div className = "flex flex-row justify-between items-center w-[500px] ">
                            <p className = "w-[200px] h-[20px] text-[#a6a5a5a8] text-sm">Transaction Fee</p>
                            <p className = "w-auto h-[20px] text-[#a6a5a5a8] text-sm ">0.00</p>
                        </div>
                        <div className = "flex flex-row justify-between items-center w-[500px] my-4">
                            <div className = "flex flex-row">
                                <p className = "w-auto h-[20px] text-[#2ED3B7] text-sm">More routes</p>
                                <RiShareBoxFill className = "w-[16px] h-[16px] text-[#2ED3B7] mt-[2px] ml-[2px]"/>
                            </div>
                            <p className = "w-auto h-[20px] text-[#17181A] text-sm ">0.00</p>
                        </div>
                        </div>
                    :
                    <div className = "flex flex-row justify-between items-center w-[536px] h-[68px] rounded-[16px] border-2 bg-[#17181A] border-[#FFFFFF1A] my-4 p-4" onClick={() => setAdditionalMenu(!additionalMenu)}>
                        <p className = "w-[200px] h-[20px] text-[#A5A5A6] text-sm">Additional details</p>
                        <div className = "flex justify-center items-center w-[20px] h-[20px]">
                            <p className = " text-[#A5A5A6] text-sm rotate-180">^</p>
                        </div>
                    </div>

                }
            </div>
        </div>
        <div className = "md:hidden flex flex-col justify-center items-center rounded-[16px] w-[360px] h-auto">
            <div className = "flex flex-col justify-center items-center w-[360px] h-auto ">
                <div className = "flex flex-row justify-between w-[360px] h-[56px] bg-[#0A0A0A]">
                    <div className = "flex">
                        <div className = "flex flex-row h-[56px] ">
                            <div className = "flex justify-center items-center w-[180px] rounded-x-[16px] border-t-2 bg-[#17181A] border-[#FFFFFF1A]">
                                <img src="../images/tabler_arrows-split-2.png" alt="" className = "w-[24px] h-[24px] m-2" />
                                <p className = "w-[90px] h-[18px] mb-[6px] align-middle text-white font-sm">Same-chain</p>
                            </div>
                        </div>
                        <div className = "flex flex-row h-[56px]">
                            <div className = "flex justify-center items-center w-[180px] rounded-x-[16px] border-y-2 bg-[#111213] border-[#FFFFFF1A]">
                                <img src="../images/tabler_arrows-shuffle.png" alt="" className = "w-[24px] h-[24px] m-2 #777879" />
                                <p className = "w-[90px] h-[18px] mb-[6px] align-middle text-[#777879] font-sm">Cross-chain</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className = "flex justify-center items-center w-[48px] h-[48px] my-2 p-2">
                        <img src="../images/grid-01 (1).png" alt="" className = "w-[16px] h-[16px] m-2 " />
                    </div> */}
                </div>
                <div className = "flex flex-col justify-center items-center w-[360px] h-auto">
                    <div className = "flex flex-row w-[328px] h-[32px] justify-center items-center mt-6">
                        <div className = "flex w-[248px] h-[20px] mr-2 mb-[6px]">
                            <p className = "font-sm text-white">Same-chain Swap</p>
                        </div>
                        <div className = "flex justify-center items-center w-[32px] h-[32px] rounded-[8px] ">
                            <img src="../images/refresh-ccw-05.png" alt="" className = "w-[16px] h-[16px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[32px] h-[32px] rounded-[8px]">
                            <img src="../images/Icon (1).png" alt="" className = "w-[16px] h-[16px]"/>
                        </div>
                    </div>
                    <div className = "flex flex-row w-[328px] h-[40px] justify-center items-center mb-4">
                        <div className = "flex justify-center items-center w-[40px] h-[40px] border-2 border-[#FFFFFF1A] rounded-[8px]">
                            <img src="../images/aptos.png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/polygon1.png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/BSC.png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex justify-center items-center w-[40px] h-[40px]">
                            <img src="../images/arbitrum (1).png" alt="" className = "w-[24px] h-[24px]"/>
                        </div>
                        <div className = "flex flex-row justify-center items-center w-[127px] h-[32px] border-2 border-[#2ED3B7] bg-[#17181A] rounded-[8px]">
                            <p className = "w-auto h-[18px] text-sm scale-75 text-[#2ED3B7] ">Other Chains</p>
                            <p className = "w-[16px] h-[16px] text-sm scale-75 text-[#2ED3B7] rotate-180 mt-[2px]">^</p>
                        </div>


                    </div>
                    <div className = "flex  flex-col justify-center items-center">
                        <div className = "flex flex-col w-[328px] h-[208px] justify-center z-0 items-center m-4 bg-[#111213] rounded-[16px] border-2 border-[#FFFFFF1A]">
                                <div className = "flex flex-col w-[296] h-[146px] m-4">
                                    <div className = "flex flex-row justify-start items-center w-[296px] h-[56px] rounded-[16px] bg-[#17181A] border-[#FFFFFF1A] border-2 p-4">
                                        <img src="../images/Group 1261152694.png" alt="" className = "w-[24px] h-[24px]" />
                                        <div className = "flex flex-row justify-start ml-2">
                                            <p className = "w-auto h-[28px] text-white text-base">Token</p>
                                            <p className = "w-auto h-[14px] text-white text-sm scale-75 mt-[4px]">on Chain</p>
                                        </div>
                                    </div>
                                    <div className = "flex flex-col relative">
                                        <div className = "flex flex-row justify-between items-center w-[296px] h-[18px] mt-[4px]">
                                            <p className = "w-auto h-[18px] font-sm text-[#A5A5A6] ml-[4px] scale-75">Pay from</p>
                                            <p className = "w-auto h-[18px] font-bold text-[#2ED3B7] mr-[4px] scale-75">Connect Wallet</p>
                                        </div>
                                        {
                                            clicked01 ?
                                            <div className = "flex flex-row justify-between items-center w-[296px] h-[40px] mt-4 border-b-2 border-[#FFFFFF1A]">
                                                <p className = "w-[43px] text-2xl h-[30px] font-bold text-white ml-[4px]">123.00</p>
                                                <MdOutlineCancel className="w-[16px] h-[16px] mt-2 text-[#A5A5A6]" onClick={() => setClicked01(false)} />
                                            </div>
                                            :
                                            <div className = "flex justify-start items-center w-[296px] h-[40px] mt-4 border-b-2 border-[#FFFFFF1A]" onClick={() => setClicked01(true)}>
                                                <p className = "w-[43px] text-2xl h-[30px] text-[#A5A5A6] ml-[4px]">0.00</p>
                                            </div>
                                            
                                        }
                                    </div>
                                    
                                </div>
                                <div className = "flex flex-row justify-between items-center w-[296px] h-[22px] mx-4 mb-4">
                                    <p className = "w-[50px] h-[18px] text-[#A5A5A6] text-sm scale-75">USD 0</p>
                                    <p className = "w-[60px] h-[18px] text-[#A5A5A6] text-sm scale-75">Balance -</p>
                                </div>
                        </div>
                        <div className = "flex justify-center absolute z-10 items-center w-[40px] h-[40px]  rounded-[8px] border-2 bg-[#17181A] border-[#FFFFFF1A]">
                            <img src="../images/switch-vertical-02.png" alt="" className = "w-[24px] h-[24px]" />
                        </div>
                        <div className = "flex flex-col w-[328px] h-[208px] justify-center items-center m-4 bg-[#111213] rounded-[16px] border-2 border-[#FFFFFF1A]">
                                <div className = "flex flex-col w-[296] h-[146px] m-4">
                                    <div className = "flex flex-row justify-start items-center w-[296px] h-[56px] rounded-[16px] bg-[#17181A] border-[#FFFFFF1A] border-2 p-4">
                                        <img src="../images/Group 1261152694.png" alt="" className = "w-[24px] h-[24px]" />
                                        <div className = "flex flex-row justify-start ml-2">
                                            <p className = "w-auto h-[28px] text-white text-base">Token</p>
                                            <p className = "w-auto h-[14px] text-white text-sm scale-75 mt-[4px]">on Chain</p>
                                        </div>
                                    </div>
                                    <div className = "flex flex-col ">
                                        <div className = "flex flex-row justify-between items-center w-[296px] h-[18px] mt-[4px]">
                                            <p className = "w-auto h-[18px] font-sm text-[#A5A5A6] ml-[4px] scale-75">Pay from</p>
                                            <p className = "w-auto h-[18px] font-bold text-[#2ED3B7] mr-[4px] scale-75">Connect Wallet</p>
                                        </div>
                                        {
                                            clicked02 ?
                                            <div className = "flex flex-row justify-between items-center w-[296px] h-[40px] mt-4 border-b-2 border-[#FFFFFF1A]">
                                                <p className = "w-[43px] text-2xl h-[30px] font-bold text-white ml-[4px]">123.00</p>
                                                <MdOutlineCancel className="w-[16px] h-[16px] mt-2 text-[#A5A5A6]" onClick={() => setClicked02(false)} />
                                            </div>
                                            :
                                            <div className = "flex justify-start items-center w-[296px] h-[40px] mt-4 border-b-2 border-[#FFFFFF1A]" onClick={() => setClicked02(true)}>
                                                <p className = "w-[43px] text-2xl h-[30px] text-[#A5A5A6] ml-[4px]">0.00</p>
                                            </div>
                                            
                                        }
                                    </div>
                                    
                                </div>
                                <div className = "flex flex-row justify-between items-center w-[296px] h-[22px] mx-4 mb-4">
                                    <p className = "w-[50px] h-[18px] text-[#A5A5A6] text-sm scale-75">USD 0</p>
                                    <p className = "w-[60px] h-[18px] text-[#A5A5A6] text-sm scale-75">Balance -</p>
                                </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-[296px] h-[32px]">
                        <p className = "w-auto h-[32px] scale-75 text-[#A5A5A6]">More Routes </p>
                        <p className = "w-auto h-[32px] scale-75 rotate-180 text-[#A5A5A6] mb-[14px]">^</p>
                    </div>
                    <button className = "flex w-[328px] h-[56px] justify-center items-center mx-4 mb-4 rounded-[16px] border-t-2 border-x-2 border-b-8 text-[#0E9384] border-[#0E9384]">
                        Swap now
                    </button>
                </div>
                {
                    additionalMenu ? 
                    <div className = "flex flex-col justify-between items-center w-[328px] h-auto rounded-[16px] border-2 bg-[#17181A] border-[#FFFFFF1A] my-4 p-4" onClick={() => setAdditionalMenu(!additionalMenu)}>
                        <div className = "flex flex-row justify-between">
                            <p className = "w-[270px] h-[20px] text-[#a6a5a5a8] text-sm">Additional details</p>
                            <div className = "flex justify-center items-center w-[20px] h-[20px]">
                                <p className = " text-[#a6a5a5a8] text-sm">^</p>
                            </div>
                        </div>
                            <div class="h-[1px] border-[1px] border-[#a6a5a526] w-[328px] mt-4"></div>
                        <div className = "flex flex-row justify-between items-center w-[290px] my-4">
                            <p className = "w-[200px] h-[20px] text-[#a6a5a5a8] text-sm">Minimum Received</p>
                            <p className = "w-auto h-[20px] text-[#a6a5a5a8] text-sm ">0.00</p>
                        </div>
                        <div className = "flex flex-row justify-between items-center w-[290px] ">
                            <p className = "w-[200px] h-[20px] text-[#a6a5a5a8] text-sm">Transaction Fee</p>
                            <p className = "w-auto h-[20px] text-[#a6a5a5a8] text-sm ">0.00</p>
                        </div>
                        {/* <div className = "flex flex-row justify-between items-center w-[328px] my-4">
                            <div className = "flex flex-row">
                                <p className = "w-auto h-[20px] text-[#2ED3B7] text-sm">More routes</p>
                                <RiShareBoxFill className = "w-[16px] h-[16px] text-[#2ED3B7] mt-[2px] ml-[2px]"/>
                            </div>
                            <p className = "w-auto h-[20px] text-[#17181A] text-sm ">0.00</p>
                        </div> */}
                            
                    </div>
                    :
                    <div className = "flex flex-row justify-between items-center w-[328px] h-[68px] rounded-[16px] border-2 bg-[#17181A] border-[#FFFFFF1A] my-4 p-4" onClick={() => setAdditionalMenu(!additionalMenu)}>
                        <p className = "w-[200px] h-[20px] text-[#a6a5a5a8] text-sm">Additional details</p>
                        <p className = "w-[20px] h-[20px] rotate-180 text-[#a6a5a5a8] text-sm">^</p>
                    </div>
                }
                

                
            </div>
        </div>
        </>
        
    )
}