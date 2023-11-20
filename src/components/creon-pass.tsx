import React from "react";
import video2 from "../../assets/images/video2.png";
import Image from "next/image";

const CreonPass = () => {
  return (
    <section className="creon_pass">
      <div className="inner_container creon_pass_flex">
        <section>
          <h1 className="text-[#ffffff]">creon pass nft</h1>
          <div className="gradient-texts my-8">
            <h3 className="w-[85%]">
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </h3>
          </div>
          <p>Pre-launch investment opportunities for upcoming AI projects</p>
          <p>Free and early access to Creon built AI projects</p>
          <p>Higher allocation limits on the Creon AI Launchpad</p>
          <p>Revenue share distribution from Creon built AI projects</p>
          <button className="gradient-button" type="button">
            Buy Creon Pass
          </button>
        </section>
        <section className="box2">
          <Image src={video2} alt="creon pass" width="800" height="800" />
        </section>
      </div>
    </section>
  );
};

export default CreonPass;
