import GettingStarted from "@/components/becomeAMentee/GettingStarted";
import HowItWorks from "@/components/becomeAMentee/HowItWorks";
import React from "react";
import StartThriving from "@/components/becomeAMentee/StartThriving";
import WhyUs from "@/components/becomeAMentee/WhyUs";

function BecomeAMentee(props) {
    return (
        <>
            <GettingStarted />
            <WhyUs />
            <HowItWorks />
            <StartThriving />
        </>
    );
}

export default BecomeAMentee;
