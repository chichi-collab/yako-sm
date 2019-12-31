import Datastore from "nedb";
import Promise from "bluebird";

import electron from "electron";
const app = electron.remote.app;

const userData = app.getPath("userData"); // user data path to bundled app

/**
 * @class StudentsDatabase CRUD operations on the Students table
 * @constructor constructor initializes a connection to the database
 *
 */
class StudentsDatabase {
  constructor() {
    // teachers database file path
    let databasePath = userData + "/databases/students-table.db";

    // initializes database with the database file path
    this.database = new Datastore({
      filename: databasePath,
      autoload: true
    });
  }

  // fetch all students in the database
  fetchAll() {
    return new Promise((resolve, reject) => {
      this.database.find({}, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to fetch all students");
          reject(error);
        }

        resolve(result);
      });
    });
  }

  // fetch student by _id
  fetchOne(_id) {
    return new Promise((resolve, reject) => {
      this.database.findOne(
        {
          _id
        },
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to fetch student by id");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }

  // update student details where id equals student_id
  update(student) {
    const { _id } = student;

    return new Promise((resolve, reject) => {
      this.database.update(
        {
          _id
        },
        student,
        {},
        (error, numReplaced) => {
          if (error) {
            console.log("[-] Error: failed to fetch student by id");
            reject(error);
          } else if (numReplaced == 1) {
            resolve("update student details successfully");
          }
        }
      );
    });
  }

  // add student to the database
  // param student contains object of student details
  add(student) {
    return new Promise((resolve, reject) => {
      this.database.insert(student, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to add new student");
          reject(error);
        }
        resolve(result);
      });
    });
  }

  // delete student from the database
  // param _id the unique id by the student
  delete(_id) {
    return new Promise((resolve, reject) => {
      this.database.remove(
        {
          _id
        },
        {},
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to delete student");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }
}

export default StudentsDatabase;

//   id: 1,
//   firstName: "Okai",
//   lastName: "Kloy",
//   classroom: "JHS 1",
//   gender: "Male",
//   birthDate: "",
//   parentName: "",
//   parentContact: ""
//   relation: "",
//   digitalAddress: ""
