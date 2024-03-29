import React from "react";
import Hero from "@/components/pages-about/Hero";
import Connect from "@/components/pages-about/Connect";
import OurStory from "@/components/pages-about/OurStory";
// import Goals from "@/components/pages-about/Goals";
// import Safety from "@/components/pages-about/Safety";
import OurTeam from "@/components/pages-about/OurTeam";
import ContactUs from "@/components/pages-about/ContactUs";

function about(props) {
  return (
    <>
      <Hero />
      <Connect />
      <OurStory />
      {/* <Goals />
      <Safety /> */}
      <OurTeam />
      <ContactUs />
    </>
  );
}

export default about;
