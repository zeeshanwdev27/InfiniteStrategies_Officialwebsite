<?php
// -----------------------------
// CONFIGURATION
// -----------------------------
$to = "info@infinitestrategies.org"; 
$subject = "New Inquiry from Infinite Strategies Website";
$fromName = "Infinite Strategies Contact Form";

// -----------------------------
// SECURITY & VALIDATION
// -----------------------------
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "invalid_request";
    exit;
}

function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

$name     = sanitize($_POST["name"] ?? "");
$phone    = sanitize($_POST["phone"] ?? "");
$email    = sanitize($_POST["email"] ?? "");
$company  = sanitize($_POST["company"] ?? "");
$message  = sanitize($_POST["message"] ?? "");

if (empty($name) || empty($phone) || empty($email) || empty($message)) {
    echo "missing_fields";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "invalid_email";
    exit;
}

// -----------------------------
// EMAIL CONSTRUCTION
// -----------------------------
$body = "
<html>
<head>
  <title>New Inquiry from Infinite Strategies</title>
</head>
<body style='font-family: Arial, sans-serif; background-color:#f9f9f9; padding:20px;'>
  <div style='background:#fff; border-radius:8px; padding:20px;'>
    <h2 style='color:#d97706;'>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Phone:</strong> {$phone}</p>
    <p><strong>Company:</strong> {$company}</p>
    <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
  </div>
</body>
</html>
";

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$fromName} <no-reply@infinitestrategies.org>\r\n";
$headers .= "Reply-To: {$email}\r\n";

// -----------------------------
// SEND EMAIL
// -----------------------------
if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>
