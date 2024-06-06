import React, { useRef } from "react";
import jobs from "../json/jobs.json";
import { Link, useParams } from "react-router-dom";
import Quote from "../Quote/Quote";
import Carousel from "react-bootstrap/Carousel";

function JobDetailsPage() {
  const { id } = useParams();
  const quoteRef = useRef(null);

  const job = jobs.jobDescription[id];

  return (
    <>
      <div
        id="feature"
        className="container-fluid overflow-hidden py-5 px-lg-0"
      >
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-lg-6 feature-text ">
              <div>
                <h2 className="text-primary">{job.title}</h2>

                <br />
                <h4>Детали услуг</h4>
                <ul>
                  {job.serviceDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <h4>Requirements:</h4>
                <ul>
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  to={{ pathname: window.location.pathname, hash: "#quote" }}
                  className="btn btn-primary py-3 px-5"
                  onClick={() => quoteRef.current.scrollIntoView()}
                >
                  Explore More
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 pe-lg-0"
              style={{
                minHeight: 400,
              }}
            >
              <div className=" h-100">
                <Carousel fade nextIcon={null} prevIcon={null} slide={true}>
                  {job.img.map((img, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={img}
                        className="carousel-image"
                        alt={job.title}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="quote" ref={quoteRef}>
        <Quote />
      </div>
    </>
  );
}

export default JobDetailsPage;
