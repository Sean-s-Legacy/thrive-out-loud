import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

import { useAuth } from "../../context/AuthContext";

export const AppLayout = ({ children }) => {
  const { currentUser } = useAuth();

  return (
    <>
      <Navbar user={currentUser} />
      {children}
      <Footer user={currentUser} />
    </>
  );
};
