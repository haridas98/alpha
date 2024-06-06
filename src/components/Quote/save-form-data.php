<?php
// Получаем данные формы из тела запроса
$formData = json_decode(file_get_contents('php://input'), true);

// Подключаемся к базе данных MySQL
$servername = "mysql.70992ea57c57.hosting.myjino.ru"; // Замените на адрес вашего сервера MySQL
$username = "j57513467"; // Замените на ваше имя пользователя MySQL
$password = "j57513467"; // Замените на ваш пароль MySQL
$dbname = "j57513467"; // Замените на имя вашей базы данных MySQL

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
} else {
    echo "Успешное подключение к базе данных!";
}

// Подготавливаем SQL-запрос для вставки данных формы
$stmt = $conn->prepare("INSERT INTO form_data (name, email, phone, purpose, message ) VALUES (?, ?, ?, ?, ?)");

// Привязываем значения параметров к подготовленному выражению
$stmt->bind_param("sssss", $name, $email, $phone, $purpose, $message);

// Устанавливаем значения параметров
$name = $formData['name'];
$email = $formData['email'];
$phone = $formData['phone'];
$purpose = $formData['purpose'];
$message = $formData['message'];

// Выполняем подготовленное выражение
if ($stmt->execute()) {
    // Отправляем ответ клиенту
    echo "Данные формы успешно сохранены!";
} else {
    // В случае ошибки отправляем ответ клиенту
    echo "Произошла ошибка при сохранении данных формы: " . $stmt->error;
}

// Закрываем подготовленное выражение и соединение с базой данных
$stmt->close();
$conn->close();
?>