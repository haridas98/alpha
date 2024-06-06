import React from "react";

const Feature = () => {
  return (
    <>
      {/* Feature Start */}
      <div
        id="feature"
        className="container-fluid overflow-hidden py-5 px-lg-0"
      >
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div className="col-lg-6 feature-text">
              <h6 className="text-primary text-uppercase mb-3">Our Features</h6>
              <h1 className="mb-5">Fulfill Your Dream</h1>
              <div className="d-flex mb-5 ">
                <i className="fa fa-flag-usa text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>All States Service</h5>
                  <p className="mb-0">
                    You have the opportunity to visit all corners of the USA.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>Modern Truck</h5>
                  <p className="mb-0">
                    We will provide you with a modern truck.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-0">
                <i className="fa fa-headphones text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>24/7 Telephone Support</h5>
                  <p className="mb-0">
                    The support service is always in touch with you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
              <div className="feature-img position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="../../img/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
    </>
  );
};

export default Feature;
