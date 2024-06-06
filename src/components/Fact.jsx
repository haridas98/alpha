import React from "react";

const Fact = () => {
  return (
    <>
      {/* Fact Start */}
      <div id="fact" className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
              <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
              <p className="mb-5">
                We are a top freight delivery company known for our reliable and
                efficient solutions. Our team of logistics experts ensures
                flawless execution of every delivery. We offer transportation
                services across all states of America, along with warehouse
                storage and inventory management. With our superior tracking
                system, clients can monitor their shipments in real-time. Join
                us, become a member of our team.
              </p>
              <div className="d-flex align-items-center">
                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
                <div className="ps-4">
                  <h6>Call for any query!</h6>
                  <h3 className="text-primary m-0">
                    <a href="tel:+14044340075">+1 404 4340075</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <div
                    className="bg-secondary p-4 mb-4 wow fadeIn"
                    data-wow-delay="0.3s"
                  >
                    <i className="fa fa-users fa-2x text-white mb-3" />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      4805
                    </h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                  <div
                    className="bg-primary p-4 wow fadeIn"
                    data-wow-delay="0.5s"
                  >
                    <i className="fa-solid fa-truck-fast  fa-2x text-white mb-3" />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      12500
                    </h2>
                    <p className="text-white mb-0">Complete delivery</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="bg-primary p-4 wow fadeIn"
                    data-wow-delay="0.7s"
                  >
                    <i className="fa fa-star fa-2x text-white mb-3" />
                    <h2 className="text-white mb-2" data-toggle="counter-up">
                      3500
                    </h2>
                    <p className="text-white mb-0">Customer Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fact End */}
    </>
  );
};

export default Fact;
