import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { isTemplateSpan } from "typescript";
import styles from "./Main.module.scss";
import { inputContext } from "../Layout/Layout";
import { useNavigate } from "react-router";
import Video from "../Video/Video";
import { Route, Routes } from "react-router";
import MainList from "./MainList";
type Props = {
  setClickData: any;
  data: any[];
  setData: any;
  SetSubClickData: any;
};
const Main = ({ setClickData, data, setData, SetSubClickData }: Props) => {
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
        items.id as string;
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
            <div key={index}>
              <MainList
                id={result.id.videoId ? result.id.videoId : result.id}
                thumbnail={result.snippet.thumbnails.medium.url}
                title={result.snippet.title}
                setClickData={setClickData}
                result={result}
                channelId={result.snippet.channelId}
                publishedAt={result.snippet.publishedAt}
                SetSubClickData={SetSubClickData}
              ></MainList>
            </div>
          );
        })}
    </div>
  );
};

export default Main;
