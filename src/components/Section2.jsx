export default function Section2() {
    return (
        <div className="flex justify-center items-center flex-col w-screen h-auto mt-[20px]">
            <div className="flex flex-col justify-center items-center mt-[46px]">
                <p className="text-[#7D8595] ">Econia</p>
                <p className="text-white mt-2 font-bold text-xl md:text-3xl">Trade</p>
                <button className="flex justify-center items-center w-[121px] md:w-[150px] text-sm md:text-xl h-[40px] bg-[#1D1E20]  rounded-[8px] text-[#2ED3B7] hover:text-[#39ffdd] hover:border-[#39ffdd] duration-300 font-bold border-2 border-[#2ED3B7] mt-2">See what's new</button>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center mt-[93px] w-full h-[568px]">
                <div className="flex flex-col justify-center items-center w-[608px] h-[550px] p-[56px] my-[32px] mr-4 bg-gradient-to-r from-[#033B4C] to-[#0E9384] rounded-[24px]">
                    <p className="text-white w-[384px] h-[168px] text-4xl text-left">Spot Trading. Buy and Sell with limit and market order-books. Built on Aptos.</p>
                    <div className="flex w-[384px] justify-start mt-4">
                        <button className="text-[#2ED3B7] duration-300  border-2 border-b-8 w-[129px] h-[56px] rounded-[16px] border-[#2ED3B7] bg-[#1D1E20] hover:bg-black">
                        Trade now
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center w-[608px] h-[550px]  my-[32px] rounded-[24px] bg-[#1D1E20]">
                    <div className = "flex flex-grow justify-center items-center w-auto h-auto">
                        <img src="../images/Group 1261152705(1).png" className="" alt="" />
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-col justify-center items-center mt-[93px] w-full h-auto">
                <div className="flex justify-center items-center w-[296px] h-auto  my-[32px] rounded-[24px] bg-[#1D1E20]">
                    <div className = "flex flex-grow justify-center items-center w-auto h-auto">
                        <img src="../images/Group 1261152705(1).png" className="" alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[296px] p-[8px] my-[32px] bg-gradient-to-r from-[#033B4C] to-[#0E9384] rounded-[24px]">
                    <p className="text-white w-[296px]  h-[124px] text-xl text-left px-4">Spot Trading. Buy and Sell with limit and market order-books. Built on Aptos.</p>
                    <div className="flex w-[296px] justify-start px-4 pb-4">
                        <button className="text-[#2ED3B7] border-2 border-b-8 w-[129px] h-[56px] rounded-[16px] border-[#2ED3B7] bg-[#1D1E20] hover:bg-black">
                        Trade now
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="hidden md:flex justify-center items-center w-full h-[480px]">
                <div className="flex flex-row w-[1232px] py-[32px] px-[112px] h-[480px] mt-4 bg-[#1D1E20] rounded-[24px]">
                    <div className="flex flex-col justify-center my-auto w-[476px] h-[106px] mr-[56px]">
                        <p className="text-white text-4xl">Trade with leverage</p>
                        <button className="flex justify-center items-center duration-300 text-[#2ED3B7] border-2 border-b-8 w-[129px] h-[56px] rounded-[16px] border-[#2ED3B7] bg-[#1D1E20] hover:bg-black mt-2">Try Perps</button>
                    </div>
                    <div className="flex flex-grow justify-center items-center">
                        <img src="../images/Group 1261152704(1).png" alt="" className="w-[476px] h-[416px] object-contain" />
                    </div>
                </div>
            </div>
            <div className="md:hidden flex justify-center items-center ">
                <div className="flex flex-col w-[296px] p-[8px]  mt-4 bg-[#1D1E20] rounded-[24px]">
                    <div className="flex flex-grow justify-center items-center">
                        <img src="../images/Group 1261152704(1).png" alt="" className="w-[476px] h-auto m-4 object-contain" />
                    </div>
                    <div className="flex flex-col justify-center my-auto w-[261px] h-auto pb-4">
                        <p className="text-white text-xl">Trade with leverage</p>
                        <button className="flex justify-center items-center text-[#2ED3B7] duration-300 border-2 border-b-8 w-[129px] h-[56px] rounded-[16px] border-[#2ED3B7] bg-[#1D1E20] hover:bg-black mt-2">Try Perps</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
