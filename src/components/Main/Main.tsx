import React, { useEffect, useState } from "react";
import axios from "axios";
import { isTemplateSpan } from "typescript";
import styles from "./Main.module.scss";
const Main = () => {
  type Data = {};
  let [data, setData] = useState<any[]>([]);
  useEffect(() => {
    console.log("ㅏㅏ");
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        let items = result.data.items;
        console.log(items);
        setData(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.main}>
      {data &&
        data.map((result) => {
          console.log(result);
          return (
            <img
              className={styles.img}
              src={result.snippet.thumbnails.medium.url}
            ></img>
          );
        })}
    </div>
  );
};

export default Main;
