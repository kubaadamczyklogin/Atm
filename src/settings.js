//ATM setup:

export const currency = "PLN";
// for example: "PLN", "GBP", "$", "€"

export const withdrawalsDenominations = [20, 50];
// enter the two smallest denominations (banknotes) for withdrawals
// for example for euro it can be: [10, 20], for PLN: [20, 50], in America even [1, 2]
// to disable this limit set value to null

export const withdrawLimit = 100000;
// for nolimits parametr should by null,
// in other cases provide amount like 1000, 20000 etc.

export const depositsDenominations = [10, 20];
// enter the two smallest denominations (banknotes) for withdrawals
// for example for euro it can be: [5, 10], for PLN: [10, 20], in America even [1, 2]
// to disable this limit set value to null

export const depositLimit = null;
// for nolimits parametr should by null,
// in other cases provide amount like 1000, 20000 etc.

export const fastWithdawButtons = [50, 100, 200, 500];
