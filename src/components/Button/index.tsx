import React from "react";
import { Button, Space, Input } from "antd";
import classnames from "classnames";
// import "antd/dist/reset.css";

interface ButtonProps {
    className?: string
    disabled?: boolean
    href?: string
    style?: any
    title: any
    children?: any
    onClick?: () => void
  }

export default function SLButton(props:ButtonProps) {
    const {
        className,
        title,
        onClick
    } = props

    return (
        <Button 
        type="text" 
        onClick={onClick}
        className={classnames("common_btn auth_btn primary_btn", className)}
        >
            {title}
        </Button>
    );
}
