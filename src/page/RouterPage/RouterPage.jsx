import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../../components/layout/layout";
const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index path="/home" element={<Home />} /> */}
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterPage;
