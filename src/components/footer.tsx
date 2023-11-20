import React from "react";
import Logo2 from "../../assets/images/logo2.png";
import Socials from "../../assets/images/socials.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black pb-12 footer">
      <div className="inner_container flex justify-between">
        <div className="flex box1">
          <p className="mr-16">© Creon 2023. All rights reserved.</p>
          <Image src={Socials} alt="mission" width="100" height="100" />
        </div>
        <p className="flex">
          <span className="mr-4">Powered by</span>
          <Image src={Logo2} alt="mission" width="100" height="100" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
