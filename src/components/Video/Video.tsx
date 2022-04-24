import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Video.module.scss";
import VideoList from "./VideoList";
import Loading from "../../loading";
type Props = {
  clickData: any | undefined;
  data: any[];
  setClickData: any;
  tapToggle: boolean;
  SetSubClickData: any;
  subClickData: any;
  loding: any;
  setLoding: any;
};
const Video = ({
  clickData,
  data,
  setClickData,
  tapToggle,
  SetSubClickData,
  subClickData,
  loding,
  setLoding,
}: Props) => {
  let [userComment, setUserComment] = useState<any[]>([]);
  let [sortButton, setSortButton] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=25&videoId=${
          clickData.id.videoId ? clickData.id.videoId : clickData.id
        }&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        console.log(result);
        setUserComment(() => result.data.items);
      });
  }, [subClickData]);
  function sortBtn() {
    let arr = [...userComment];
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (
          arr[i].snippet.topLevelComment.snippet.likeCount <
          arr[j].snippet.topLevelComment.snippet.likeCount
        ) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    setUserComment(arr);
  }
  function reset() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=25&videoId=${
          clickData.id.videoId ? clickData.id.videoId : clickData.id
        }&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((result) => {
        setUserComment(() => result.data.items);
      });
  }
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
          <button className={styles.subscribe}>구독하기</button>
          <div className={styles.sortBox}>
            <button
              className={styles.lookBox}
              onClick={() => {
                setSortButton(!sortButton);
              }}
            >
              {sortButton ? "탭닫기" : "정렬하기"}
            </button>
            {sortButton ? (
              <div className={styles.hideButton}>
                <button
                  onClick={() => {
                    sortBtn();
                  }}
                >
                  좋아요순
                </button>
                <button
                  onClick={() => {
                    reset();
                  }}
                >
                  원래대로
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <hr />
        <div className={styles.userComments}>
          {userComment.map((item) => (
            <div className={styles.userComment}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              />
              <div className={styles.userContent}>
                <p>{item.snippet.topLevelComment.snippet.authorDisplayName}</p>
                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                <p>추천수:{item.snippet.topLevelComment.snippet.likeCount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.side}>
        {data.map((result) => {
          return (
            <VideoList
              loding={loding}
              setLoding={setLoding}
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
