import Datastore from "nedb";
import Promise from "bluebird";

import electron from "electron";
const app = electron.remote.app;

const userData = app.getPath("userData"); // user data path to bundled app

/**
 * @class ExpenseDatabase CRUD operations on the Expense table
 * @constructor constructor initializes a connection to the database
 *
 */
class ExpenseDatabase {
  constructor() {
    // expenses database file path
    let databasePath = userData + "/databases/expense-table.db";

    // initializes database with the database file path
    this.database = new Datastore({
      filename: databasePath
    });

    // load database to memory
    this.database.loadDatabase(error => {
      if (error) {
        console.log("[-] Error: " + error);
      }
    });
  }

  // fetch all expenses in the database
  fetchAll() {
    return new Promise((resolve, reject) => {
      this.database.find({}, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to fetch all expenses");
          reject(error);
        }

        resolve(result);
      });
    });
  }

  // fetch expense by _id
  fetchOne(_id) {
    return new Promise((resolve, reject) => {
      this.database.findOne(
        {
          _id
        },
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to fetch expense by id");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }

  // update expense details where id equals expense_id
  update(expense) {
    const { _id } = expense;

    return new Promise((resolve, reject) => {
      this.database.update(
        {
          _id
        },
        expense,
        {},
        (error, numReplaced) => {
          if (error) {
            console.log("[-] Error: failed to fetch expense by id");
            reject(error);
          } else if (numReplaced == 1) {
            resolve("update expense details successfully");
          }
        }
      );
    });
  }

  // add expense to the database
  // param expense contains object of expense details
  add(expense) {
    return new Promise((resolve, reject) => {
      this.database.insert(expense, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to add new expense");
          reject(error);
        }
        resolve(result);
      });
    });
  }

  // delete expense from the database
  // param _id the unique id by the expense
  delete(_id) {
    return new Promise((resolve, reject) => {
      this.database.remove(
        {
          _id
        },
        {},
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to delete expense");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }
}

export default ExpenseDatabase;

//   id: ,
//   expenseType: "",
//   name: "",
//   status: "",
//   amountTaken: ,
//   reason: "",
//   takenDate: "",
//   status: "",
