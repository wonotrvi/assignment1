# Assignment 1 - Personal Finance Manager

## Description

This Node.js module helps manage personal finances by tracking income expenses, and calculating the overall balance. You can also view expense breakdowns by category and export a summary of all transactions.

---

## File Required

Only **one** file is required for this assignment:

- `OhRuiMin_WAD.js` – This is my personal finance management Node.js module.

---

## How to use

### 1. Setup Instructions

Ensure [Node.js](https://nodejs.org/) is installed on your system.

Create a testing file like `app.js` to try the module. For example:

assignment1/
- OhRuiMin_WAD.js
- app.js
- README.md

---

### 2. Example `app.js`

```js
console.log("Starting my personal finance tracker app");

const financeManager = require('./OhRuiMin_WAD.js');

console.log("Finance Manager Description: " + financeManager.description);

//Add incomes
financeManager.addIncome("Salary", 5000);
financeManager.addIncome("Freelance", 800);

//Add expenses
financeManager.addExpense("Food", 400);
financeManager.addExpense("Transport", 270);
financeManager.addExpense("Entertainment", 300);

//Display results
console.log("Balance: $" + financeManager.calculateBalance());
console.log("Expense Breakdown: ", financeManager.getExpenseBreakdown());
console.log("All Transactions: ", financeManager.exportSummary());

```

# Functions Available

| Function               | Description                                        | Parameters                          |
|------------------------|----------------------------------------------------|-------------------------------------|
| `addIncome(source, amount)`     | Adds a new income record                          | `source` (string), `amount` (number) |
| `addExpense(category, amount)`  | Adds a new expense record                         | `category` (string), `amount` (number) |
| `calculateBalance()`            | Returns total balance after subtracting expenses from incomes | None                                |
| `getExpenseBreakdown()`         | Returns expenses grouped by category             | None                                |
| `exportSummary()`               | Exports a list of all transactions               | None                                |

---

## How to run app.js

```bash
node app.js
```

# References
- [Mint - Personal Finance App](https://mint.intuit.com)
- [Node.js Modules Documentation](https://nodejs.org/api/modules.html)
- [MDN: JavaScript Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

---