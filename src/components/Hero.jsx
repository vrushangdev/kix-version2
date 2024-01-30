import React from "react";
import ClickStart from "../components/ClickStart";

function Hero() {
  return (
    <section className=" relative hero-main h-[100vh] ">
      <div className="container-wrapper relative z-50">
        <div className="py-3 sm:py-2">
          <img
            src="images/logo.png"
            alt=""
            className=" mx-auto h-[2rem] sm:h-[40px]"
          />
        </div>
        <div>
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

          <img src="/teen.png" alt="" className=" mx-auto h-[300px]" />
        </div>

        <div className=" py-1">
            <ClickStart />
          </div>

          <div>

          </div>
      </div>
    </section>
  );
}

export default Hero;
