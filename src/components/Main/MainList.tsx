import React, { useEffect } from "react";
import styles from "./MainList.module.scss";
import { useNavigate } from "react-router";
import axios from "axios";
const MainList = ({ id, thumbnail, title, setClickData, result }: any) => {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        console.log(result.data.items);
      });
  }, []);
  return (
    <div
      onClick={() => {
        setClickData(result);
        navigate("/Video");
      }}
      className={styles.box}
    >
      <img
        onClick={() => {
          console.log("ee");
        }}
        className={styles.img}
        src={thumbnail}
      ></img>
      <p>{title}</p>
      <p>조회수: 1000회</p>
    </div>
  );
};

export default MainList;
