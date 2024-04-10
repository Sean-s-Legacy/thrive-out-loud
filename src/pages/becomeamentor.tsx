import GettingStarted from "@/components/becomeAMentor/GettingStarted";
import HowItWorks from "@/components/becomeAMentor/HowItWorks";
import React from "react";
import WhyUs from "@/components/becomeAMentor/WhyUs";
import StartThriving from "@/components/becomeAMentor/StartThriving"

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