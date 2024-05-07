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

    const Events = () => {
        const ele = document.getElementById("Events");
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
                    <p><button onClick={Events}> Events </button></p>
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



        <div className="flex flex-column items-center justify-center bg-black h-screen text-white relative" id="Events">
        <div className="flex flex-column items-center justify-center">
            <h1 className="text-4xl text-center text-white absolute top-40 left-100 transform ">EVENTS</h1>  
        </div>
        
        
            
            
          
            
            

        </div>


        
        <div className="flex items-center justify-center h-screen bg-black relative" id="Aboutus">
            <h1 className="text-4xl text-center text-blue-500 absolute top-40 transform ">ABOUT US</h1>
        <hr style={{ border: "none", borderTop: "1px solid white", position: "absolute", top: "36%", width: "40%" }} />
        <div className="flex mt-6">
            <img src='bulbs.png' width={600} height={600}></img>
        </div>
            
        </div>
       
        



        </>

            
    );
}

export default Navbar;
