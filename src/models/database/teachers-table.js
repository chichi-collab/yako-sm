/**
 * @class TeachersTable CRUD operations on the Teachers table
 * @constructor initializes a connection to the database
 *
 */
class TeachersTable {
  constructor(database) {
    this.database = database;
  }

  // fetch all teachers in the database
  fetchAll() {
    return this.database.all(`SELECT * FROM Teachers`);
  }

  // fetch teacher by id
  fetchOne(id) {
    return this.database.get(`SELECT * FROM Teachers WHERE teacher_id = ?`, [
      id
    ]);
  }

  // update teacher details where id equals
  // param teacher contains an object of the teacher details
  update(teacher) {
    const {
      teacherId,
      firstName,
      lastName,
      classroom,
      gender,
      birthDate,
      email,
      contact,
      isHeadTutor
    } = teacher;

    return this.database.run(
      `UPDATE Teachers
      SET first_name = ?,
        last_name = ?,
        classroom = ?,
        gender = ?,
        birth_date = ?,
        email = ?,
        phone_number = ?,
        is_head_tutor = ? 
      WHERE teacher_id = ?`,
      [
        firstName,
        lastName,
        classroom,
        gender,
        birthDate,
        email,
        contact,
        isHeadTutor,
        teacherId
      ]
    );
  }

  // add teacher to the database
  // param teacher contains object of teacher details
  add(teacher) {
    const {
      firstName,
      lastName,
      classroom,
      gender,
      birthDate,
      email,
      contact,
      isHeadTutor
    } = teacher;

    return this.database.run(
      `INSERT INTO Teachers (
        first_name,
        last_name,
        classroom,
        gender,
        birth_date,
        email,
        phone_number,
        is_head_tutor)
      VALUES( ? , ? , ? , ? , ? , ? , ? , ?)`,
      [
        firstName,
        lastName,
        classroom,
        gender,
        birthDate,
        email,
        contact,
        isHeadTutor
      ]
    );
  }

  // delete teacher from the database
  // param id the unique id by the teacher
  delete(id) {
    return this.database.run(`DELETE FROM Teachers WHERE teacher_id = ?`, [id]);
  }
}

export default TeachersTable;

//   id: 1,
//   firstName: "Okai",
//   lastName: "Kloy",
//   classroom: "JHS 1",
//   gender: "Male",
//   birthDate: "",
//   email: "",
//   contact: "",
//   isHeadTutor: true
