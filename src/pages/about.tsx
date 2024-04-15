import React from "react";
import Hero from "@/components/pages-about/Hero";
import Connect from "@/components/pages-index/Connect";
import OurStory from "@/components/pages-about/OurStory";
import OurTeam from "@/components/pages-about/OurTeam";
import ContactUs from "@/components/pages-about/ContactUs";

function about(props) {
  return (
    <>
      <Hero />
      <Connect />
      <OurStory />
      <OurTeam />
      <ContactUs />
    </>
  );
}

export default about;
