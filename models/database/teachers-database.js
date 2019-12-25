/**
 * @class TeachersDatabase CRUD operations on the Teachers table
 * @constructor constructor initialise a connection to the database
 *
 */
class TeachersDatabase {
  constructor(databaseConn) {
    // databaseConn stores the connection
    this.databaseConn = databaseConn;
  }

  // fetch all teachers in the database
  fetchAll() {
    return this.databaseConn.all("SELECT * FROM teachers");
  }

  // fetch teacher by id
  fetchOne(id) {
    return this.databaseConn.get(
      "SELECT * FROM teachers WHERE teacher_id = ?",
      [id]
    );
  }

  // update teacher details where id equals teacher_id
  update(teacher) {
    const {
      teacherId,
      firstName,
      lastName,
      classroom,
      gender,
      birthDate,
      email,
      phoneNumber,
      isHeadTutor
    } = teacher;

    return this.databaseConn.run(
      "UPDATE Teachers SET first_name = ?, last_name = ?, classroom = ?, gender = ?, birth_date= ?, email = ?, phone_number = ?, is_head_tutor = ? WHERE id = ?",
      [
        firstName,
        lastName,
        classroom,
        gender,
        birthDate,
        email,
        phoneNumber,
        isHeadTutor,
        teacherId
      ]
    );
  }

  // add teacher to the database
  add(teacher) {
    const {
      teacherId,
      firstName,
      lastName,
      classroom,
      gender,
      birthDate,
      email,
      phoneNumber,
      isHeadTutor
    } = teacher;

    return this.databaseConn.run(
      "INSERT INTO Teachers(teacher_id, first_name, last_name, classroom, gender, birth_date,  email, phone_number, is_head_tutor) VALUES( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? );",
      [
        teacherId,
        firstName,
        lastName,
        classroom,
        gender,
        birthDate,
        email,
        phoneNumber,
        isHeadTutor
      ]
    );
  }

  // delete teacher from the database
  delete(teacher) {
    const { teacherId } = teacher;

    return this.databaseConn.run("DELETE FROM Teachers WHERE id = ?", [
      teacherId
    ]);
  }
}

export default TeachersDatabase;
