export default function temporary(){
    return(
        <>
        <div className = "flex flex-col justify-between items-center w-[536px] h-auto rounded-[16px] border-2 bg-[#17181A] border-[#FFFFFF1A] my-4 p-4" onClick={() => setAdditionalMenu(!additionalMenu)}>
                        <div className = "flex flex-row justify-between items-center w-[500px] ">
                            <p className = "w-[200px] h-[20px] text[#a6a5a5a8] text-sm">Additional details</p>
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

                        <div className = "flex flex-row justify-between items-center w-[328px] h-auto rounded-[16px] border-2 bg-[#17181A] border-[#FFFFFF1A] my-4 p-4">
                        <p className = "w-[200px] h-[20px] text[#a6a5a5a8] text-sm">Additional details</p>
                            <div className = "flex justify-center items-center w-[20px] h-[20px]">
                                <p className = " text-[#a6a5a5a8] text-sm">^</p>
                            </div>
                            <div class="h-[1px] border-[1px] border-[#a6a5a526] w-[328px] mt-4"></div>
                        <div className = "flex flex-row justify-between items-center w-[328px] my-4">
                            <p className = "w-[200px] h-[20px] text-[#a6a5a5a8] text-sm">Minimum Received</p>
                            <p className = "w-auto h-[20px] text-[#a6a5a5a8] text-sm ">0.00</p>
                        </div>
                        <div className = "flex flex-row justify-between items-center w-[328px] ">
                            <p className = "w-[200px] h-[20px] text-[#a6a5a5a8] text-sm">Transaction Fee</p>
                            <p className = "w-auto h-[20px] text-[#a6a5a5a8] text-sm ">0.00</p>
                        </div>
                        <div className = "flex flex-row justify-between items-center w-[328px] my-4">
                            <div className = "flex flex-row">
                                <p className = "w-auto h-[20px] text-[#2ED3B7] text-sm">More routes</p>
                                <RiShareBoxFill className = "w-[16px] h-[16px] text-[#2ED3B7] mt-[2px] ml-[2px]"/>
                            </div>
                            <p className = "w-auto h-[20px] text-[#17181A] text-sm ">0.00</p>
                        </div>
                            
                        </div>
        </>
    )
}
