import Sqlite3 from "sqlite3";
// const Promise = require("bluebird");

/**
 * @class DatabaseConnection connects to a Sqlite3 database file
 * @constructor constructor creates connection with the database file path
 *
 */
class DatabaseConnection {
  constructor() {
    const databaseFilePath = "./yako-sm-database"; // database file

    // databaseConn stores the connection
    this.databaseConn = Sqlite3.Database(databaseFilePath, error => {
      if (error) {
        console.warn("[-] Error: " + error);
      } else {
        console.log("[+] Database connected successfully");
      }
    });
  }
}

export default DatabaseConnection;
