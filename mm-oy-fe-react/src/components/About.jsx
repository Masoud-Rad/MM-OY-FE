import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";

const About = () => {
  const [about, setAbout] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");

  useEffect(() => {
    fetch("https://mm-oy.onrender.com/api/about")
      .then((response) => response.json())
      .then((data) => {
        setAbout(data.about[0].content);
        setUrl1(data.about[0].url1);
        setUrl2(data.about[0].url2);
      })
      .catch((error) => console.error("Error fetching about the company ", error));
  }, []);

  return (
    <div className="container my-5 alert alert-warning">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">About the Company</h1>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="card shadow-sm">
            <img src={url1} className="card-img-top" alt="Company Image 1" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img src={url2} className="card-img-top" alt="Company Image 2" />
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="card-text">{about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;