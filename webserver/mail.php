<?php
if (isset($_POST['access_token']) && $_POST['access_token'] == "6971c836-6bd8-11ea-bc55-0242ac130003") {
    $to      = $_POST['to'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = 'From: no-reply@hackcrisis.com' . "\r\n" .
        'Reply-To: no-reply@hackcrisis.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    echo 'Sent';
} else {
    header("HTTP/1.1 401 OK");
    echo "Unauthorized";
}
?>
