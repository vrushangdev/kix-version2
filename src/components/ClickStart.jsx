import React from "react";

function ClickStart() {
  return (
    <section className=" relative -mt-[5%] sm:-mt-[1%]">
        <div className=" mx-auto  justify-center mt-4 mb-4 hidden sm:flex">
            <a
              href="https://test.kix.digital/?utm_source=landingpage&utm_medium=website&utm_campaign=tradeathon&utm_content=wave3&utm_term=1millionkixtokens" 
              className=" uppercase archo-black text-lg sm:text-3xl txt-s py-3 px-12   bg-[#94339d]  text-white mx-auto btn-hov "
            >
              {" "}
              click to <span className="text-[#edd400]">Enter</span>
            </a>
          </div>
      <div className="container-wrapper max-w-3xl mx-auto relative z-[999]">
        <div className="">
  
          <div className=" mx-auto  justify-center mt-4 mb-4 sm:hidden flex">
            <a
              href="https://test.kix.digital/?utm_source=landingpage&utm_medium=website&utm_campaign=tradeathon&utm_content=wave3&utm_term=1millionkixtokens"
              className=" uppercase archo-black text-lg sm:text-xl txt-s py-3 px-12 rounded-lg  bg-[#11cac9]  text-[#edd400] mx-auto btn-hov "
            >
              {" "}
              click to Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClickStart;
