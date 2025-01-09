import MainPage from "./MainPage";
import Review from "./Review";
import SecondPage from "./SecondPage";

import React from "react";

const Home = () => {
  return (
    <div className="container my-5">
      <MainPage />
      <SecondPage />
      <Review />
    </div>
  );
};

export default Home;
