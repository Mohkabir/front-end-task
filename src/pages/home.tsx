import CommingSoon from "@/components/comming-soon";
import CreonPass from "@/components/creon-pass";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import OurMission from "@/components/our-mission";
import Profitting from "@/components/profitting";
import SectionCrypto from "@/components/section-crypto";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <CreonPass />
      <Profitting />
      <OurMission />
      <CommingSoon />
      <SectionCrypto />
      <Footer />
    </div>
  );
};

export default HomePage;
