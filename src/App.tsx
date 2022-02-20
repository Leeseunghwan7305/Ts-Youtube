import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import styles from "./app.module.scss";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/explore" element={<Main></Main>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
