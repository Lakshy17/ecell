import React from "react";

function Navbar() {
    const Home = () => {
        const ele = document.getElementById("Home");
        if (ele) {
            ele.scrollIntoView({behavior:"smooth"})
        }}

    const Aboutus = () => {
        const ele = document.getElementById("Aboutus");
        if (ele) {
            ele.scrollIntoView({behavior:"smooth"})
        }}
    return (
        <>

 
        <nav className=" flex items-center justify-center w-full bg-gradient-to-r from-green-400 to-blue-500 h-26 text-white hover:bg-black fixed top-0 z-10">
            <div className="flex flex-row items-center justify-between w-full gap-10 p-6">
                <a href="https://www.instagram.com/pes_ecell/">
                <img src='socials.png' width={125} height={125}></img>
                </a>
                
                <div className="flex flex-row items-center gap-10" >
                    <p><button onClick={Home}> Home </button></p>
                    <p>|</p>
                    <p><a href='#'> Events </a></p>
                    <p>|</p>
                    <p><button onClick={Aboutus}> About Us </button></p>
                    <p>|</p>
                    <p><a href='#'> Articles </a></p>
                    <p>|</p>
                    <p><a href='#'> Quiz </a></p>

                </div>
                
                <img src='peslogodark.png' width={200} height={160}></img>

            </div>
        </nav>


        <div className="flex flex-col items-center justify-center text-center bg-black h-screen text-white" id="Home">
        <p className="text-7xl "> The Entrepreneurship cell </p>
        <p className="text-2xl italic text-blue-500 mt-5"> making ideas happen </p>
            <hr style={{ border: "none", borderTop: "1px solid white", position: "absolute", top: "57%", width: "55%" }} />
            <button className="bg-white text-black py-2 px-4 rounded-full mt-20">Get Started</button>
        </div>

        
        <div className="flex h-screen bg-black" id="Aboutus">
    
       



        </div>



        </>

            
    );
}

export default Navbar;
