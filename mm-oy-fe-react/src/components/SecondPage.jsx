// alert alert-danger

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";


const SecondPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://mm-oy.onrender.com/api/secondPageData")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => { 
        setTitle(data.secondPageData[0].title);
        setContent(data.secondPageData[0].content);
        setUrl(data.secondPageData[0].second_url); 
      })
      .catch((error) => {
        console.error("Error fetching second page content:", error);
        setError("Error fetching second page content");
      });
  }, []);

  return (
    <div className="container my-5 alert alert-danger">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">{title}</h1>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <img src={url} className="img-fluid w-100 custom-image" alt="Second Page Image" />
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

export default SecondPage;