"use strict";
class BankAccount {
    constructor(currentAmount) {
        this.currentAmount = currentAmount;
    }
    checkAmout() {
        return "Currently you have Rs: " + this.currentAmount;
    }
}
class withdrawAmount extends BankAccount {
    withdraw(withdrawAmount) {
        if (withdrawAmount <= 0) {
            return "Invalid amount! Please enter a valid amount.";
        }
        else if (withdrawAmount > this.currentAmount) {
            return "Oops!You have insufficient money.";
        }
        this.currentAmount -= withdrawAmount;
        return "Successfully! You have withdrawn Rs: " + withdrawAmount + ".";
    }
}
const myAccount1 = new withdrawAmount(12000);
console.log(myAccount1.checkAmout());
console.log(myAccount1.withdraw(400));
console.log(myAccount1.checkAmout());
