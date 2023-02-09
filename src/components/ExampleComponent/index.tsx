import React from "react";
import styles from "./examplecomponent.module.css";

// import { Button } from "antd";

export default function index() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.styledContainer}>
        <h1 className={styles.h1}>This is an example component</h1>
        {/* <Button>Click me</Button> */}
      </div>
    </div>
  );
}
