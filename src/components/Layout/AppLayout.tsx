import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export const AppLayout = (props: any) => {
  const { children, user } = props;
  return (
    <>
      <Navbar user={user} />
      {children}
      <Footer user={user} />
    </>
  );
};
