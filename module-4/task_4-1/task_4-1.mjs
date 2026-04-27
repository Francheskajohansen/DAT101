"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

// Static object + class skal være øverst
const AccountTypes = {
    NORMAL: "normal",
    SAVING: "saving",
    PENSION: "pension"
};

class TAccount {
    #balance = 0;
    #withdrawCount = 0;
    #currency = "NOK";

    constructor(type) {
        this.type = type;
    }

    to.String() { 
        return this.type;
    }

    setType(new type) {
        this.type = new type;
        this.#withdrawCount = 0;
        printOut(`Account type changed to ${new.type}`);
    }

    getBalance() {
        return this.#balance.toFixed(2);
    }

    deposit(account, currency = "NOK" ) {
        let converted = this.#convert(amount, currency, this.#currency);
        this.#balance += converted;
        this.#withdrawCount = 0;

        printOut(`Deposited ${ammount} ${currency}. Balance: ${this.getBalance()} ${this.#currency}`);
    }

    withdraw(amount, currency = "NOK") {
        let converted = this.#convert(amount, currency, this.#currency);

        switch (this.type) {
            case AccountTypes.SAVING:
                if (this.#withdrawCount >= 3) {
                    printOut("Withdrawal limit reached.");
                    return;
                }
                break;
            
            case AccountTypes.PENSION:
                printOut("No withdrawals allowed."); 
                return;
        }

        if (this.#balance >= converted) {
            this.#balance -= converted;
            this.#withdrawCount++;
            printOut(`Withdrew ${amount} ${currency}. Balance: ${this.getBalance()} ${this.#currency}`);
        } else {
            printOut("Insufficient funds.");
        }
    }

    setCurrencyType(newCurrency) {
        if (newCurrency === this.#currency) return;

        this.#balance = this.#convert(this.#balance, this.#currency, newCurrency);
        this.#currency = newCurrency;
        printOut(`Currency changed to ${newCurrency}. Balance: ${this.getBalance()} ${this.#currency}`);
    }

    #convert(amount, from, to) {
        const rates = {
            "NOK": 1,
            "USD": 0.1,
            "GSP": 0.08
        };

        let nok = amount / rates[from];
        return nok * rates[to];
    }
}

// Lag en konto (viktig!)
const myAccount = new TAccount(AccountTypes.NORMAL);


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(Object.values(AccountTypes).join(", "));
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(myAccount.toString());
myAccount.setType(AccountTypes.SAVING);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(100);
myAccount.withdraw(20); 
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.withdraw(10);
myAccount.withdraw(10);
myAccount.withdraw(10);
myAccount.withdraw(10); // stop here
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType("USD");
myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType("GSP");
myAccount.setCurrencyType("NOK");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(12, "USD");
myAccount.withdraw(10, "GSP");

// prøv å tømme konto
myAccount.withdraw(1000, "NOK");
printOut(newLine);
