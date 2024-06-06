import React from "react";
import { Link } from "react-router-dom";

const Working = () => {
  return (
    <>
      {/* Working Start */}
      <div
        id="working"
        className="container-fluid overflow-hidden py-5 px-lg-0"
      >
        <div className="container about py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div
              className="col-lg-6 ps-lg-0 wow fadeInLeft"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="../../img/working-us.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 about-text wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h6 className="text-danger text-uppercase mb-3"> Work with us</h6>
              <h1 className="mb-5">Decent salary and bonuses</h1>
              <p className="mb-5">
                Join our team of skilled drivers and experience a rewarding
                career with us. Enjoy flexible schedules, competitive pay, and a
                supportive work environment. Apply now and be part of our
                success!
              </p>
              <div className="row g-4 mb-5">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <i className="fa-solid fa-dollar-sign fa-3x text-primary mb-3" />
                  <h5>Global Coverage</h5>
                  <p className="m-0">
                    Track your package worldwide with our convenient tracking
                    system.
                  </p>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <i className="fa-solid fa-calendar-days fa-3x text-primary mb-3" />
                  <h5>On Time Delivery</h5>
                  <p className="m-0">
                    We ensure timely delivery of your shipments, every time.
                  </p>
                </div>
              </div>
              <Link to="/#quote" className="btn btn-primary py-3 px-5">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default Working;
