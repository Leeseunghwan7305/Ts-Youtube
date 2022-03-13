import React, {
  Children,
  useState,
  useContext,
  createContext,
  SetStateAction,
} from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import styles from "./app.module.scss";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Explore from "./components/Explore/Explore";
import Video from "./components/Video/Video";
import Screen from "./components/Screen/Screen";
function App() {
  let [clickData, setClickData] = useState<any[] | undefined>([]);
  let [data, setData] = useState<any[]>([]);
  let [tapToggle, setTapToggle] = useState<boolean>(true);
  let [screenToggle, setScreenToggle] = useState<boolean | null>(false);
  function Toggle(): void {
    setTapToggle(!tapToggle);
  }
  let [subClickData, SetSubClickData] = useState<any[]>([]);

  return (
    <div className={styles.app}>
      <div
        className={`${styles.firstScreen} ${
          screenToggle ? styles.screen : undefined
        }`}
      >
        <Screen
          setScreenToggle={setScreenToggle}
          screenToggle={screenToggle}
        ></Screen>
      </div>
      <div
        className={`${styles.youtube} ${
          screenToggle ? styles.youtubeScreen : undefined
        }`}
      >
        <Layout
          screenToggle={screenToggle}
          setScreenToggle={setScreenToggle}
          tapToggle={tapToggle}
          setTapToggle={setTapToggle}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  setClickData={setClickData}
                  data={data}
                  setData={setData}
                  SetSubClickData={SetSubClickData}
                ></Main>
              }
            ></Route>
            <Route path="/explore" element={<Explore></Explore>}></Route>
            <Route
              path="/Video"
              element={
                <Video
                  setClickData={setClickData}
                  clickData={clickData}
                  data={data}
                  tapToggle={tapToggle}
                  SetSubClickData={SetSubClickData}
                  subClickData={subClickData}
                ></Video>
              }
            ></Route>
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;
