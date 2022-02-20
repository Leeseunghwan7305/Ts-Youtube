import React, { Children } from "react";
import styles from "./Layout.module.scss";
import Nav from "../Nav/Nav";
import Tap from "../Tap/Tap";
type Props = {
  children: JSX.Element;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div className={styles.body}>
        <Tap></Tap>
        {children}
      </div>
    </div>
  );
};

export default Layout;
