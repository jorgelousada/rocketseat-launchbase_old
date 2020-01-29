/* 
    Resolução do desafio 04 
    - Operações bancárias
*/

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type == 'credit') {
        user.balance += transaction.value;
    } else if (transaction.type == 'debit') {
        user.balance -= transaction.value;
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction = 0;
    for (let transaction of user.transactions) {
        if (type == transaction.type && transaction.value > higherTransaction) {
            higherTransaction = transaction.value;
        }
    }
    return { type: type, value: higherTransaction }
}

function getAverageTransactionValue() {
    let averageTransaction = 0;

    for (let transaction of user.transactions) {
        averageTransaction += transaction.value;
    }
    return (averageTransaction / user.transactions.length)
}

function getTransactionsCount() {
    let debitCount = 0;
    let creditCount = 0;

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            creditCount++;
        } else if (transaction.type == 'debit') {
            debitCount++;
        }
    }
    return { credit: creditCount, debit: debitCount };
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)                           // 60

console.log(getHigherTransactionByType('credit'));  // { type: 'credit', value: 120 }

console.log(getHigherTransactionByType('debit'));   // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue());          // 70

console.log(getTransactionsCount());                // { credit: 2, debit: 2 }