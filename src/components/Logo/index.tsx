import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Logo: FunctionComponent = () => (
  <img
    className={styles.logo}
    src={
      "https://doprod-statics.s3.amazonaws.com/pictures/logo/6308/large_9ccaa5a0-5f13-4270-8191-2ed66fd01fe7.png"
    }
    alt={"Logo"}
  />
);
