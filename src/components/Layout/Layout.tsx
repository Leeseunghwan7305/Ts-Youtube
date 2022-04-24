import React, {
  Children,
  useState,
  useContext,
  createContext,
  SetStateAction,
} from "react";
import styles from "./Layout.module.scss";
import Nav from "../Nav/Nav";
import Tap from "../Tap/Tap";
type Props = {
  children: JSX.Element;
  tapToggle: boolean;
  setTapToggle: any;
  setScreenToggle: any;
  screenToggle: boolean | null;
};
export let inputContext = React.createContext<string | null>("");
const Layout = ({
  children,
  tapToggle,
  setTapToggle,
  setScreenToggle,
  screenToggle,
}: Props) => {
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
          <Tap
            screenToggle={screenToggle}
            setScreenToggle={setScreenToggle}
            tapToggle={tapToggle}
          ></Tap>
          {children}
        </div>
      </div>
    </inputContext.Provider>
  );
};

export default Layout;
