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
import { useNavigate } from "react-router";
type Props = {
  Toggle: () => void;
  setTapToggle: any;
  setInput: any;
};
const Nav = ({ Toggle, setTapToggle, setInput }: Props) => {
  const navigate = useNavigate();
  let inputRef = useRef<HTMLInputElement | any>();
  function press(e: React.KeyboardEvent<HTMLDivElement>) {
    if (inputRef.current.value != false && e.key == "Enter") {
      setInput(inputRef.current.value);
      console.log(inputRef.current.value);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }
  return (
    <header className={styles.head}>
      <div>
        <FontAwesomeIcon
          onClick={Toggle}
          className={styles.icon}
          icon={faBars}
        />
        <img
          onClick={() => {
            navigate("/");
          }}
          src={youtube_logo}
          alt="로고"
          className={styles.logo}
        />
      </div>
      <div className={styles.centerTap}>
        <input
          className={styles.input}
          placeholder="여기에 입력을 해주세요"
          ref={inputRef}
          onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => press(e)}
          list="youtube-options"
        ></input>
        <datalist id="youtube-options">
          <option value="드림코딩" />
          <option value="코딩애플" />
          <option value="노마드코더" />
          <option value="멜론탑100" />
          <option value="next.js" />
        </datalist>
        <FontAwesomeIcon
          onClick={() => {
            if (inputRef.current.value != false) {
              setInput(inputRef.current.value);
              console.log(inputRef.current.value);
              inputRef.current.value = "";
              inputRef.current.focus();
            }
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
