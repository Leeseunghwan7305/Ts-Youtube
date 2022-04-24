import React, { useRef } from "react";
import styles from "./Screen.module.scss";
type Props = {
  screenToggle: boolean | null;
  setScreenToggle: any;
};
const Screen = ({ screenToggle, setScreenToggle }: Props) => {
  return (
    <div className={styles.screen}>
      <div className={styles.scene}>
        {" "}
        <div className={styles.cube}>
          <div
            className={`${styles.cube__face} ${styles.cube__faceFront}`}
          ></div>
          <div
            className={`${styles.cube__face} ${styles.cube__faceBack}`}
          ></div>
          <div
            className={`${styles.cube__face} ${styles.cube__faceRight}`}
          ></div>
          <div
            className={`${styles.cube__face} ${styles.cube__faceLeft}`}
          ></div>
          <div className={`${styles.cube__face} ${styles.cube__faceTop}`}></div>
          <div
            className={`${styles.cube__face} ${styles.cube__faceBottom}`}
          ></div>
        </div>
      </div>
      <div className={styles.ClickCircle}>
        <button
          className={styles.button}
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
