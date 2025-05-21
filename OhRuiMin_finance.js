module.exports = {
    description: "This is my personal finance manager",

    transactions: [],

    transactionId: 1, // Counter for unique transaction ID

    // Adds an income record
    addIncome(source, amount) {
        this.transactions.push({ id: this.transactionId++, type: 'income', source, amount });
        console.log(`${source}: $${amount}`);
    },

    // Adds an expense record
    addExpense(category, amount) {
        this.transactions.push({ id: this.transactionId++, type: 'expense', category, amount })
        console.log(`${category}: $${amount}`);
    },

    // Calculates the total balance (loops through all expenses, add income, subtracts expenses and return current balance)
    calculateBalance() {
        return this.transactions.reduce((total, transaction) => {
            return transaction.type == 'income' ? total + transaction.amount : total - transaction.amount;
        }, 0);
    },

    // It shows how much you have spent in each expense category
    getExpenseBreakdown() {
        // hold the formatted result
        let breakdown = '';
        // track total spent for each category
        const categoryTotals = {};

        for (const transaction of this.transactions) {
            if (transaction.type === 'expense') {
                // If the category is not tracked yet, start at 0
                if (!categoryTotals[transaction.category]) {
                    categoryTotals[transaction.category] = 0;
                }

                // Add the amount to the category's total
                categoryTotals[transaction.category] += transaction.amount;
            }
        }

        // Format the results into a readable string
        for (const category in categoryTotals) {
            breakdown += category + ": $" + categoryTotals[category] + "\n";
        }

        // Remove the last newline and return the string
        return breakdown.trim();
    },
    // Prints a list of all transactions with type, name, and amount
    printTransactions() {
        // Check if there are any transactions recorded
        if (this.transactions.length === 0) {
            console.log("No transactions found.");
            return;
        }
        // Loop through each transaction and print details
        this.transactions.forEach((t, i) => {
            // Format and print income transactions
            if (t.type === 'income') {
                console.log(`${i + 1}. Income: ${t.source} - $${t.amount.toFixed(2)}`);
            }
            // Format and print expense transactions
            else {
                console.log(`${i + 1}. Expense: ${t.category} - $${t.amount.toFixed(2)}`);
            }
        });
    },
    // Get Summary of total income, total expenses and balance
    getSummary() {
        let totalIncome = 0;
        let totalExpenses = 0;

        // Loop through all transactions to calculate totals
        for (const transaction of this.transactions) {
            if (transaction.type === 'income') {
                totalIncome += transaction.amount;
            } else if (transaction.type === 'expense') {
                totalExpenses += transaction.amount;
            }
        }

        // Calculate balance
        const balance = totalIncome - totalExpenses;

        // Create and return the summary string
        return "Total Income: $" + totalIncome + "\n" +
            "Total Expenses: $" + totalExpenses + "\n" +
            "Balance: $" + balance.toFixed(2);
    }
};