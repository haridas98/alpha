import React from "react";
import QuoteForm from "./QuoteForm";

const Quote = () => {
  return (
    <>
      <div id="quote" className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 ">
              <h6 className="text-primary text-uppercase mb-3">Contact Us</h6>
              <h1 className="mb-5">Contact us and we will get back to you</h1>
              <p className="mb-5">
                You will be answered by excellent managers who will answer all
                your questions, consult on all topics
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
            <div className="col-lg-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
