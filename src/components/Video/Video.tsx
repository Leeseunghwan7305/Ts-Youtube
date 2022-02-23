import React from "react";
import styles from "./Video.module.scss";
type Props = {
  clickData: any;
  data: any[];
  setClickData: any;
};
const Video = ({ clickData, data, setClickData }: Props) => {
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
          return (
            <div
              onClick={() => {
                setClickData(result);
              }}
              className={styles.sideImg}
            >
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
