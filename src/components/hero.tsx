import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.svg";
import heroImg from "../../assets/images/hero-img.svg";
import menu from "../../assets/images/menu.svg";


import Link from "next/link";
const Hero = () => {
  const navLink = [
    {
      title: "Creon Pass",
      link: "/creon-pass",
    },
    {
      title: "Token",
      upcoming: true,
    },
    {
      title: "AI Revenue",
      upcoming: true,
    },
    {
      title: "AI Launchpad",
      upcoming: true,
    },
  ];
  return (
    <header className="">
      <section className="flex justify-between contents container pt-8">
        <Image src={logo} alt="logo" width="150" height="150" />
        <nav className="flex items-center justify-between w-[47%]">
          {navLink.map((item, index) => (
            <div className="links">
              {item.link ? (
                <Link href={item.link} key={index}>
                  {item.title}{" "}
                  {item.upcoming && (
                    <sup className="text-[0.8rem] bg-[#000000] text-[#AB23FF] rounded-full p-1">
                      SOON
                    </sup>
                  )}
                </Link>
              ) : (
                <span>
                  {item.title}{" "}
                  {item.upcoming && (
                    <sup className="text-[0.7rem] bg-[#000000] text-[#AB23FF] rounded-full p-1 px-2">
                      SOON
                    </sup>
                  )}
                </span>
              )}
            </div>
          ))}
          <button>Connect</button>
          <button className="menu">
            <Image src={menu} alt="menu" width="50" height="50" />
          </button>
        </nav>
      </section>
      <section className="inner_container">
        <div className=" mt-[50vh]">
          <h1 className="text-[#ffffff] w-[85%]">
            The world's first platform for Tokenizing AI blockchain projects
          </h1>
          <div className="gradient-text mt-4">
            <h3>
              Hold the Creon Pass NFT and earn passive income from AI Tools
            </h3>
          </div>
        </div>
      </section>
      <Image
        className="hero_img"
        src={heroImg}
        alt="hero-img"
        width="100"
        height="100"
      />
    </header>
  );
};

export default Hero;
