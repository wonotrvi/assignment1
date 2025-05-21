console.log("Starting Finance Manager Module");

// Stores all income and expense record as an object.
const transactions = [];

console.log(module);

module.exports = {
    description: "This is my personal finance manager",

    // Adds an income record
    addIncome(source, amount) {
        transactions.push({ type: 'income', source, amount, date: new Date() });
        console.log(`Added Income: ${source} - $${amount}`);

    },

    // Adds an expense record
    addExpense(category, amount) {
        transactions.push({ type: 'expense', category, amount, date: new Date() })
        console.log(`Added Expense: ${category} - $${amount}`);
    },

    // Calculates the total balance (loops through all expenses, add income, subtracts expenses and return current balance)
    calculateBalance() {
        return transactions.reduce((total, txn) => {
            return txn.type == 'income' ? total + txn.amount : total - txn.amount;
        }, 0);
    },

    // It shows how much you have spent in each expense category
    getExpenseBreakdown() {
        const breakdown = {};
        for (const txn of transactions) {
            if (txn.type === 'expense') {
                breakdown[txn.category] = (breakdown[txn.category] || 0) + txn.amount;
            }
            console.log("Get Expense Breakdown");
        }
        return breakdown;
    },
    // Exports all transactions
    exportSummary() {
        return [...transactions];
    }
};