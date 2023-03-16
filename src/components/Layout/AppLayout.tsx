import React from "react"
import FooterNotAuth from "../FooterNotAuth"
import Navbar from "../Navbar"

export const AppLayout = (props: any) => {
    const { children, user } = props
    return (
        <>
            <Navbar user={user}  />
             {children}
            <FooterNotAuth />
        </>
    )
}