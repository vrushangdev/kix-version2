import React from "react";
import ClickStart from "../components/ClickStart";

function Hero() {
  return (
    <section className=" relative hero-main h-[100vh]  ">
      <div className="container-wrapper relative z-50 flex items-center flex-col ">
        <div className="py-3 sm:py-2">
          <img
            src="images/logo.png"
            alt=""
            className=" mx-auto h-[2rem] sm:h-[40px]"
          />
        </div>
        <div className=" sm:pt-0 pt-[38%]">
          <img
            src="images/tredtext.png"
            alt=""
            className=" mx-auto py-1 -mt-3  sm:-mt-0 sm:py-4 sm:h-[6.5rem] h-[3.5rem] "
          />
        </div>

        <div className=" relative ">
          <h1
            className="  text-white  lh-1_1 
          sm:text-2xl text-lg  text-center"
          >
            BUY & SELL FOOTBALLERS
          </h1>
        </div>

        <div>
          <img src="/teen.png" alt="" className=" mx-auto h-auto sm:h-[300px]" />
        </div>

        <div className=" ">
          <ClickStart />
        </div>

        <div> 
          <h1 className="uppercase archo-black text-lg sm:text-3xl txt-s text-white text-center">
          <span className="text-[#edd400]">PLAY </span> FOR A SHARE OF
          </h1>
          <img src="images/100k.png" alt="" className=" mx-auto h-auto sm:h-[110px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
