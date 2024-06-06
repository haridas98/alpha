import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jobs from "./json/jobs.json";
import { Link } from "react-router-dom";

function Advantages() {
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
    <>
      <div id="service" className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">Почему именно мы?</h6>
            <h1 className="mb-5">Наши преимущества</h1>
          </div>
          <div className="row g-4">
            <Slider {...settings}>
              {jobs.whyUs.map((job, index) => (
                <div key={index}>
                  <div
                    className="service-item p-4"
                    style={{ margin: "25px 25px" }}
                  >
                    <div
                      className="overflow-hidden mb-4"
                      style={{
                        height: "250px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img className="img-fluid" src={job.img} alt="" />
                    </div>
                    <h4 className="mb-3">{job.title}</h4>
                    <p>{job.description}</p>
                    <Link className="btn-slide mt-2" to={job.applyNow}>
                      <i className="fa fa-arrow-right" />
                      <span>Оставить заявку</span>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advantages;
