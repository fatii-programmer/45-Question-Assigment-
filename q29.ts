// Array of favorite fruits
let favorite_fruits: string[] = ["banana", "apple", "mango"];

// Function to check and print statements based on favorite fruits
function checkFavoriteFruits(fruit: string): void {
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
            console.log(`You don't have ${fruit}s in your favorite fruits list.`);
    }
}

// Check favorite fruits
checkFavoriteFruits("banana");
checkFavoriteFruits("apple");
checkFavoriteFruits("mango");
checkFavoriteFruits("orange");
checkFavoriteFruits("grape");
