import React, { Children, useState } from "react";
import styles from "./Layout.module.scss";
import Nav from "../Nav/Nav";
import Tap from "../Tap/Tap";
type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  let [tapToggle, setTapToggle] = useState<boolean>(true);
  function Toggle(): void {
    setTapToggle(!tapToggle);
  }
  return (
    <div>
      <div>
        <Nav Toggle={Toggle} setTapToggle={setTapToggle}></Nav>
      </div>
      <div className={styles.body}>
        <Tap tapToggle={tapToggle}></Tap>
        {children}
      </div>
    </div>
  );
};

export default Layout;
