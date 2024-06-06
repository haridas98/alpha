import React from "react";

const Owner = () => {
  return (
    <>
      {/* Owner Start */}
      <div id="owner" className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container feature py-5 px-lg-0">
          <div className="row g-5 mx-lg-0">
            <div
              className="col-lg-6 feature-text wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 className="text-primary text-uppercase mb-3">For owners</h6>
              <h1 className="mb-5">Work with us and earn money</h1>
              <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                <i className="fa-solid fa-sack-dollar text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>More money</h5>
                  <p className="mb-0">
                    You can earn more on your truck, getting up to 10% profit
                  </p>
                </div>
              </div>
              <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                <i className="fa-solid fa-chart-line text-primary fa-3x flex-shrink-0" />
                <div className="ms-4">
                  <h5>Career Growth</h5>
                  <p className="mb-0">
                    In cooperation with us, you will have a guaranteed career
                    growth
                  </p>
                </div>
              </div>
              {/*<div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">*/}
              {/*  <i className="fa fa-headphones text-primary fa-3x flex-shrink-0" />*/}
              {/*  <div className="ms-4">*/}
              {/*    <h5>24/7 Telephone Support</h5>*/}
              {/*    <p className="mb-0">*/}
              {/*      Experienced managers of the company will be in touch with*/}
              {/*      you around the clock*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeInRight"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={"../../img/working.jpg"}
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

export default Owner;
