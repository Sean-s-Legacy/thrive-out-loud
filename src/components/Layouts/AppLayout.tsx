//@ts-nocheck
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarOnlyLogo from "./NavbarOnlyLogo";

import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export const AppLayout = ({ children }) => {
  const { currentUser } = useAuth();
  const route = usePathname();
  const conditions = [
    "minimumInfo",
    "emailVerification",
    "emailVerificationSucess",
    "numberVerification",
  ];
  return (
    <>
      {conditions.some((str) => route.includes(str)) ? (
        <NavbarOnlyLogo />
      ) : (
        <Navbar user={currentUser} />
      )}
      {children}
      {conditions.some((str) => route.includes(str)) ? null : (
        <Footer user={currentUser} />
      )}
    </>
  );
};
