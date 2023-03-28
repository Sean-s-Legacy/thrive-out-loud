import React from "react";
import Hero from "@/components/about/Hero";
import OurStory from "@/components/about/OurStory";
import Goals from "@/components/about/Goals";
import Safety from "@/components/about/Safety";
import OurTeam from "@/components/about/OurTeam";

function about(props) {
  return (
    <>
      <Hero />
      <OurStory />
      <Goals />
      <Safety />
      <OurTeam />
    </>
  );
}

export default about;
