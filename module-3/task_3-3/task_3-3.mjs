"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Part 1: Function with no parameters and no return */
function printTodaysDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    printOut(today.toLocaleDateString('no-NB', options));
}

printTodaysDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Part 2: Function returning date and countdown */
function getTodaysDate() {
    const today = new Date();
    const diffTime = releaseDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

const today = getTodaysdate(); 
const releaseDate = new Date("2025-05-14");
printOut("Today: " + today.toLocaleDateString('no-NB'));
printOut(newLine);
printOut("Days until 2XKO release: " + getTodaysDate(releaseDate));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Part 3: Circle calculations */
function circleStats(radius) {
    const diameter = radius * 2; 
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    printOut(Diameter: ${diameter.toFixed(2)}, Circumference: ${circumference.toFixed(2)}, Area: ${area.toFixed(2)});
}

circleStats(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Part 4: Rectangle calculations with object */
function rectangleStats(rect) {
    const circumference = 2 * (rect.width + rect.height);
    const area = rect.width * rect.height;
    printOut(Circumference: ${circumference}, Area: ${area});
}

rectangleStats({ width: 4, height: 6 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Part 5: Temperature conversion */ 
function convertTemp (temp, type) {
    let c, f,k;
    if(type. toLowerCase() === 'c') { c = temp; f = c*9/5 + 32; k = c+273.15; }
    else if(type.toLowerCase() === 'f') { f = temp; c = (f-32)*5/9; k = c+273.15; }
    else if(type.toLowerCase() === 'k') { k = temp; c = k-273.15; f = c*9/5 + 32; }
    printOut(`C: $Math.round(c)}, F: ${Math.round(f)}, K: ${Math.round(k)}`);
}

convertTemp(25, 'C');
convertTemp(77, 'F');
convertTemp(300, 'K');
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Part 6: Price without VAT */
function priceWithoutVAT(priceWithVAT, vatRate) {
    let vat = 0;
    switch (vatGroup.toLowerCase()) {
        case 'normal': vat = 25; break;
        case 'food': vat = 15; break;
        case 'hotel': 
        case 'transport':
        case 'cinema': 
        default: printOut("Unknown VAT group!"); return NaN; 
    }
    return (100 * gross)/(100 + vat); 
}
printOut("priceWithoutVAT(125, 'Normal')); 
printOut(newLine);
printOut("priceWithoutVAT(115, 'Food')); 
printOut(newLine);
printOut("priceWithoutVAT(110, 'Hotel')); 
printOut(newLine); 
printOut("priceWithoutVAT(200, 'Goblins')); 
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Part 7: Speed/Time/Distance calculations */
function calculateSpeedTimeDistance(distance, time, speed) {
    if (distance, time, speed.filter(x => x == null).length > 1) return NaN;
    if (distance == null)return speed * time;)
    if (time == null) return distance / speed;
    if (speed == null) return distance / time;
    return NaN;
}
printOut(calculateSpeedTimeDistance(100, null, 50)); // time
printOut(newLine); 

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Part 8: String extension */
function extendString(text, maxSide, char, prepend) {
    while(text.length < maxSide) {
        text = pretend ? char + text : text + char;
    }
    return text;
}
printOut(extendString("Hi", 5, "*", true)); 
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Part 9: Math expression test */ 
function testMathLines(lines = 200) {
    for (let i = 0; i< lines; i++) {
        const left = i+1 + i+2 + i+3 + i+4 + i+5; // simplified example
        const right = i+6 + i+7 + i+8 + i+9 + i+10; 
        if(left !== right) {
            printOut("Fail at line " + i); 
            return;
        }
    }
    printOut("Maths fun!"); 
}
testMathLines();
printOut(newLine); 

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Part 10: Recursive factorial */
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
printOut(factorial(5));
printOut(newLine);
