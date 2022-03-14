import React, { useRef } from "react";
import styles from "./Screen.module.scss";
type Props = {
  screenToggle: boolean | null;
  setScreenToggle: any;
};
const Screen = ({ screenToggle, setScreenToggle }: Props) => {
  return (
    <div className={styles.screen}>
      <div className={styles.box}></div>
      <div className={styles.box2}></div>
      <div className={styles.box3}></div>
      <h1>Youtube에 오신걸 환영합니다</h1>
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
