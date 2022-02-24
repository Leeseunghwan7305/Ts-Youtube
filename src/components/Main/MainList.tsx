import React, { useEffect, useState } from "react";
import styles from "./MainList.module.scss";
import { useNavigate } from "react-router";
import axios from "axios";
const MainList = ({
  id,
  thumbnail,
  title,
  setClickData,
  result,
  setSubData,
  channelId,
  subData,
}: any) => {
  let navigate = useNavigate();
  let [viewCount, setViewCount] = useState();
  let [channelThumbnail, setChannelThumbnail] = useState();
  let [channelTitle, setChannelTitle] = useState();
  useEffect(() => {
    axios //비디오 조회수
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        console.log(result.data.items[0].statistics.viewCount);
        setViewCount(result.data.items[0].statistics.viewCount);
      });
    axios //채널아이디
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&maxResults=25&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        console.log(result.data.items[0].snippet);
        console.log(result.data.items[0].snippet.title);
        setChannelThumbnail(
          result.data.items[0].snippet.thumbnails.default.url
        );
        setChannelTitle(result.data.items[0].snippet.title);
      });
  }, [id, channelId]);
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
      <div>
        <img src={channelThumbnail} />
        <div>
          <p>{title}</p>
          <p>{channelTitle}</p>
          <p>조회수 :{viewCount}</p>
        </div>
      </div>
    </div>
  );
};

export default MainList;
