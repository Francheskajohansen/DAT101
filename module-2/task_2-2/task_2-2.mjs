"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let original = 2 + 3 * 2 - 4 * 6; 
let motified = (2 + 3) * 2 - 4 * 11;
printOut("Original expression: 2 + 3 * 2 - 4 * 6 = " + original);
printOut("Modified expression: (2 + 3) * 2 - 4 * 11 = " + motified);
printOut(newLine); 

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meters = 25; 
let cm = 34; 

let totalMillimeters = (meters * 1000) + (cm * 10);
let inches = totalMillimeters / 25.4;

printOut("25 meters and 34 centimeters = " + totalMillimeters + " millimeters");
printOut("25 meters and 34 centimeters = " + inches.toFixed(2) + " inches");


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let days = 3;
let hours = 12;
let minutes = 14; 
let seconds 45; 

let  totalMinutes = 
(days * 1440) + 
(hours * 60) +
minutes + 
(seconds / 60);

printOut("Total minutes: " + totalMinutes);
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalMin = 6322.52;

let d = Math.floor(totalMin / 1440);
let remainder = totalMin % 1440;

let h = Math.floor(remainder / 60);
remainder = remainder % 60;

let m = Math.floor(remainder);
let s = Math.round((remainder - m) * 60);

printOut("6322.52 minutes is equals to:"); 


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let usd = 54; 

let nokPerUsd = 76 / 8.6; 

let nok = nokPerUsd * usd; 

printOut( "54 USD = + " + Math.round(nok) + " NOK");

let nokAmount = 76; 
let usdAmount = nokAmount / nokPerUsd;

printOut("76 NOK = " + Math.round(usdAmount) + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text : "There is much between heaven and earth that we do not understand."; 

printOut("Number of characters: " + text.length);

printOut("Character at position 19: " + text.charAt(19));

printOut("8 characters from position 35: " + text.substring (35, 43));

printOut("Index where ´earth´ starts: " + text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 greater than or equal to 7? " + (7 >= 7));
printOut("Is 'a' greater than 'b'? " + ('a' > 'b'));
printOut("Is '1' less than 'a'? " + ('1' < 'a'));
printOut("Is '2500' less than 'abcd'? " + ('2500' < 'abcd'));
printOut("Is 'arne' not equal to 'thomas': " + ('arne' != 'thomas'));
printOut("Is 2 equal to 5? " + (2 == 5));
printOut("Is 'abcd' greater than 'bcd'? " + ('abcd' > 'bcd'));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Convert ´254`to number: " + Number('254'));
printOut("Convert ´57.23`to number: " + Number('57.23 '));
printOut("Convert ´25 kroner`to number: " + parseInt('25 kroner'));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1;

printOut("Random number between 1 and 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalDays = 131; 

let weeks = Math.floor(totalDays / 7);
let remainingDays = totalDays % 7;

printOut("131 days = " + weeks + " weeks and " + remainingDays + " days");
printOut(newLine);