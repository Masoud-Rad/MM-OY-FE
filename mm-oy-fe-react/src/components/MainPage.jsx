
    // <div className="alert alert-warning" >


    import React, { useEffect, useState } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import "../styles.css";
    
    const MainPage = () => {
      const [title, setTitle] = useState("");
      const [subtitle, setSubtitle] = useState("");
      const [content, setContent] = useState("");
      const [main_url, setMainUrl] = useState("");
      const [second_url, setSecondUrl] = useState("");
    
      useEffect(() => {
        fetch("https://mm-oy.onrender.com/api/mainPageData")
          .then((response) => response.json())
          .then((data) => {
            setTitle(data.mainPageData[0].title);
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
            <div className="col-md-5">
              <img src={main_url} className="img-fluid" alt="Main" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <h1 >{title}</h1>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 d-flex align-items-center">
              <p className="lead">{subtitle}</p>
            </div>
            <div className="col-md-6">
              <img src={second_url} className="img-fluid" alt="Second" />
            </div>
          </div>
          <div className="row ">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body" >
                  <p className="card-text ">{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default MainPage;