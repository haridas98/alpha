import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ marginTop: "6rem" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Контакты</h4>
              {/*                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>*/}
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                <Link to="tel:+79270888841">+7 927 088 8841</Link>
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                uslugi@alphapravo.ru
              </p>
              <div className="d-flex pt-2">
                <Link className="btn btn-outline-light btn-social" to="#">
                  <i className="fab fa-instagram" />
                </Link>
                <Link className="btn btn-outline-light btn-social" to="#">
                  <i className="fab fa-vk" />
                </Link>
                <Link className="btn btn-outline-light btn-social" to="#">
                  <i className="fab fa-youtube" />
                </Link>
                <Link className="btn btn-outline-light btn-social" to="#">
                  <i className="fab fa-square-odnoklassniki" />
                </Link>
              </div>
            </div>
            {/*                <div class="col-lg-3 col-md-6">*/}
            {/*                    <h4 class="text-light mb-4">Services</h4>*/}
            {/*                    <Link class="btn btn-link" to="#">Air Freight</a>*/}
            {/*                    <Link class="btn btn-link" to="#">Sea Freight</a>*/}
            {/*                    <Link class="btn btn-link" to="#">Road Freight</a>*/}
            {/*                    <Link class="btn btn-link" to="#">Logistic Solutions</a>*/}
            {/*                    <Link class="btn btn-link" to="#">Industry solutions</a>*/}
            {/*                </div>*/}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Альфа Право</h4>
              <Link className="btn btn-link" to="/">
                Главная
              </Link>
              <Link className="btn btn-link" to="/about">
                О нас
              </Link>
              <Link className="btn btn-link" to="/#advantages">
                Преимущества
              </Link>
              <Link className="btn btn-link" to="/#price">
                Наши услуги
              </Link>
              <Link className="btn btn-link" to="/job/0">
                Банкротство
              </Link>
              <Link className="btn btn-link" to="/job/1">
                Экспертиза квартир
              </Link>
              <Link className="btn btn-link" to="/job/2">
                Компенсации ДТП
              </Link>

              <Link className="btn btn-link" to="/#quote">
                Контакты
              </Link>
            </div>
            {/*                <div class="col-lg-3 col-md-6">*/}
            {/*                    <h4 class="text-light mb-4">Newsletter</h4>*/}
            {/*                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>*/}
            {/*                    <div class="position-relative mx-auto" style="max-width: 400px;">*/}
            {/*                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">*/}
            {/*                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <Link className="border-bottom" to="#">
                  Альфа Право
                </Link>
                , Все права зарегистрированы 2024
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By{" "}
                <Link className="border-bottom" to="https://vk.com/haridas1998">
                  GauraService
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};

export default Footer;
