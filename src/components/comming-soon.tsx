import React from "react";
import commingSoon1 from "../../assets/images/comming_soon1.png";
import commingSoon2 from "../../assets/images/comming_soon2.png";
import commingSoon3 from "../../assets/images/comming_soon3.png";

import Image from "next/image";

const CommingSoon = () => {
  const commingSoonData = [
    {
      title: "token",
      subTitle: "The Gateway token to the world of AI",
      image: commingSoon1,
      text: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    },
    {
      title: "revenue",
      subTitle: "Driving income and growth through decentralization",
      image: commingSoon2,
      text: "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
    },
    {
      title: "launchpad",
      subTitle: "Driving the future of AI Innovation",
      image: commingSoon3,
      text: "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
    },
  ];
  return (
    <section className="global_bg">
      <div className="inner_container scroll">
        <div className="commingsoon_wrap">
          {commingSoonData.map((item) => (
            <div className="relative">
              <span className="coming_soon">COMING SOON</span>
              <div className="pl-4">
                <h2 className="mt-8">{item.title}</h2>
                <div className="gradient-texts my-6 h-16">
                  <h3>{item.subTitle}</h3>
                </div>
              </div>
              <div>
                <Image
                  src={item.image}
                  alt="mission"
                  width="500"
                  height="500"
                />
              </div>
              <p className="pl-4 my-8">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommingSoon;
