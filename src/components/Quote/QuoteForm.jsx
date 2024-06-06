import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [purpose, setPurpose] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Получение значения из URL и преобразование в числовой формат
    const urlValue = parseInt(location.pathname.split("/").pop(), 10);

    // Установка значения purpose в зависимости от значения в URL
    if (urlValue === 0) {
      setPurpose("BFL");
    } else if (urlValue === 1) {
      setPurpose("Flats");
    } else if (urlValue === 2) {
      setPurpose("DTP");
    }
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
    setSubmitted(true);
  };

  function submitForm() {
    // Получаем значения полей формы
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var purpose = document.getElementById("purpose").value;

    if (purpose === "") {
      purpose = "BFL";
    }

    // Создаем объект с данными формы
    var formData = {
      name: name,
      phone: phone,
      email: email,
      message: message,
      purpose: purpose,
    };

    document.getElementById("form").style.display = "none";
    document.getElementById("success-message").style.display = "block";
    // Создаем объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Устанавливаем метод и адрес для отправки данных
    xhr.open("POST", "save-form-data.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Отправляем данные формы на сервер
    xhr.send(JSON.stringify(formData));

    // Обработчик события загрузки
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Действия при успешной отправке данных
      } else {
        // Действия при ошибке отправки данных
        alert("Произошла ошибка при отправке данных.");
      }
    };
  }

  return (
    <>
      <div
        id="form"
        className={`bg-light text-center p-5 ${submitted ? "d-none" : ""}`}
        data-wow-delay="0.5s"
      >
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <input
                type="text"
                id="name"
                name="name"
                required=""
                className="form-control border-0"
                placeholder="Ваше Имя"
                style={{ height: 55 }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                type="email"
                id="email"
                name="email"
                required=""
                className="form-control border-0"
                placeholder="Ваша почта"
                style={{ height: 55 }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                type="tel"
                id="phone"
                name="phone"
                required=""
                className="form-control border-0"
                placeholder="Телефон"
                style={{ height: 55 }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <select
                className="form-select border-0"
                id="purpose"
                name="purpose"
                style={{ height: 55 }}
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="BFL">Банкротство физлиц</option>
                <option value="Flats">Экспертиза квартир</option>
                <option value="DTP">Компенсации ДТП</option>
              </select>
            </div>
            <div className="col-12">
              <textarea
                id="message"
                name="message"
                className="form-control border-0"
                placeholder="Описание"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Отправить
            </button>
          </div>
        </form>
      </div>
      <div
        id="success-message"
        className="bg-primary text-center p-5"
        data-wow-delay="0.5s"
        style={{ display: "none" }}
      >
        <h1 className="">Спасибо за заявку, мы с вами свяжемся!</h1>
      </div>
    </>
  );
};

export default QuoteForm;
