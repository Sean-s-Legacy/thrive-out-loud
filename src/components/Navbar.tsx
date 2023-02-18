import Image from "next/image";
import React from "react";
import { Button, Space, Input } from "antd";
import "antd/dist/reset.css";
import SignupBtn from "./SignupBtn";
import FindAMentorBtn from "./FindAMentorBtn";
import LoginBtn from "./LoginBtn";

export default function Navbar() {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

  return (
    <nav className="nav_container">
      <Image alt="" width={205} height={54.08} src="/images/SL-logo.png" />

      {/* <div> */}
      {/* <Search /> */}

      <Search
        className="search_input"
        placeholder="Search"
        onSearch={onSearch}
        size="large"
        style={{ width: 591 }}
      />
      <Space wrap>
        <FindAMentorBtn />
        <LoginBtn />
        <SignupBtn />
      </Space>
      <div className="hamburger_menu">
        <div className="hamburger_bdr hamburger_bdr_1"></div>
        <div className="hamburger_bdr hamburger_bdr_2"></div>
        <div className="hamburger_bdr hamburger_bdr_3"></div>
      </div>

      {/* </div> */}
    </nav>
  );
}
