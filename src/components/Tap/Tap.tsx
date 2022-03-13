import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Tap.module.scss";
type Props = {
  tapToggle: boolean;
  setScreenToggle: any;
  screenToggle: boolean | null;
};
const Tap = ({ tapToggle, setScreenToggle, screenToggle }: Props) => {
  return (
    <div className={`${styles.tap} ${tapToggle ? null : styles.block}`}>
      <ul>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={styles.link}
          >
            홈
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={styles.link}
          >
            탐색
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={styles.link}
            onClick={() => {
              setScreenToggle(!screenToggle);
            }}
          >
            첫화면으로 가기
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            style={{ textDecoration: "none" }}
            className={styles.link}
          >
            구독
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            style={{ textDecoration: "none" }}
            className={styles.link}
          >
            보관함
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            style={{ textDecoration: "none" }}
            className={styles.link}
          >
            시청 기록
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            style={{ textDecoration: "none" }}
            className={styles.link}
          >
            나중에 볼 동영상
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            style={{ textDecoration: "none" }}
            className={styles.link}
          >
            좋아요 표시한 동영상
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tap;
