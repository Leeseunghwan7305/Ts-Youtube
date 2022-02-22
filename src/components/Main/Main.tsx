import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { isTemplateSpan } from "typescript";
import styles from "./Main.module.scss";
import { inputContext } from "../Layout/Layout";
import { useNavigate } from "react-router";
import Video from "../Video/Video";
import { Route, Routes } from "react-router";
const Main = ({ setClickData }: any) => {
  type Data = {};
  let [data, setData] = useState<any[]>([]);
  let input = useContext(inputContext);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        let items = result.data.items;
        setData(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        let items = result.data.items;
        setData(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [input]);
  return (
    <div className={styles.main}>
      {data &&
        data.map((result, index) => {
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
                key={index}
                className={styles.img}
                src={result.snippet.thumbnails.medium.url}
              ></img>
              <p>{result.snippet.title}</p>
              <p>조회수: 1000회</p>
            </div>
          );
        })}
    </div>
  );
};

export default Main;
