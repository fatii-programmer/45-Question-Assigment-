// Array of favorite fruits
var favorite_fruits = ["banana", "apple", "mango"];
// Function to check and print statements based on favorite fruits
function checkFavoriteFruits(fruit) {
    switch (fruit) {
        case "banana":
            console.log("You really like bananas!");
            break;
        case "apple":
            console.log("You really like apples!");
            break;
        case "mango":
            console.log("You really like mangoes!");
            break;
        default:
            console.log("You don't have ".concat(fruit, "s in your favorite fruits list."));
    }
}
// Check favorite fruits
checkFavoriteFruits("banana");
checkFavoriteFruits("apple");
checkFavoriteFruits("mango");
checkFavoriteFruits("orange");
checkFavoriteFruits("grape");
