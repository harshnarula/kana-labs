import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import WalletBar from "../components/WalletBar";
import SwapPanel from "../components/SwapPanel";
import MobileNavbar from "../components/MobileNavbar";
import MobileFooter from "../components/MobileFooter";

export default function SwapPage(){
    return(
        <>
        <div className = "hidden md:flex flex-row w-fit min-h-auto items-stretch bg-[#0A0A0A]">
            <LeftSidebar className = "" />
            <div className = "flex flex-col">
                <WalletBar/>
                <SwapPanel />
            </div>
        </div>
        <div className = "md:hidden flex flex-col justify-center items-center w-screen h-full bg-[#0A0A0A]">
            <MobileNavbar />
            <SwapPanel />
            <MobileFooter />
        </div>
        </>
    )
}