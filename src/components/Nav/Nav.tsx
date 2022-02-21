import React, { SetStateAction, useRef } from "react";
import styles from "./Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import youtube_logo from "./youtube_logo.png";
type Props = {
  Toggle: () => void;
  setTapToggle: any;
  setInput: any;
};
const Nav = ({ Toggle, setTapToggle, setInput }: Props) => {
  let inputRef = useRef<HTMLInputElement | any>();
  return (
    <header className={styles.head}>
      <div>
        <FontAwesomeIcon
          onClick={Toggle}
          className={styles.icon}
          icon={faBars}
        />
        <img src={youtube_logo} alt="로고" className={styles.logo} />
      </div>
      <div className={styles.centerTap}>
        <input
          className={styles.input}
          placeholder="여기에 입력을 해주세요"
          ref={inputRef}
        ></input>
        <FontAwesomeIcon
          onClick={() => {
            setInput(inputRef.current.value);
          }}
          className={`${styles.icon} ${styles.icons}`}
          icon={faMagnifyingGlass}
        />
        <FontAwesomeIcon className={styles.icon} icon={faMicrophone} />
        <FontAwesomeIcon className={styles.icon} icon={faVideo} />
      </div>
      <div className={styles.tap}>
        <FontAwesomeIcon className={styles.icon} icon={faShapes} />
        <FontAwesomeIcon className={styles.icon} icon={faClock} />
      </div>
    </header>
  );
};

export default Nav;
