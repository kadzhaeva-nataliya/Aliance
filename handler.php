<?php
$user_name = htmlspecialchars($_POST["username"]);
$user_phone = htmlspecialchars($_POST["userphone"]);

$token = "5967198356:AAGE8qlwHMfKOWqTypgrgp7P6WhRIZtBJ6k";
$chat_id = "-920564737";

$formData = array(
    "Клиент:" => $user_name,
    "Телефон:" => $user_phone
);

foreach($formData as $key => $value){
    $text .= $key . "<br>" . urlencode($value) . "</br>" . "%0A" ; /*создаем переменную $text в которую добавляется ключи и значения*/
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");

if ($sendToTelegram) {
    echo "Success";
} else {
    echo "Error";
}


/*в php точка. - соединение двух строк*/
