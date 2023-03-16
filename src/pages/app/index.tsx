import FooterNotAuth from "@/components/FooterNotAuth";
import { AppLayout } from "@/components/Layout/AppLayout";
import Navbar from "@/components/Navbar";
import { getUser } from "@/Firebase/auth";
import { auth } from "@/Firebase/utils";
import { Spin } from "antd";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Mentors from "../../components/Mentors";

export default function Dashboardx() {
  const [user, setUser] = useState({} as any)
  const [pending, setPending] = useState(true);

  const router = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setPending(false);
      console.log("index", user);
      if (user) {
        console.log("user is logged in !");
        console.log("user : ", user);
        console.log(user.uid);
        setUser(user);
      } else {
        setUser(null);
        console.log("user is signed out !");
      }
    });
    return unsubscribe;
  }, []);

  if (pending) {
    return (
      <div className="spinner-">
        <Spin spinning={pending} />
      </div>
    );
  }
  if (!user) {
    router.push("/");
    return (
      <div className="spinner-">
        <Spin spinning={pending} />
      </div>
    );
  }

  return (
    <AppLayout user={user}>
      Welcome <b>{user?.displayName}</b>
      <div></div>
      <Mentors />
    </AppLayout>
  );
}
