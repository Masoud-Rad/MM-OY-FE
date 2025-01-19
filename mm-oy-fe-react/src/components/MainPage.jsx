import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";


const MainPage = () => {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [main_url, setMainUrl] = useState("");
  const [second_url, setSecondUrl] = useState("");

  useEffect(() => {
    fetch("https://mm-oy.onrender.com/api/mainPageData")
      .then((response) => response.json())
      .then((data) => {
        setTitle1(data.mainPageData[0].title1);
        setTitle2(data.mainPageData[0].title2);
        setSubtitle(data.mainPageData[0].subtitle);
        setContent(data.mainPageData[0].content);
        setMainUrl(data.mainPageData[0].main_url);
        setSecondUrl(data.mainPageData[0].second_url);
      })
      .catch((error) => console.error("Error fetching main page content ", error));
  }, []);

  return (
    <div className="container my-5 alert alert-warning">
      <div className="row mb-2">
        <div className="col-md-5 mb-2 mb-md-0">
          <img src={main_url} className="img-fluid" alt="Main" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center ms-1 ms-lg-5 mt-2 mt-md-0">
          <h1 className="custom-title1">{title1}</h1>
          <h1 className="custom-title2">{title2}</h1>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-2 mb-md-0">
          <h2 className="lead custom-subtitle">{subtitle}</h2>
        </div>
        <div className="col-md-6">
          <img src={second_url} className="img-fluid" alt="Second" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="card-text">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;