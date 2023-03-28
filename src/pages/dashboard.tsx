import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getUser } from "@/Firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Mentors from "../components/Mentors";

export default function Dashboard() {
  const { asPath, pathname } = useRouter();
  const [user, setUser] = useState({} as any);

  useEffect(() => {
    const result = getUser();
    console.log(result);
    setUser(result);
  }, []);

  return (
    <div>
      Welcome <b>{user?.displayName}</b>
      <div></div>
      <Mentors />
    </div>
  );
}
