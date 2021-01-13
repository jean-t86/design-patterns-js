const BankAccount = require('./builder.js');

const bankAccount = BankAccount
    .builder(24534545)
    .openingBalance(200)
    .atBranch('Brisbane')
    .build();

console.log(bankAccount.transfer(2353443, 300));
