//First Question
 let arr1 = [3, 7, 34, 90, 12];
let lElement = arr1[arr1.length - 1];
console.log(lElement);
//

let arr2 = [true, "green", "where", 12, 56];
let last = arr2[arr2.length - 1];
console.log(last);

//2nd question
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let pets = myPets.join(" "); 
console.log(pets); 

//3 Sorting array items
var arr3=[-5,9,5,3,2,-3,6,8,4,1];
let sorted=arr3.sort((a,b)=>a-b);
console.log({sorted});

//4th question
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let nonDuplicateArr = [];
let duplicateArr = [];
arr.forEach((item) => {
    if (!nonDuplicateArr.includes(item)) {
        nonDuplicateArr.push(item); 
    } else if (!duplicateArr.includes(item)) {
        duplicateArr.push(item); 
    }
});
console.log({nonDuplicateArr});
console.log({duplicateArr});

//5th question
let arr5 = ["the", "way", "x", 4];
let text = "food";
if (arr5.includes(text)) {
    console.log(text);
} else {
    console.log("The search word was not found.");
}

//6th question
let word = "renniw";
let sortedString = word.split('').sort().join('');
console.log(sortedString);

// 7th question
let fruits=["Avocado", "Lemon", "Pineapple", "Mango", "Apple", "Popo", "Orange", "Guava", "Kiwi", "Papaya"];

fruits.splice(4,0, "Tomato");
console.log({fruits});