"use client";

/**
 * ^^^ Any Component that uses an Ant Design Component, uses state, or has effect hooks needs to
 * "use client" making it a Client Component
 *
 * Read more here: https://kulkarniankita.com/react/react-server-client-components
 *
 */

import React from "react";
import styles from "./examplecomponent.module.css";

import { Button } from "antd";

interface IAppProps {}

const Index: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.styledContainer}>
        <h1 className={styles.h1}>This is an example component</h1>
        <Button>Click me</Button>
      </div>
    </div>
  );
};

export default Index;
