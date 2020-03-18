/**
 * @class StudentsTable CRUD operations on the Students table
 * @constructor initializes a connection to the database
 *
 */
class StudentsTable {
  constructor(database) {
    this.database = database;
  }

  // fetch all students from the Students table
  fetchAll() {
    return this.database.all(`SELECT * FROM Students`);
  }

  // fetch student by id
  fetchOne(id) {
    return this.database.get(`SELECT * FROM Students WHERE id = ?`, [id]);
  }

  // update student details by id
  update(student) {
    const {
      id,
      firstName,
      lastName,
      classroom,
      gender,
      birthDate,
      digitalAddress
    } = student;

    return this.database.run(
      `UPDATE Students
      SET first_name = ?,
        last_name = ?,
        classroom = ?,
        gender = ?,
        birth_date = ?,
        address = ?
      WHERE id = ?`,
      [firstName, lastName, classroom, gender, birthDate, digitalAddress, id]
    );
  }

  // add student to the database
  // param student contains object of student details
  add(student) {
    const {
      firstName,
      lastName,
      classroom,
      gender,
      birthDate,
      digitalAddress
    } = student;

    return this.database.run(
      `INSERT INTO Students (
        first_name,
        last_name,
        classroom,
        gender,
        birth_date,
        address)
      VALUES( ? , ? , ? , ? , ? , ?)`,
      [firstName, lastName, classroom, gender, birthDate, digitalAddress]
    );
  }

  // delete student from the Students table
  // param id: id
  delete(id) {
    return this.database.run(`DELETE FROM Students WHERE id = ?`, [id]);
  }

  // fetch students by classroom
  fetchByClassroom(classroom) {
    return this.database.get(`SELECT * FROM Students WHERE classroom = ?`, [
      classroom
    ]);
  }
}

export default StudentsTable;

//   id: 1,
//   firstName: "Okai",
//   lastName: "Kloy",
//   classroom: "JHS 1",
//   gender: "Male",
//   birthDate: "",
//   parentName: "",
//   parentContact: ""
//   relation: "",
//   digitalAddress
