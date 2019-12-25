import Sqlite3 from "sqlite3";
import Promise from "bluebird";

/**
 * @class DatabaseConnection connects to a Sqlite3 database file
 * @constructor constructor creates connection with the database file path
 *
 */
class DatabaseConnection {
  constructor() {
    const databaseFilePath = "./yako-sm-database"; // database file

    // databaseConn stores the connection
    this.databaseConn = new Sqlite3.Database(databaseFilePath, error => {
      if (error) {
        console.warn("[-] Error: " + error);
      } else {
        console.log("[+] Database connected successfully");
      }
    });
  }

  // runs query successfully and asynchronous
  // otherwise returns -1 as error status
  run(query, params = []) {
    return new Promise((resolve, reject) => {
      this.databaseConn.run(query, params, (error, result) => {
        if (error) {
          console.log("[-] Error: error occurred running '" + query + "'");
          console.log(error);
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  // fetch a single row from the specified table asynchronously
  get(query, params = []) {
    return new Promise((resolve, reject) => {
      this.databaseConn.get(query, params, (error, result) => {
        if (error) {
          console.log("[-] Error: error occurred running '" + query + "'");
          console.log(error);
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  // fetch all rows from the specified table
  all(query, params = []) {
    return new Promise((resolve, reject) => {
      this.databaseConn.all(query, params, (error, rows) => {
        if (error) {
          console.log("[-] Error: error occurred running '" + query + "'");
          console.log(error);
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default DatabaseConnection;
