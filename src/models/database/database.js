const sqlite3 = require("sqlite3");
const Promise = require("bluebird");

import electron from "electron";
const app = electron.remote.app;

const userData = app.getPath("userData");

// database file path
// change this in the future to the production env path
const DATABASE_PATH = userData + "/yako-sm-database";

/**
 * @class Database connects to a Sqlite3 database file
 * @constructor initialize sqlite3 Database with database file path and creates connection
 *
 */
class Database {
  constructor() {
    // db stores the connection object
    this.db = new sqlite3.Database(DATABASE_PATH, error => {
      if (error) {
        console.log(`Could not connect to database ${error}`);
      } else {
        console.log("Connected to Database");
        console.log("App Path: " + userData);
      }
    });
  }

  // execute sql query
  run(query, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(query, params, (error, result) => {
        if (error) {
          console.log("Error running query: " + query);
          console.log(error);
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  // fetch one result from a specified table
  get(query, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(query, params, (err, result) => {
        if (err) {
          console.log("Error running query: " + query);
          console.log(err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // fetch all rows from a specified table
  all(query, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(query, params, (err, rows) => {
        if (err) {
          console.log("Error running query: " + query);
          console.log(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // export database to cloud
  exportDatabase() {
    // TODO: export database to a cloud database
  }
}

export default Database;
