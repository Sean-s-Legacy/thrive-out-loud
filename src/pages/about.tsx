import React from "react";
import Hero from "@/components/pages-about/Hero";
import OurStory from "@/components/pages-about/OurStory";
import Goals from "@/components/pages-about/Goals";
import Safety from "@/components/pages-about/Safety";
import OurTeam from "@/components/pages-about/OurTeam";

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
