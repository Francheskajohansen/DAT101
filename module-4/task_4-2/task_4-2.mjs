"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1: Array Creation & Traversal----------------------------------------------------------------------------------------------");
// Hard-code numbers 1-20
const numbers = [];
for(let i = 1; i <= 20; i++) {
  numbers.push(i);
}
for (let i = 0; i < numbers.length; i++) {
    printOut(numbers [i]); 
}
printOut(newLine); 

printOut("--- Part 2: Array joining ----------------------------------------------------------------------------------------------");
printOut(numbers.join(", "));
printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const text = "Hei på deg, hvordan har du det?"; 
const words = text.split(" ");

for (let i = 0; i < words.length; i++) {
  printOut("Index " + i + ": " + words[i]);
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

const girls = [
  "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
]; 

function removeName(arr, name) {
  const index = arr.indexOf(name);

  if (index !== -1) {
    arr.splice(index, 1);
    printOut(name + " removed"); 
  } else {
    printOut(name + " not found"); 
  }
}

removeName(girls, "Anne"); 
printOut(girls.join(", "));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const boys = [
  "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"
];

const allNames = girls.concat(boys); 
printOut(allNames.join(", "));
printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

class TBook {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  toString() {
    return this.title + " by " + this.author + " (ISBN: " + this.isbn + ")";
  }
}

const books = [
  new TBook("Harry Potter", "J.K Rowling", "111"), 
  new TBook("The Hobbit", "Tolkien", "222"),
  new Book("1984", "George Orwell", "333")
];

for (let book of books) {
  printOut(book.toString());
}
printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

const EWeekDays = {
  Monday: { name: "Monday", value: 1 },
  Tuesday: { name: "Tuesday", value: 2 },
  Wednesday: { name: "Wednesday", value: 3 },
  Thursday: { name: "Thursday", value: 4 },
  Friday: { name: "Friday", value: 5 },
  Saturday: { name: "Saturday", value: 6 },
  Sunday: { name: "Sunday", value: 7 }

  Workdays: [Monday, Tuesday, Wednesday, Thursday, Friday]
  Weekends: [Saturday, Sunday]
};

const keys = Object.keys(EWeekDays);

for (let key of keys) {
  printOut(key + ": " + JSON.stringify(EWeekDays[key]));
}
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

const randomNumbers = [];

for (let i = 0; i < 35; i++) {
  randomNumbers.push(Math.floor(Math.random() * 20) + 1);
}

printOut("Original: " + randomNumbers.join(", "));

const asc = [...randomNumbers].sort((a, b) => a - b);
printOut("Ascending: " + asc.join(", "));

const desc = [...randomNumbers].sort((a, b) => b - a);
printOut("Descending: " + desc.join(", "));
printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

const frequency = {};

for (let num of randomNumbers) {
  frequency[num] = (frequency[num] || 0) + 1;
}

const freqArray = Object.entries(frequency);

freqArray.sort((a, b) => {
  if (b[1] === a[1]) {
    return a[0] - b[0];
  }
  return b[1] - a[1];
});

for (let [num, count] of freqArray) {
  printOut(num + ": " + count);
}
printOut(newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

const grid = [];

for (let i = 0; i < 5; i++) {
  let row = [];
  for (let j = 0; j < 9; j++) {
    row.push("Row" + i + "Col" + j);
  }
  grid.push(row);
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    printOut(grid[i][j]);
  }
}

