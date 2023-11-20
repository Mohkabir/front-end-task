import React from "react";
import crypto1 from "../../assets/images/crypto1.png";
import crypto2 from "../../assets/images/crypto2.png";
import crypto3 from "../../assets/images/crypto3.png";
import Image from "next/image";

const SectionCrypto = () => {
  const commingSoonData = [
    {
      title: "AI Prospects, Market Size, and Development Pace",
      text: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      image: crypto1,
    },
    {
      title: "AI Tools and Market",
      text: "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
      image: crypto2,
    },
    {
      title: "AI, Crypto, and NFT Market",
      text: "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
      image: crypto3,
    },
  ];
  return (
    <section className="global_bg">
      <div className="inner_container ">
        <div className="sectionCrypto_wrap">
          {commingSoonData.map((item) => (
            <div>
              <div className="box1">
                <h2 className="">{item.title}</h2>
                <p className="">{item.text}</p>
              </div>
              <div className="box2">
                <Image
                  src={item.image}
                  alt="mission"
                  width="500"
                  height="500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCrypto;
