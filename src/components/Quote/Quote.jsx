import React from "react";
import QuoteForm from "./QuoteForm";

const Quote = () => {
  return (
    <>
      <div id="quote" className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 ">
              <h6 className="text-primary text-uppercase mb-3">Свяжитесь с нами</h6>
              <h1 className="mb-5">Оставьте заявку или позвоните</h1>
              <p className="mb-5">
                Наши менеджеры с вами свяжутся, проконсультируют вас с дальнейшими действиями
              </p>
              <div className="d-flex align-items-center">
                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
                <div className="ps-4">
                  <h6>Звоните, мы доступны круглосуточно</h6>
                  <h3 className="text-primary m-0">
                    <a href="tel:+79270888841">+7 927 088 8841</a>
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
