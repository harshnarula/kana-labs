import React from "react"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Footer from "../components/Footer"
import Section4 from "../components/Section4"

export default function HomePage(){
    return(
        <div className = 'flex flex-col justify-center items-center w-auto h-auto overflow-y-auto bg-[#0A0A0A]'>
        <Navbar />
        <Main />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
        </div>
    )
}