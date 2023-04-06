// File used to test individual components --
// Loads component quicker than adding to an existing page
// How to use:
// 1. import your component below
// 2. navigate to localhost:3000/testing-component to see your component

import React from "react";
import Mentors from "@/components/Mentors";

export default function ComponentTest() {
  return (
    <>
      <Mentors />
    </>
  );
}
