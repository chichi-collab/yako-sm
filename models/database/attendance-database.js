import Datastore from "nedb";
import Promise from "bluebird";

import electron from "electron";
const app = electron.remote.app;

const userData = app.getPath("userData"); // user data path to bundled app

/**
 * @class AttendanceDatabase CRUD operations on the Attendance table
 * @constructor constructor initializes a connection to the database
 *
 */
class AttendanceDatabase {
  constructor() {
    // attendances database file path
    let databasePath = userData + "/databases/attendance-table.db";

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

  // fetch all attendances in the database
  fetchAll() {
    return new Promise((resolve, reject) => {
      this.database.find({}, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to fetch all attendances");
          reject(error);
        }

        resolve(result);
      });
    });
  }

  // fetch attendance by _id
  fetchOne(_id) {
    return new Promise((resolve, reject) => {
      this.database.findOne(
        {
          _id
        },
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to fetch attendance by id");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }

  // update attendance details where id equals attendance_id
  update(attendance) {
    const { _id } = attendance;

    return new Promise((resolve, reject) => {
      this.database.update(
        {
          _id
        },
        attendance,
        {},
        (error, numReplaced) => {
          if (error) {
            console.log("[-] Error: failed to fetch attendance by id");
            reject(error);
          } else if (numReplaced == 1) {
            resolve("update attendance details successfully");
          }
        }
      );
    });
  }

  // add attendance to the database
  // param attendance contains object of attendance details
  add(attendance) {
    return new Promise((resolve, reject) => {
      this.database.insert(attendance, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to add new attendance");
          reject(error);
        }
        resolve(result);
      });
    });
  }

  // delete attendance from the database
  // param _id the unique id by the attendance
  delete(_id) {
    return new Promise((resolve, reject) => {
      this.database.remove(
        {
          _id
        },
        {},
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to delete attendance");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }
}

export default AttendanceDatabase;

//   id: ,
//   studentId: "",
//   present: "",
//   absent: "",
