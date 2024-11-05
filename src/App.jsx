import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Like from "./pages/Like";
import Playlist from "./pages/Playlist";
import Detailes from "./pages/Detailes";
import Home from "./pages/Home";
import http from "./axios";
import MainLayouts from "./layouts/MainLayouts";
function App() {
  useEffect(() => {
    http
      .get("/browse/featured-playlists")
      .then((respons) => {
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayouts>
            <Home />
          </MainLayouts>
        }
      ></Route>
      <Route
        path="/like"
        element={
          <MainLayouts>
            <Like />
          </MainLayouts>
        }
      ></Route>
      <Route
        path="/playlist"
        element={
          <MainLayouts>
            <Playlist />
          </MainLayouts>
        }
      ></Route>
      <Route
        path="/playlist/:id"
        element={
          <MainLayouts>
            <Detailes />
          </MainLayouts>
        }
      ></Route>
    </Routes>
  );
}

export default App;
