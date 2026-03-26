"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Counting Up and Down 
let countUp = "";
let countDown = "";
for(let i = 1; i <= 10; i++) countUp += i + " ";
for(let i = 10; i >= 1; i--) countDown += i + " ";

printOut("Count up: " + countUp);
printOut(newLine);
printOut("Count down: " + countDown);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Number guessing game
let secretNumber = 45; // you can change 
let guessedNumber = 0; 
while (guessedNumber !== secretNumber) {
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}
printOut("Guessed number: " + guessedNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Guessing Game Level Up 1-1,000,000
secretNumber = 123456; // example 
let guesses = 0;
let startTime = Date.now(); 
do {
    guessedNumber = Math.floor(Math.random() * 1000000) + 1;
    guesses++;
} while (guessedNumber !== secretNumber); 
let endTime = Date.now();
printOut(`Guessed number: ${guessedNumber}, guesses: ${guesses}, time: ${endTime - startTime} ms`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Prime Number Hunter 
let primes = [];
for (let num = 2; num < 200; num++) {
    let isPrime = true;
    for (let div = 2; div <= Math.sqrt(num); div++) { 
        if (num % div === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) primes.push(num);
}
printOut("Primes < 200:" + primes.join(", "));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Nested loops pattern 9x7
let pattern = "";
for (let r = 1; r <= 7 ; r++) {
    for (let c = 1; c <= 9; c++) {
        pattern += `K${r}${c} `;
    }
}
printOut("Pattern.trim());
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Grade simulator
for (let i = 1; i <= 5 ; i++) {
    let points = Math.floor(Math.random() * 236) + 1; 
    let grade = "";
    if (points >= 89) grade = "A";
    else if (points >= 77) grade = "B";
    else if (points >= 65) grade = "C";
    else if (points >= 53) grade = "D";
    else if (points >= 41) grade = "E";
    else grade = "F";
    printOut(student ${i}: ${points} points = Grade ${grade});
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// Dice Rolling Extravaganza
function rollDie() { return Math.floor(Math.random() * 6) + 1; }
function rollUntil(patternCheck) {
    let rolls = 0;
    let dice; 
    do {
        dice = [rollDie(), rollDie(), rollDie()]; 
        rolls++;
    } while (!patternCheck(dice));
    return rolls;
}
//Examples: fullstraight 
let fullStraightRolls = rollUntil(d => d.sort((a, b)=> a-b).join("")==="123456");
printOut("Full straight rolls: " + fullStraight);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// Example of rows/columns loops explained in part 5
printOut("Nested loops explained in part 5 - rows first, then columns");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
// Example: Nested loops again for clarification
printOut("Nested loops control order: Rows outer, columns inner. Changing order changes output order.");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
// Infinite loops warning
printOut("Infinite loops happen when condition never becomes false. Always ensure loop condition can stop!");
printOut(newLine);
