import React from "react";
import styles from "./Video.module.scss";
const Video = ({ clickData }: any) => {
  console.log(clickData.snippet.thumbnails.medium.url);
  return (
    <div className={styles.video}>
      <iframe
        width="100%"
        src={`https://www.youtube.com/embed/${clickData.id.videoId}`}
        allowFullScreen
        height="800px"
      ></iframe>
      <h2>{clickData.snippet.title}</h2>
      <h3>{clickData.snippet.channelTitle}</h3>
      <pre>{clickData.snippet.description}</pre>
    </div>
  );
};

export default Video;
