<?php
/* ============================================================
   Festival App – Database Connectie
   ============================================================
   Maakt verbinding met de MySQL database via XAMPP.
   Gebruik: require_once 'db.php'; in je API-bestanden.
   ============================================================ */

$host     = 'localhost';
$dbname   = 'festival_app';
$username = 'root';
$password = '';
$charset  = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$dbname;charset=$charset";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'error'   => true,
        'message' => 'Database connection failed: ' . $e->getMessage()
    ]);
    exit;
}

// CORS headers voor API-gebruik vanuit de frontend
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// OPTIONS preflight afhandelen
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
