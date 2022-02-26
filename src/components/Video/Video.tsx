import axios from "axios";
import React, { useState } from "react";
import styles from "./Video.module.scss";
import VideoList from "./VideoList";
type Props = {
  clickData: any | undefined;
  data: any[];
  setClickData: any;
  tapToggle: boolean;
};
const Video = ({ clickData, data, setClickData, tapToggle }: Props) => {
  let [subClickData, SetSubClickData] = useState<any[]>([]);
  let [userComment, setUserComment] = useState<any[]>([]);
  axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=25&videoId=${
        clickData.id.videoId ? clickData.id.videoId : clickData.id
      }&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
    )
    .then((result) => {
      setUserComment(() => result.data.items);
    });
  return (
    <div
      className={`${styles.video}  ${
        tapToggle ? styles.margin : styles.center
      }`}
    >
      <div className={styles.videoImg}>
        <iframe
          width="100%"
          title="youtube video player"
          src={`https://www.youtube.com/embed/${
            clickData.id.videoId ? clickData.id.videoId : clickData.id
          }`}
          allowFullScreen
          height="600px"
        ></iframe>
        <h2>{clickData ? clickData.snippet.title : null}</h2>
        <span>조회수:{subClickData && subClickData[0]}회</span>
        <hr />
        <div className={styles.introduce}>
          <img src={subClickData[1]}></img>
          <h1>{subClickData[2]}</h1>
        </div>
        <hr />
        <div>
          {userComment.map((item) => (
            <div className={styles.userComment}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              />
              <div>
                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                <p>{item.snippet.topLevelComment.snippet.likeCount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.side}>
        {data.map((result) => {
          return (
            <VideoList
              id={result.id.videoId ? result.id.videoId : result.id}
              thumbnail={result.snippet.thumbnails.medium.url}
              title={result.snippet.title}
              setClickData={setClickData}
              result={result}
              channelId={result.snippet.channelId}
              publishedAt={result.snippet.publishedAt}
              SetSubClickData={SetSubClickData}
            ></VideoList>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
