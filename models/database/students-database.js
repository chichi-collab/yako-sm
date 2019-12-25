/**
 * @class StudentsDatabase CRUD operations on the Students table
 * @constructor constructor initializes a connection to the database
 *
 */
class StudentsDatabase {
  constructor(databaseConn) {
    // databaseConn stores the connection
    this.databaseConn = databaseConn;
  }

  // fetch all students in the database
  fetchAll() {
    return this.databaseConn.all("SELECT * FROM Students");
  }

  // fetch student by id
  fetchOne(id) {
    return this.databaseConn.get(
      "SELECT * FROM Students WHERE student_id = ?",
      [id]
    );
  }

  // update student details where id equals student_id
  update(student) {
    const {
      studentId,
      firstName,
      lastName,
      classroom,
      gender,
      birthDate,
      parentName,
      parentContact,
      relation,
      address
    } = student;

    return this.databaseConn.run(
      "UPDATE Students SET first_name = ?, last_name = ?, classroom = ?, gender = ?, birth_date= ?, parent_name = ?, parent_contact = ?, relation = ?, address = ? WHERE id = ?",
      [
        firstName,
        lastName,
        classroom,
        gender,
        birthDate,
        parentName,
        parentContact,
        relation,
        address,
        studentId
      ]
    );
  }

  // add student to the database
  add(student) {
    const {
      studentId,
      firstName,
      lastName,
      classroom,
      gender,
      birthDate,
      parentName,
      parentContact,
      relation,
      address
    } = student;

    return this.databaseConn.run(
      "INSERT INTO Students(student_id, first_name, last_name, classroom, gender, birth_date, parent_name, parent_contact, relation, address) VALUES( ? , ? , ? , ? , ? , ? , ? , ? , ? , ?); ",
      [
        studentId,
        firstName,
        lastName,
        classroom,
        gender,
        birthDate,
        parentName,
        parentContact,
        relation,
        address
      ]
    );
  }

  // delete student from the database
  delete(student) {
    const { studentId } = student;

    return this.databaseConn.run("DELETE FROM Students WHERE id = ?", [
      studentId
    ]);
  }
}

export default StudentsDatabase;
