<?php
ini_set('display_errors', 0);
ini_set('log_errors', 1);
require_once 'db.php';
header('Content-Type: application/json');

function check_admin_auth() {
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'message' => 'Unauthorized']);
        exit;
    }
}

check_admin_auth();

// Handle blog image upload
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if file was uploaded
    if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Please select an image to upload.'
        ]);
        exit;
    }

    $file = $_FILES['image'];
    $isLocal = ($_ENV['DB_CONNECTION'] ?? 'sqlite') === 'sqlite';

    // __DIR__ is the folder containing this PHP file.
    // Local dev:   api/ is a subfolder of the project root → go up to public/uploads/
    // Production:  PHP files sit directly at the web root   → write into uploads/ here
    $isApiSubdir = basename(__DIR__) === 'api';
    if ($isApiSubdir) {
        $uploadDir   = $isLocal
            ? __DIR__ . '/../public/uploads/blogs/'   // Next.js public/
            : __DIR__ . '/../uploads/blogs/';          // web root when api/ is a subdir
    } else {
        $uploadDir = __DIR__ . '/uploads/blogs/';      // web root when PHP is at root
    }
    
    // Create directory if it doesn't exist
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    // Validate file type
    $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif'];
    $fileType = mime_content_type($file['tmp_name']);
    
    if (!in_array($fileType, $allowedTypes)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Please upload a valid image file (JPG, PNG, WEBP, or AVIF).'
        ]);
        exit;
    }

    // Validate image dimensions and ratio
    $imageInfo = getimagesize($file['tmp_name']);
    if ($imageInfo === false) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid image file.'
        ]);
        exit;
    }

    $width = $imageInfo[0];
    $height = $imageInfo[1];

    $type = $_POST['type'] ?? 'featured'; // Default to featured if not specified

    if ($type === 'featured') {
        if ($width < 1024 || $height < 768) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Featured image must be at least 1024x768 pixels.'
            ]);
            exit;
        }
    }

    // Validate file size (max 5MB)
    if ($file['size'] > 5 * 1024 * 1024) {
        echo json_encode([
            'status' => 'error',
            'message' => 'The image is too large. Please upload an image smaller than 5MB.'
        ]);
        exit;
    }

    // Generate safe filename: derive extension from validated MIME type, not user input.
    // This prevents extension spoofing (e.g. uploading shell.php renamed to shell.jpg).
    $mimeToExt = [
        'image/jpeg' => 'jpg',
        'image/jpg'  => 'jpg',
        'image/png'  => 'png',
        'image/webp' => 'webp',
        'image/avif' => 'avif',
    ];
    $safeExtension = $mimeToExt[$fileType] ?? 'jpg';
    $filename = 'blog_' . bin2hex(random_bytes(8)) . '.' . $safeExtension;
    $filePath = $uploadDir . $filename;

    // Check if there is an old image to delete (optional, passed from frontend)
    $oldImage = $_POST['old_image'] ?? '';
    if (!empty($oldImage)) {
        deleteImage($oldImage);
    }

    // Move uploaded file
    if (move_uploaded_file($file['tmp_name'], $filePath)) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Image uploaded successfully',
            'filename' => $filename,
            'path' => '/uploads/blogs/' . $filename
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Something went wrong while saving your image. Please try again.'
        ]);
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Method not allowed'
    ]);
}
