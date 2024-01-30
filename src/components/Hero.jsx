import React from "react";
import ClickStart from "../components/ClickStart";

function Hero() {
  return (
    <section className=" relative  h-[100vh]  ">
      <div className="container-wrapper relative z-50 flex items-center flex-col ">
        <img
          src="images/free.png"
          alt=""
          className=" absolute left-0 sm:-left-[8%] h-[200px] sm:h-[320px] top-0 sm:top-[23%]"
        />
        <img
          src="images/winn.png"
          alt=""
          className=" absolute right-0 sm:-right-[4%] h-[200px] sm:h-[320px] top-0 sm:top-[45%]"
        />
        <img
          src="images/chart.png"
          alt=""
          className=" absolute -z-[2] top-[45%] sm:top-[20%]"
        />
        <div className="py-3 sm:py-2">
          <img
            src="images/logo.png"
            alt=""
            className=" mx-auto h-[2rem] sm:h-[40px]"
          />
        </div>
        <div className=" sm:pt-0 pt-[32%]">
          <img
            src="images/tredtext.png"
            alt=""
            className=" mx-auto py-1 -mt-3  sm:-mt-0 sm:py-4 sm:h-[6.5rem] h-[3.5rem] "
          />
        </div>

        <div className=" relative ">
          <h1
            className="  text-white  lh-1_1 
          sm:text-2xl text-lg  text-center "
          >
            BUY & SELL FOOTBALLERS
          </h1>
        </div>

        <div>
          <img
            src="/teen.png"
            alt=""
            className=" mx-auto h-auto sm:h-[300px]"
          />
        </div>

        <div className=" sm:mt-0 mt-4 ">
          <ClickStart />
        </div>

        <div className="">
          <h1 className="uppercase archo-black text-lg sm:text-3xl txt-s text-white text-center">
           <img src="images/play.png" alt="" className=" mx-auto h-full sm:h-[50px]" />
          </h1>
          <img
            src="images/100k.png"
            alt=""
            className=" mx-auto h-auto sm:h-[105px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
