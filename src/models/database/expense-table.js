/**
 * @class ExpensesTable CRUD operations on the Expenses table
 * @constructor initializes a connection to the database
 *
 */
class ExpensesTable {
  constructor(database) {
    this.database = database;
  }

  // fetch all expenses in the database
  fetchAll() {
    return this.database.all(`SELECT * FROM Expenses`);
  }

  // fetch expense by id
  fetchOne(id) {
    return this.database.get(`SELECT * FROM Expenses WHERE expenses_id = ?`, [
      id
    ]);
  }

  // update expense details where id equals expenses_id
  update(expense) {
    const {
      expensesId,
      expenseType,
      name,
      status,
      amountTaken,
      reason,
      dateOfExpense
    } = expense;

    return this.database.run(
      `UPDATE Expenses
      SET expense_type = ?,
        name = ?,
        status = ?,
        amount_taken = ?,
        reason = ?,
        date_of_expense = ?
      WHERE expenses_id = ?`,
      [
        expenseType,
        name,
        status,
        amountTaken,
        reason,
        dateOfExpense,
        expensesId
      ]
    );
  }

  // add expense to the database
  // param expense contains object of expense details
  add(expense) {
    const {
      expenseType,
      name,
      status,
      amountTaken,
      reason,
      dateOfExpense
    } = expense;

    return this.database.run(
      `INSERT INTO Expenses (
        expense_type,
        name,
        status,
        amount_taken,
        reason,
        date_of_expense)
      VALUES( ? , ? , ? , ? , ? , ? )`,
      [expenseType, name, status, amountTaken, reason, dateOfExpense]
    );
  }

  // delete expense from the database
  // param d the unique id by the expense
  delete(id) {
    return this.database.run(`DELETE FROM Expenses WHERE expenses_id = ?`, [
      id
    ]);
  }
}

export default ExpensesTable;

//   expensesId: ,
//   expenseType: "",
//   name: "",
//   status: "",
//   amountTaken: ,
//   reason: "",
//   dateOfExpense: "",
