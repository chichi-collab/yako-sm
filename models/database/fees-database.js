import Datastore from "nedb";
import Promise from "bluebird";
import fs from "fs";

import electron from "electron";
const app = electron.remote.app;

const userData = app.getPath("userData"); // user data path to bundled app

/**
 * @class FeesDatabase CRUD operations on the Fees table
 * @constructor constructor initializes a connection to the database
 *
 */
class FeesDatabase {
  constructor() {
    // fees database file path
    this.databasePath = userData + "databases/fees-table.db";
    console.log("database path: ", this.databasePath);

    // initializes database with the database file path
    this.database = new Datastore({
      filename: this.databasePath
    });

    // load database to memory
    this.database.loadDatabase(error => {
      if (error) {
        console.log("[-] Error: " + error);
      }
    });
  }

  // fetch all fees in the database
  fetchAll() {
    // log database content to the console
    fs.readFile(this.databasePath, (error, data) => {
      if (error) {
        console.log("[-] Error: ", error);
      }
      console.log(data.toString());
    });
    // return new Promise((resolve, reject) => {
    //   this.database.find({}, (error, result) => {
    //     if (error) {
    //       console.log("[-] Error: failed to fetch all fees");
    //       reject(error);
    //     }

    //     resolve(result);
    //   });
    // });
  }

  // fetch fee by id
  fetchOne(_id) {
    return new Promise((resolve, reject) => {
      this.database.findOne(
        {
          _id
        },
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to fetch fee by id");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }

  // update fee details where id equals fee_id
  update(fee) {
    const { _id } = fee;

    return new Promise((resolve, reject) => {
      this.database.update(
        {
          _id
        },
        fee,
        {},
        (error, numReplaced) => {
          if (error) {
            console.log("[-] Error: failed to fetch fee by id");
            reject(error);
          } else if (numReplaced == 1) {
            resolve("update fee details successfully");
          }
        }
      );
    });
  }

  // update total fees of all fees
  updateTotalFees(fees) {
    return this.databaseConn.run("UPDATE Fees SET total_fees = ?;", [fees]);
  }

  // add fee to the database
  // param fee contains object of fee paid
  add(fee) {
    return new Promise((resolve, reject) => {
      this.database.insert(fee, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to add new fees");
          reject(error);
        }
        resolve(result);
      });
    });
  }

  // delete fee from the database
  // param _id the unique id by the fee
  delete(_id) {
    return new Promise((resolve, reject) => {
      this.database.remove(
        {
          _id
        },
        {},
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to delete fee");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }
}

export default FeesDatabase;

//   id: ,
//   totalFees: "",
//   studentId: "",
//   studentName: "",
//   studentClass: ,
//   feesPaid: "",
//   datePaid: ""
