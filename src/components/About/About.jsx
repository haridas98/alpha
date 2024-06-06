import React from "react";
import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div id="about" className="container-fluid overflow-hidden py-5 px-lg-0">
      <div className="container about py-5 px-lg-0">
        <div className="row g-5 mx-lg-0">
          <div className="col-lg-6 ps-lg-0 " style={{ minHeight: 400 }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="../../img/about.jpeg"
                style={{ objectFit: "cover", objectPosition: "100%" }}
                alt=""
              />
            </div>
          </div>
          <div
            className="col-lg-6 about-text wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h6 className="text-danger text-uppercase mb-3">О нас</h6>
            <h1 className="mb-5">АЛЬФА ПРАВО</h1>
            <p className="mb-5">
              Наша юридическая компания представляет собой надежного помощника для тех, кто столкнулся с финансовыми трудностями, необходимостью оценки жилья или получением компенсации после дорожно-транспортных происшествий.
            </p>
            <div className="row g-4 mb-5">
              <div className="col-sm-6">
                <i className="fa-solid fa-user-group fa-3x text-primary mb-3" />
                <h5>Компетентные юристы</h5>
                <p className="m-0">Вам всегда окажут помощь высококвалифицированные юристы</p>
              </div>
              <div className="col-sm-6 ">
                <i className="fa-solid fa-phone-volume fa-3x text-primary mb-3" />
                <h5>24/7 работа</h5>
                <p className="m-0">
                  Круглосуточная работа над вашим делом
                </p>
              </div>
            </div>
            {location.pathname !== "/about" && (
              <Link to="/about" className="btn btn-primary py-3 px-5">
                Подробнее
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
