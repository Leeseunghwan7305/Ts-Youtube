import React, { Children, useState, useContext } from "react";
import styles from "./Layout.module.scss";
import Nav from "../Nav/Nav";
import Tap from "../Tap/Tap";

type Props = {
  children: JSX.Element;
};
export let inputContext = React.createContext<string | null>("");
const Layout = ({ children }: Props) => {
  let [tapToggle, setTapToggle] = useState<boolean>(true);
  let [input, setInput] = useState<string | null>("");
  function Toggle(): void {
    setTapToggle(!tapToggle);
  }

  return (
    <inputContext.Provider value={input}>
      <div>
        <div>
          <Nav
            Toggle={Toggle}
            setTapToggle={setTapToggle}
            setInput={setInput}
          ></Nav>
        </div>
        <div className={styles.body}>
          <Tap tapToggle={tapToggle}></Tap>
          {children}
        </div>
      </div>
    </inputContext.Provider>
  );
};

export default Layout;
