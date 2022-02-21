import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import styles from "./app.module.scss";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Explore from "./components/Explore/Explore";
function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/explore" element={<Explore></Explore>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
