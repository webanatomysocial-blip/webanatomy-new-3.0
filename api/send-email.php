<?php
require_once 'db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = $_POST;

if (empty($input)) {
    $json = json_decode(file_get_contents('php://input'), true);
    if ($json) {
        $input = $json;
    }
}

if (empty($input)) {
    echo json_encode(["success" => false, "message" => "No data provided."]);
    exit();
}

$name    = htmlspecialchars(trim($input['name'] ?? 'No Name'), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = htmlspecialchars(trim($input['phone'] ?? 'Not provided'), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($input['message'] ?? 'No message'), ENT_QUOTES, 'UTF-8');

// Recipient is always taken from server env - never from form input
$toEmail = $_ENV['CONTACT_TO'] ?? 'reddydheeraj2109@gmail.com';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

$subject  = "New Contact Form Submission - Webanatomy";
$htmlBody = "
<div style=\"font-family: Arial, sans-serif; max-width: 600px;\">
  <h2 style=\"color: #1a1a1a;\">New Contact Form Submission</h2>
  <p><strong>Name:</strong> {$name}</p>
  <p><strong>Email:</strong> {$email}</p>
  <p><strong>Phone:</strong> {$phone}</p>
  <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
  <hr style=\"border:none;border-top:1px solid #eee;\">
  <p style=\"color:#888;font-size:12px;\">Sent via the Webanatomy contact form</p>
</div>";

try {
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USER'] ?? 'reddydheeraj2109@gmail.com';
    $mail->Password   = $_ENV['SMTP_PASS'] ?? '';
    $mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = (int)($_ENV['SMTP_PORT'] ?? 465);
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($_ENV['SMTP_FROM'] ?? 'reddydheeraj2109@gmail.com', $_ENV['SMTP_FROM_NAME'] ?? 'Webanatomy');
    $mail->addAddress($toEmail);
    if ($email) {
        $mail->addReplyTo($email, $name);
    }

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $htmlBody;

    $mail->send();
    echo json_encode(["success" => true, "message" => "Message sent successfully."]);

} catch (\Exception $e) {
    error_log("PHPMailer Error: " . (isset($mail) ? $mail->ErrorInfo : $e->getMessage()));

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $from     = $_ENV['SMTP_FROM'] ?? 'reddydheeraj2109@gmail.com';
    $headers .= "From: {$from}\r\n";
    if ($email) {
        $headers .= "Reply-To: {$email}\r\n";
    }

    if (mail($toEmail, $subject, $htmlBody, $headers)) {
        echo json_encode(["success" => true, "message" => "Message sent successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send message. Please try again later."]);
    }
}
?>
