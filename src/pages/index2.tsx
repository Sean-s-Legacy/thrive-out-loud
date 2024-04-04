import React from "react";
// import { Typography, Button, Space, Spin } from "antd";
// import Image from "next/image";
import Hero from "@/components/pages-index2/Hero";
import Connect from "@/components/pages-about/Connect";
import BecomeMentee from "@/components/pages-index2/BecomeMentee";
import BecomeMentor from "@/components/pages-index2/BecomeMentor";

export default function Index() {
  return (
    <div>
      <Hero />
      <Connect />
      <BecomeMentee />
      <BecomeMentor />
    </div>
  );
}
