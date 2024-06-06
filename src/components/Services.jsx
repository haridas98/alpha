import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobDetailsPage from "./Jobs/JobDetailsPage";
import jobs from "./json/jobs.json";

function Services() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);

  const handleShowMore = (index) => {
    setSelectedJobIndex(index);
  };
  return (
    <>
      {/* Services Start */}
      <div id="price" className="container-xxl py-5">
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">Альфа право</h6>
            <h1 className="mb-5">Наши услуги</h1>
          </div>
          <div className="row g-4">
            {jobs.jobDescription.map((job, index) => {
              return (
                <div
                  className="col-md-6 col-lg-4"
                  style={{ height: "710px" }}
                  key={index}
                >
                  <div className="price-item " style={{ height: "720px" }}>
                    <Link
                      to={`/job/${index}`}
                      onClick={() => handleShowMore(index)}
                    >
                      <div className="border-bottom p-4 mb-4 text-center">
                        <h3 className="text-primary mb-1 ">{job.title}</h3>

                      </div>
                    </Link>

                    <div
                      className="p-4 pt-0"
                      style={{
                        display: "flex",
                        height: "545px",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        {job.serviceDetails.map((serviceDetail, serviceDetailIndex) => (
                          <p>
                            <i
                              className="fa fa-check text-success me-3"
                              key={serviceDetailIndex}
                            />
                            {serviceDetail}
                          </p>
                        ))}
                      </div>
                      <div>
                        <Link
                          className="btn btn-primary py-3 px-5"
                          to={`/job/${index}`}
                          onClick={() => handleShowMore(index)}
                        >
                          <span>Подробнее</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Render JobDetailsPage if a job is selected */}
    </>
  );
}

export default Services;
