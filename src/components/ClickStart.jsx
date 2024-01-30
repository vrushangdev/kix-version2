import React from "react";

function ClickStart() {
  return (
    <section className=" relative -mt-[5%] sm:-mt-[1%]">
        <div className=" mx-auto  justify-center my-6  flex">
            <a
              href="https://test.kix.digital/?utm_source=landingpage&utm_medium=website&utm_campaign=tradeathon&utm_content=wave3&utm_term=1millionkixtokens" 
              className=" uppercase archo-black text-lg sm:text-3xl txt-s pt-2 px-12   bg-[#94339d] border-2 border-[#edd400]  text-white mx-auto btn-hov rounded-xl "
            >
              {" "}
              {/* click to <span className="text-[#edd400]">Enter</span> */}
              <img src="images/click.png" alt="" className=" h-[45px]" />
            </a>
          </div>
   
    </section>
  );
}

export default ClickStart;
