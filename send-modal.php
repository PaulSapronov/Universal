<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$select = $_POST['select'];
$checkbox = $_POST['checkbox'];
$message = $_POST['message'];


// Формирование самого письма
    $title = "Новое сообщение";
    $body = "
    <h2>Новое сообщение</h2>
    <b>Тема:</b> $select<br>
		<b>Сообщение:</b>$message<br><br>
    <br>Почта:</br>$email<br>
		";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'pasha.glo.acc@gmail.com'; // Логин на почте
    $mail->Password   = 'yYr7QyM8'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('pasha.glo.acc@gmail.com', 'Pavel Pa'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('pavel.sapronov@mail.ru');  
    

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');