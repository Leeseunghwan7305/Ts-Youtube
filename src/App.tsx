import React, { Children, useState, useContext, createContext } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import styles from "./app.module.scss";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Explore from "./components/Explore/Explore";
import Video from "./components/Video/Video";
function App() {
  let [clickData, setClickData] = useState<any[]>([]);
  let [data, setData] = useState<any[]>([]);
  return (
    <div className={styles.app}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                setClickData={setClickData}
                data={data}
                setData={setData}
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
              ></Video>
            }
          ></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
