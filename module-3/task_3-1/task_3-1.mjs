"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");

let wakeUpTime = 7; 

if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut(" I can take the train to school.");
} else {
  printOut("I have to take the car to school."); 
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number 0; // test med f.eks 5, 0, 7

if (number > 0) {
  printOut("Positive");
} else if (number < 0) {
  printOut("Negative");
} else {
  printOut("Zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let imageSize = Math.floor(Math.random() * 8) + 1;) // 1-8 MP 
printOut("Image size" + imageSize + "MP");

if (imageSize >= 4) {
  printOut("Thank you");
} else {


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

imageSize = Math.floor(Math.random() * 8) + 1; // Ny tilfeldig størrelse
printOut("Image size: " + imageSize + "MP");

if (imageSize >= 6) {
  printOut("Thank you");
} else if (imageSize >= 4) {
  printOut("The image is acceptable");
} else {
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const mothList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const noOfMonths = mothList.length;
const monthName = mothList[Math.floor(Math.random() * noOfMonths)];

printOut("Month: " + monthName);

if monthName.includes("r") {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let daysInMonth;

if (monthName === "February") {
  daysInMonth = 28;
} else if (
  monthName === "April" ||
  monthName === "June" ||
  monthName === "September" ||
  monthName === "November"
) {
  daysInMonth = 30;
} else {
  daysInMonth = 31;
}

printOut(monthName + "has" + daysInMonth + "days");

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName === "April") {
  printOut(The gallery is temporarily open in another buildning.");
} else (monthName === "Marth" || monthName === "May") {
  printOut("The gallery is closed for refurbishment.");
}else {
  printOut("The gallery is open.");
}

printOut(newLine);
