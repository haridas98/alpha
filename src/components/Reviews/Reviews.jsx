import React from "react";
// import "./Reviews.css";
import Slider from "react-slick";

import jobs from "../json/jobs.json";

const Reviews = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Reviews" className="container-xxl py-5 ">
      <div className="container py-5">
        <div className="text-center">
          <h6 className="text-primary text-uppercase">Отзывы</h6>
          <h1 className="mb-0">Наши клиенты о нас</h1>
        </div>
        <div className="owl-carousel review-carousel">
          <Slider {...settings}>
            {jobs.reviews.map((review, index) => (
              <div className="review-item p-4 my-5">
                <div className="d-flex align-items-end mb-4">
                  <img
                    className="img-fluid flex-shrink-0"
                    src={review.img}
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">{review.name}</h5>
                    <p className="m-0">{review.role}</p>
                  </div>
                </div>
                <p className="mb-0">{review.comment}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
