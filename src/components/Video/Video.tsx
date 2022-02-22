import React from "react";
import styles from "./Video.module.scss";
type Props = {
  clickData: any;
  data: any[];
};
const Video = ({ clickData, data }: Props) => {
  console.log(clickData.snippet.thumbnails.medium.url);
  return (
    <div className={styles.video}>
      <div>
        <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${clickData.id.videoId}`}
          allowFullScreen
          height="400px"
        ></iframe>
        <h2>{clickData.snippet.title}</h2>
        <h3>{clickData.snippet.channelTitle}</h3>
        <pre>{clickData.snippet.description}</pre>
        <hr />
      </div>
      <div className={styles.side}>
        {data.map((result) => {
          console.log(result);
          return (
            <div className={styles.sideImg}>
              <img src={result.snippet.thumbnails.default.url}></img>
              <div>
                <p>{result.snippet.title}</p>
                <p>{result.snippet.channelTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
