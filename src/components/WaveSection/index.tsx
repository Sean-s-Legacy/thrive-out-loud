import React from "react";

import styles from "./wavesection.module.css";

function WaveSection({ children }) {
  return <section className={styles.section}>{children}</section>;
}

export default WaveSection;
