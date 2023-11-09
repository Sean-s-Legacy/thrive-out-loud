//@ts-nocheck
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import NavbarWithoutUser from "./NavbarWithoutLogin";

export const AppLayout = ({ children }) => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const route = usePathname();
  const conditions = [
    "minimumInfo",
    "emailVerification",
    "emailVerificationSucess",
  ];
  return (
    <>
      {conditions.some((str) => route.includes(str)) ? (
        <NavbarWithoutUser />
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
