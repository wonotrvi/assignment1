# Assignment 1 - MyFinanceLog

## Description

MyFinanceLog is a simple Node.js tool to track income, expenses, and balances. It provides clear summaries, category breakdowns, and a full transaction history to help manage your finances effectively.

---

## Features
- Add income and expense records with categories
- Calculate current balance
- View expense breakdown by category
- Print detailed transaction history
- Generate summary of total income, expenses, and balance

## File Required

Only **one** file is required for this assignment:

- `OhRuiMin_finance.js` – This is my personal finance management Node.js module.

---

## How to use

### 1. Setup Instructions

Ensure [Node.js](https://nodejs.org/) is installed on your system.

Create a testing file like `app.js` to try the module.

Example folder structure:

assignment1/
- OhRuiMin_finance.js
- app.js
- README.md

---

### 2. Example of `app.js`

```js
console.log("========================================");
console.log("Starting my personal finance tracker app");
console.log("========================================\n");

const finance = require('./OhRuiMin_finance.js');

// Show App Description
console.log("App Description:");
console.log(finance.description);
console.log();

// ======= Add Income =======
console.log("======= Adding Income =======")
finance.addIncome("Salary", 5000);
finance.addIncome("Freelance", 800);
console.log();

// ======= Add Expenses =======
console.log("======= Adding Expenses =======")
finance.addExpense("Food", 400);
finance.addExpense("Transport", 270);
finance.addExpense("Entertainment", 300);
console.log();

// ======= Balance =======
console.log("======= Current Balance =======")
console.log("Balance: $" + finance.calculateBalance());
console.log();

// ======= Expense Breakdown =======
console.log("======= Expense Breakdown =======")
console.log(finance.getExpenseBreakdown());
console.log();

// ======= Transaction History =======
console.log("======= Transaction History =======")
finance.printTransactions();
console.log();

// ======= Summary =======
console.log("======= Summary =======")
console.log(finance.getSummary());
console.log();
```

### 3. Functions Available

| Function  | Description   | Parameters    |
|------------------------|----------------------------------------------------|-------------------------------------|
|`addIncome(source, amount)`|Adds a new income record and logs it.| `source` (string), `amount` (number) |
|`addExpense(category, amount)`|Adds a new expense record and logs it.| `category` (string), `amount` (number) |
| `calculateBalance()`| Returns total balance (incomes - expenses) | None|
| `getExpenseBreakdown()`| Returns a formatted string showing total spent per category| None|
| `printTransactions()`| Prints a numbered list of all transactions to the console.|None|
| `getSummary()`| Returns a summary of total income, total expenses, and balance.|None|

---

### 4. How to run app.js

```bash
node app.js
```

# References
- [MyMoneySense - Singapore's Financial Literacy Programme](https://www.mymoneysense.gov.sg/)
- [Mint – Personal Finance App](https://mint.intuit.com/)
- [JavaScript Array `reduce()` Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)