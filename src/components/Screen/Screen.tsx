import React, { useRef } from "react";
import styles from "./Screen.module.scss";
type Props = {
  screenToggle: boolean | null;
  setScreenToggle: any;
};
const Screen = ({ screenToggle, setScreenToggle }: Props) => {
  return (
    <div className={styles.screen}>
      <div className={styles.ClickCircle}>
        <button
          onClick={() => {
            setScreenToggle(!screenToggle);
          }}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default Screen;
