import React from "react";
import TeamMember from "@/components/about/TeamMember";

function index(props) {
  const team = [
    {
      imgSrc: null,
      name: "Hope Dehnert",
      pronouns: "she/her",
      role: "Co-Founder and Managing Director, MPH",
    },
    {
      imgSrc: null,
      name: "Alli Shipkowski",
      pronouns: "she/her",
      role: "Co-Founder and Director of Operations",
    },
    {
      imgSrc: null,
      name: "Steph Lambruschini",
      pronouns: "she/her",
      role: "Product Designer",
    },
    {
      imgSrc: null,
      name: "Tysheena Jackson",
      pronouns: "she/her",
      role: "Director of Social Media and Comms",
    },
    {
      imgSrc: null,
      name: "Dylan Williams",
      pronouns: "he/him",
      role: "Copywriter",
    },
    {
      imgSrc: null,
      name: "Tyrone Best",
      pronouns: "he/him",
      role: "Drug Addiction & Substance Abuse Liason",
    },
    {
      imgSrc: null,
      name: "Ethan Lloyd",
      pronouns: "he/him",
      role: "Inclusion in Sports & Athletics Liason",
    },
    {
      imgSrc: null,
      name: "Jenna Wilkinson",
      pronouns: "she/her",
      role: "Graphic Designer",
    },
    {
      imgSrc: null,
      name: "Anthony Santoro",
      pronouns: "he/him",
      role: "Training & Research Associate",
    },
  ];
  return (
    <>
      {team.map((member, index) => {
        <TeamMember
          key={index}
          name={member.name}
          pronouns={member.pronouns}
          role={member.role}
        />;
      })}
    </>
  );
}

export default index;
