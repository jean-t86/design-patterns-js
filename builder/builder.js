module.exports = (function() {
  /**
   * A class definition wrapped in a closure to implement
   * the builder pattern for that class.
   */
  class BankAccount {
    /**
     * Transfers funds between this account and another
     * @param {Number} destination The destination account
     * @param {Number} amount The amoun to transfer
     * @return {string} A message describing the state of the transfer
     */
    transfer(destination, amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        return `Transfered ${amount} to ${destination}`;
      } else {
        return `Insuficient funds: ${this.balance}`;
      }
    }
  }

  return {
    builder(accountNumber) {
      const bankAccount = new BankAccount();
      delete bankAccount.constructor;
      bankAccount.accountNumber = accountNumber;
      return {
        withOwner(owner) {
          bankAccount.owner = owner;
          return this;
        },
        atBranch(branch) {
          bankAccount.branch = branch;
          return this;
        },
        openingBalance(balance) {
          bankAccount.balance = balance;
          return this;
        },
        atRate(rate) {
          bankAccount.interestRate = rate;
          return this;
        },
        build() {
          Object.freeze(bankAccount);
          return bankAccount;
        },
      };
    },
  };
})();
