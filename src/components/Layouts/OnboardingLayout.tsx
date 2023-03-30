//@ts-nocheck
import React from "react";
import OnboardingNavbar from "../Navbar/OnboardingNavbar";

export const OnboardingLayout = ({ children }) => {
  return (
    <>
      <OnboardingNavbar />
      {children}
    </>
  );
};
