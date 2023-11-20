import React from "react";
import profittingImg from "../../assets/images/profitting.png";
import Image from "next/image";

const Profitting = () => {
  return (
    <section className="profitting">
      <div className="inner_container">
        <h1 className="text-[#ffffff]">Profiting Through</h1>
        <div className="gradient-texts my-8">
          <h2 className="text-right">AI Innovation & Decentralization</h2>
        </div>

        <div className="profitting_Boxes">
          <div className="box1">
            <Image
              src={profittingImg}
              alt="profitting"
              width="1100"
              height="1100"
            />
          </div>
          <div>
            <h3>The dynamic community driven business model of the future.</h3>
            <p>
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profitting;
