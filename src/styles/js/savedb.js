
    function submitForm() {


    // Получаем значения полей формы
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var purpose = document.getElementById("purpose").value;

    // Создаем объект с данными формы
    var formData = {
    name: name,
    phone: phone,
    email: email,
    message: message,
    purpose: purpose
};



    // Создаем объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Устанавливаем метод и адрес для отправки данных
    xhr.open("POST", "./php/save-form-data.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Отправляем данные формы на сервер
    xhr.send(JSON.stringify(formData));

    // Обработчик события загрузки
    xhr.onload = function() {
    if (xhr.status === 200) {
} else {
    // Действия при ошибке отправки данных
    alert("Произошла ошибка при отправке данных.");
}
};
}