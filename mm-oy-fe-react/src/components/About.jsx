import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";

const About = () => {
  const [about, setAbout] = useState("");

  useEffect(() => {
    fetch("https://mm-oy.onrender.com/api/about")
      .then((response) => response.json())
      .then((data) => setAbout(data.about[0].content))
      .catch((error) => console.error("Error fetching about the company ", error));
  }, []);

  return (
    <div className="container my-5 alert alert-warning">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">About the company</h1>
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