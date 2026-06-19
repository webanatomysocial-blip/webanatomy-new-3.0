<?php
require_once 'db.php';

$username = 'admin';
$password = 'Webanatomy@2026';
$hash = password_hash($password, PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, 'admin')");
    $stmt->execute([$username, $hash]);
    
    // Get the newly created user ID
    $userId = $pdo->lastInsertId();
    
    // Give the admin full permissions
    $stmtPerms = $pdo->prepare("INSERT INTO user_permissions (user_id, can_manage_blogs, can_manage_ads, can_manage_comments, can_manage_announcements, can_review_blogs) VALUES (?, 1, 1, 1, 1, 1)");
    $stmtPerms->execute([$userId]);

    echo "<h1>Success!</h1>";
    echo "<p>Admin user created!</p>";
    echo "<ul><li><b>Username:</b> $username</li><li><b>Password:</b> $password</li></ul>";
    echo "<p><a href='/admin'>Go to Admin Dashboard</a></p>";
    echo "<p style='color:red'><b>IMPORTANT:</b> Please delete this <code>create_admin.php</code> file from your server now for security!</p>";
} catch (PDOException $e) {
    if (strpos($e->getMessage(), 'Duplicate entry') !== false) {
        echo "<h1>User already exists!</h1>";
        echo "<p>The admin user is already in the database.</p>";
    } else {
        echo "Error: " . $e->getMessage();
    }
}
?>
