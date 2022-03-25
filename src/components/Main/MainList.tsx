import React, { useEffect, useState } from "react";
import styles from "./MainList.module.scss";
import { useNavigate } from "react-router";
import axios from "axios";
import ProcessViewCount from "./ProcessViewCount";
import "moment/locale/ko";
import * as moment from "moment";
import Loading from "../../loading";
moment.locale("ko");
const MainList = ({
  id,
  thumbnail,
  title,
  setClickData,
  result,
  channelId,
  publishedAt,
  SetSubClickData,
  loding,
  setLoding,
}: any) => {
  let navigate = useNavigate();
  let [viewCount, setViewCount] = useState("");
  let [channelThumbnail, setChannelThumbnail] = useState("");
  let [channelTitle, setChannelTitle] = useState("");
  useEffect(() => {
    axios //비디오 조회수
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        result.data.items[0].statistics.viewCount &&
          setViewCount(() => result.data.items[0].statistics.viewCount);
      });
    axios //채널아이디
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&maxResults=25&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        result.data.items[0].snippet.thumbnails.default.url &&
          setChannelThumbnail(
            () => result.data.items[0].snippet.thumbnails.default.url
          );
        result.data.items[0].snippet.title &&
          setChannelTitle(() => result.data.items[0].snippet.title);
      });
  }, [id, channelId]);
  return (
    <div
      onClick={() => {
        setClickData(result);
        SetSubClickData([viewCount, channelThumbnail, channelTitle]);
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
      <div className={styles.bottomBox}>
        <img className={styles.channelImg} src={channelThumbnail} />
        <div>
          <p>{title}</p>
          <p>{channelTitle}</p>
          <span>{ProcessViewCount(viewCount)} </span>
          <span className={styles.publishedAt}>
            {"    " + moment.default(publishedAt).fromNow() + " "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainList;
