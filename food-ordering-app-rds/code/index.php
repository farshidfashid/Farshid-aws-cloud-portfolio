<!DOCTYPE html>
<html>
<head>
    <title>Food Ordering App</title>
</head>
<body>
    <h2>Place Your Order</h2>
    <form action="submit_order.php" method="post">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="food_item">Food Item:</label><br>
        <input type="text" id="food_item" name="food_item" required><br><br>

        <label for="quantity">Quantity:</label><br>
        <input type="number" id="quantity" name="quantity" min="1" required><br><br>

        <input type="submit" value="Place Order">
    </form>
</body>
</html>
