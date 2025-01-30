import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

// filepath: /Users/mas/MM-OY-FE-1/mm-oy-fe-react/src/components/Review.jsx
const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    fetch("https://mm-oy.onrender.com/api/reviewData")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.reviews[0]);
        setReviews(data.reviews);
      })
      .catch((error) => {
        console.error("Error fetching review content ", error);
        setError("Error fetching review content");
      });
  }, []);

  const handlePrev = () => {
    setActiveItem((prevActiveItem) => (prevActiveItem === 0 ? reviews.length - 1 : prevActiveItem - 1));
  };

  const handleNext = () => {
    setActiveItem((prevActiveItem) => (prevActiveItem === reviews.length - 1 ? 0 : prevActiveItem + 1));
  };

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="review-title">
          <p>Reviews</p>
        </div>
        <div className="reviw-container">
          <button className="btn btn-light custom-carousel-control-prev" type="button" onClick={handlePrev}>
            <GrPrevious />
          </button>
          <div className="carousel-inner carousel-inner-custom">
            {reviews.map((review, index) => (
              <div key={review.id} className={`carousel-item ${index === activeItem ? 'active' : ''}`}>
                <div className={`d-block w-100 carousel-item-custom `}>
                  <h5>{review.name} :</h5>
                  <p>{review.body}</p>
                  <p><strong>{new Date(review.created_at).toLocaleDateString()}</strong></p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-light custom-carousel-control-next" type="button" onClick={handleNext}>
            <GrNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;