import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);

  const API_KEY = "32RbjC9489RT7tkziFOgH7wbZStsOVRHrO5zPRQJIDuhrndl03Opu1DE";

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      //  console.log("response from API = ",res.data.photos)
      setLoader(false);
      setImages(res.data.photos);
      console.log(images);
    };

    const data = JSON.parse(localStorage.getItem("Images"))
    if(data){
      setSaved(data)
    }

    fetchImage();
  }, [search]);

  useEffect(() => {
     if(saved.length !=0){
      const json = JSON.stringify(saved)
      localStorage.setItem("Images",json)
     }
  }, [saved])
  

  console.log("Image is saved ",saved)

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                images={images}
                loader={loader}
                saved={saved}
                setSaved={setSaved}
              />
            }
          />
          <Route
            path="/saved"
            element={<Saved saved={saved} loader={loader} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
