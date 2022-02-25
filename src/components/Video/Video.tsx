import React from "react";
import styles from "./Video.module.scss";
import VideoList from "./VideoList";
type Props = {
  clickData: any | undefined;
  data: any[];
  setClickData: any;
  tapToggle: boolean;
};
const Video = ({ clickData, data, setClickData, tapToggle }: Props) => {
  return (
    <div
      className={`${styles.video}  ${
        tapToggle ? styles.margin : styles.center
      }`}
    >
      <div
        className={`${styles.videoImg}  
        `}
      >
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
        <h3>{clickData ? clickData.snippet.channelTitle : null}</h3>
        <hr />
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
            ></VideoList>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
