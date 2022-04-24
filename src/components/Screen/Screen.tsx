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
          <div className={`${styles.cube__face} ${styles.cube__faceFront}`}>
            front
          </div>
          <div className={`${styles.cube__face} ${styles.cube__faceBack}`}>
            back
          </div>
          <div className={`${styles.cube__face} ${styles.cube__faceRight}`}>
            right
          </div>
          <div className={`${styles.cube__face} ${styles.cube__faceLeft}`}>
            left
          </div>
          <div className={`${styles.cube__face} ${styles.cube__faceTop}`}>
            top
          </div>
          <div className={`${styles.cube__face} ${styles.cube__faceBottom}`}>
            bottom
          </div>
        </div>
      </div>
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
