<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $food_item = $_POST['food_item'];
    $quantity = $_POST['quantity'];

    $stmt = $conn->prepare("INSERT INTO orders (name, food_item, quantity) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $name, $food_item, $quantity);

    if ($stmt->execute()) {
        echo "<h3>Order placed successfully!</h3>";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
