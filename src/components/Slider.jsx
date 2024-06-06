import React from "react";
import jobs from "./json/jobs.json";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function removeLastWord(text) {
  // Split the text into an array of words
  var words = text.split(" ");

  // Remove the last word from the array
  var lastWord = words.pop();

  // Join the remaining words back into a string
  var result = words.join(" ");

  return {
    modifiedText: result,
    lastWord: lastWord,
  };
}

const Slider = () => {
  let a = 0;
  return (
    <>
      <div
        id="carousel"
        className="container-fluid p-0 pb-5"
        style={{ margin: "0 auto" }} // Set the max width and center the slider
      >
        <div className="owl-carousel header-carousel position-relative mb-5">
          <Carousel fade nextIcon={null} prevIcon={null} interval={10000}>
            {jobs.jobDescription.map((job, index) => (
              <Carousel.Item key={index}>
                <div className="owl-carousel-item position-relative">
                  <div
                    className="d-flex"
                    style={{ height: "100vh" }} // Set the height to fill the entire screen
                  >
                    <img
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={job.imgSlider + `${(a += 1)}.jpg`}
                      alt=""
                    />
                  </div>
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "#0A0101BB" }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="  d-flex flex-column justify-content-between col-10 col-lg-8">
                          <div>
                            <h5 className="text-primary text-uppercase mb-3 ">
                              Альфа Право
                            </h5>
                            <h1 className="display-3 text-white mb-4">
                              {removeLastWord(job.title).modifiedText + ` `}
                              <span className="text-primary">
                                {removeLastWord(job.title).lastWord}
                              </span>
                            </h1>
                          </div>

                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            {job.description}
                          </p>
                          <div>
                            <Link
                              to={job.readMore}
                              className="btn btn-primary py-md-3 px-md-5 me-3 "
                            >
                              Подробнее
                            </Link>
                            <Link
                              to={job.applyNow}
                              className="btn btn-secondary py-md-3 px-md-5"
                            >
                              Оставить заявку
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Slider;
