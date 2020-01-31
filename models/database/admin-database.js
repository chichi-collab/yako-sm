import path from "path";
import Datastore from "nedb";
import Promise from "bluebird";

/**
 * @class AdminDatabase CRUD operations on the Admin table
 * @constructor constructor initializes a connection to the database
 *
 */
class AdminDatabase {
  constructor() {
    // admins database file path
    let databasePath = path.resolve(__dirname, "./admin-table.db");

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

  // fetch all admins in the database
  fetchAll() {
    return new Promise((resolve, reject) => {
      this.database.find({}, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to fetch all admins");
          reject(error);
        }

        resolve(result);
      });
    });
  }

  // fetch admin by _id
  fetchOne(_id) {
    return new Promise((resolve, reject) => {
      this.database.findOne(
        {
          _id
        },
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to fetch admin by id");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }

  // update admin details where id equals admin_id
  update(admin) {
    const { _id } = admin;

    return new Promise((resolve, reject) => {
      this.database.update(
        {
          _id
        },
        admin,
        {},
        (error, numReplaced) => {
          if (error) {
            console.log("[-] Error: failed to fetch admin by id");
            reject(error);
          } else if (numReplaced == 1) {
            resolve("update admin details successfully");
          }
        }
      );
    });
  }

  // add admin to the database
  // param admin contains object of admin details
  add(admin) {
    return new Promise((resolve, reject) => {
      this.database.insert(admin, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to add new admin");
          reject(error);
        }
        resolve(result);
      });
    });
  }

  // delete admin from the database
  // param _id the unique id by the admin
  delete(_id) {
    return new Promise((resolve, reject) => {
      this.database.remove(
        {
          _id
        },
        {},
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to delete admin");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }
}

export default AdminDatabase;

//   id: ,
//   username: "",
//   password: "",
//   firstName: "",
//   lastName: "",
