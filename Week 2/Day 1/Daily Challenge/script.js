//Exercise 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0);
console.log(fruits);

let sortedFruits= fruits.sort();
console.log(sortedFruits);

sortedFruits.push("Kiwi");
console.log(sortedFruits);

sortedFruits=["Apples", "Blueberries", "Oranges", "Kiwi"]

let firstItem = sortedFruits[0];
console.log(firstItem)

console.log(sortedFruits.length) //->4
console.log(sortedFruits[sortedFruits.length-0]);

let reversedFruits= sortedFruits.reverse();
console.log(reversedFruits);

//Exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits);
let firstItem= moreFruits[0];
console.log(firstItem)
let secItem= moreFruits[1];
console.log(secItem);
let thirdItem= secItem[1];
console.log(thirdItem);
console.log(thirdItem[0]);