import path from "path";
import Datastore from "nedb";
import Promise from "bluebird";

/**
 * @class TeachersDatabase CRUD operations on the Teachers table
 * @constructor constructor initializes a connection to the database
 *
 */
class TeachersDatabase {
  constructor() {
    // teachers database file path
    let databasePath = path.resolve(__dirname, "./teachers-table.db");

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

  // fetch all teachers in the database
  fetchAll() {
    return new Promise((resolve, reject) => {
      this.database.find({}, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to fetch all teachers");
          reject(error);
        }

        resolve(result);
      });
    });
  }

  // fetch teacher by id
  fetchOne(_id) {
    return new Promise((resolve, reject) => {
      this.database.findOne(
        {
          _id
        },
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to fetch teacher by id");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }

  // update teacher details where id equals
  // param teacher contains an object of the teacher details
  update(teacher) {
    const { _id } = teacher;

    return new Promise((resolve, reject) => {
      this.database.update(
        {
          _id
        },
        teacher,
        {},
        (error, numReplaced) => {
          if (error) {
            console.log("[-] Error: failed to fetch teacher by id");
            reject(error);
          } else if (numReplaced == 1) {
            resolve("update teacher details successfully");
          }
        }
      );
    });
  }

  // add teacher to the database
  // param teacher contains object of teacher details
  add(teacher) {
    return new Promise((resolve, reject) => {
      this.database.insert(teacher, (error, result) => {
        if (error) {
          console.log("[-] Error: failed to add new teacher");
          reject(error);
        }
        resolve(result);
      });
    });
  }

  // delete teacher from the database
  // param _id the unique id by the teacher
  delete(_id) {
    return new Promise((resolve, reject) => {
      this.database.remove(
        {
          _id
        },
        {},
        (error, result) => {
          if (error) {
            console.log("[-] Error: failed to delete teacher");
            reject(error);
          }

          resolve(result);
        }
      );
    });
  }
}

export default TeachersDatabase;

//   id: 1,
//   firstName: "Okai",
//   lastName: "Kloy",
//   classroom: "JHS 1",
//   gender: "Male",
//   birthDate: "",
//   email: "",
//   contact: "",
//   isHeadTutor: true
