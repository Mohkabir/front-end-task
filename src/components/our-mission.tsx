import React from "react";
import missionImg from "../../assets/images/missionImg.png";
import mission1 from "../../assets/images/mission1.svg";
import mission2 from "../../assets/images/mission2.svg";
import mission3 from "../../assets/images/mission3.svg";
import mission4 from "../../assets/images/mission4.svg";
import upIcon from "../../assets/images/up.svg";
import downIcon from "../../assets/images/down.svg";

import Image from "next/image";

const OurMission = () => {
  const missionData = [
    {
      title: "Profitability and Growth",
      text: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
      image: mission1,
      icon: upIcon,
    },
    {
      title: "Transparent & Fair Decentralized Earnings",
      image: mission2,
      icon: downIcon,
    },
    {
      title: "Launching the future",
      image: mission3,
      icon: downIcon,
    },
    {
      title: "Limitless Possibilities of AI & Crypto",
      image: mission4,
      icon: downIcon,
    },
  ];
  return (
    <section className="our_mission">
      <div className="inner_container ">
        <div className="box1">
          <div>
            <h2 className="inline">
              Our vision is to support the innovation of AI blockchain projects
            </h2>
            <div className="gradient-texts inline-block">
              <h2 className="inline">
                while prioritizing communities and democratizing profits Our
                vision
              </h2>
            </div>
          </div>
          <div className="text-right">
            <Image src={missionImg} alt="mission" width="800" height="800" />
          </div>
        </div>
        <div className="box2">
          {missionData.map((item) => (
            <div className="flex items-start mb-10">
              <div className="w-[20%] mr-4">
                <Image
                  src={item.image}
                  alt="mission"
                  width="100"
                  height="100"
                />
              </div>
              <div className="w-[70%] pt-[20px]">
                <h3 className="mb-6">{item.title}</h3>
                {item.text && <p>{item.text}</p>}
              </div>
              <div className="pt-[30px]">
                <Image src={item.icon} alt="mission" width="10" height="10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
