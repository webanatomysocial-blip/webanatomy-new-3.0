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

// Form fields: name (firstName + lastName), email, phone (countryCode + phone number), message
$name    = htmlspecialchars(trim($input['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = htmlspecialchars(trim($input['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($input['message'] ?? ''), ENT_QUOTES, 'UTF-8');

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "A valid email address is required."]);
    exit();
}

if (empty($message)) {
    echo json_encode(["success" => false, "message" => "Message is required."]);
    exit();
}

if (empty($name)) {
    $name = 'Anonymous';
}

$formType = htmlspecialchars(trim($input['formType'] ?? 'contact'), ENT_QUOTES, 'UTF-8');

// Recipient is always taken from server env - never from form input
$toEmail = $_ENV['CONTACT_TO'] ?? 'webanatomysocial@gmail.com';

// Save submission to DB (optional/graceful check for table)
try {
    if (isset($pdo)) {
        $auto_inc_val = isset($auto_inc) ? $auto_inc : (($db_connection ?? 'sqlite') === 'mysql' ? 'AUTO_INCREMENT' : 'AUTOINCREMENT');
        
        $pdo->exec("CREATE TABLE IF NOT EXISTS contact_submissions (
            id INTEGER PRIMARY KEY $auto_inc_val,
            name VARCHAR(255),
            email VARCHAR(255),
            phone VARCHAR(100),
            message TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )");
        
        $stmt = $pdo->prepare("INSERT INTO contact_submissions (name, email, phone, message) VALUES (?, ?, ?, ?)");
        $stmt->execute([$name, $email, $phone, $message]);
    }
} catch (Exception $e) {
    error_log("DB storage failed: " . $e->getMessage());
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

$subject  = "New Contact Form Submission - Webanatomy";
$role = htmlspecialchars(trim($input['role'] ?? ''), ENT_QUOTES, 'UTF-8');

$htmlBody = "
<div style=\"font-family: Arial, sans-serif; max-width: 600px;\">
  <h2 style=\"color: #1a1a1a;\">New Contact Form Submission</h2>
  <p><strong>Name:</strong> {$name}</p>
  <p><strong>Email:</strong> {$email}</p>
  <p><strong>Phone:</strong> {$phone}</p>";
  
if (!empty($role)) {
    $htmlBody .= "<p><strong>Role Applied For:</strong> {$role}</p>";
}

$htmlBody .= "
  <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
  <hr style=\"border:none;border-top:1px solid #eee;\">
  <p style=\"color:#888;font-size:12px;\">Sent via the Webanatomy contact form</p>
</div>";

try {
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);

    $mail->isSMTP();
    $mail->SMTPDebug  = 2;
    $mail->Debugoutput = 'error_log';
    $mail->Host       = $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USER'] ?? 'webanatomysocial@gmail.com';
    $mail->Password   = $_ENV['SMTP_PASS'] ?? '';
    $mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = (int)($_ENV['SMTP_PORT'] ?? 465);
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($_ENV['SMTP_FROM'] ?? 'webanatomysocial@gmail.com', $_ENV['SMTP_FROM_NAME'] ?? 'Webanatomy');
    
    // Switch recipients based on formType
    $mail->addAddress('webanatomysocial@gmail.com');
    if ($formType === 'careers') {
        $mail->addAddress('udaya@mosol9.com');
        $mail->addAddress('priya.k@mosol9.com');
        $mail->addAddress('Srujan@mosol9.com');
        $mail->addAddress('supraja@mosol9.com');
    } else {
        $mail->addAddress('Moumita@Thewebanatomy.com');
    }

    if ($email) {
        $mail->addReplyTo($email, $name);
    }

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $htmlBody;

    if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
        $mail->addAttachment($_FILES['resume']['tmp_name'], $_FILES['resume']['name']);
    }

    $mail->send();
    echo json_encode(["success" => true, "message" => "Message sent successfully."]);

} catch (\Exception $e) {
    error_log("PHPMailer Error: " . (isset($mail) ? $mail->ErrorInfo : $e->getMessage()));

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $from     = $_ENV['SMTP_FROM'] ?? 'webanatomysocial@gmail.com';
    $headers .= "From: {$from}\r\n";
    if ($email) {
        $headers .= "Reply-To: {$email}\r\n";
    }

    $allRecipients = 'webanatomysocial@gmail.com';
    if ($formType === 'careers') {
        $allRecipients .= ', udaya@mosol9.com, priya.k@mosol9.com, Srujan@mosol9.com, supraja@mosol9.com';
    } else {
        $allRecipients .= ', Moumita@Thewebanatomy.com';
    }

    if (mail($allRecipients, $subject, $htmlBody, $headers)) {
        echo json_encode(["success" => true, "message" => "Message sent successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => isset($mail) ? $mail->ErrorInfo : $e->getMessage()]);
    }
}
?>
