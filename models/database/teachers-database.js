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
    this.databaseConn.all("SELECT * FROM teachers", (error, rows) => {
      // if error return -1 otherwise rows
      if (error) {
        return -1;
      }

      return rows;
    });
  }

  // fetch teacher with id
  fetchOne(id) {
    this.databaseConn.get(
      "SELECT * FROM teachers WHERE teacher_id = ?",
      [id],
      (error, result) => {
        if (error) {
          return -1;
        }

        return result;
      }
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
      religion,
      email,
      phoneNumber,
      isHeadTutor
    } = teacher;

    this.databaseConn.run(
      "UPDATE Teachers SET first_name = ?, last_name = ?, classroom = ?, gender = ?, birth_date= ?, religion = ?, email = ?, phone_number = ?, is_head_tutor = ? WHERE id = ?",
      [
        firstName,
        lastName,
        classroom,
        gender,
        birthDate,
        religion,
        email,
        phoneNumber,
        isHeadTutor,
        teacherId
      ],
      error => {
        if (error) {
          return -1;
        }

        return 0;
      }
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
      religion,
      email,
      phoneNumber,
      isHeadTutor
    } = teacher;

    this.databaseConn.run(
      "INSERT INTO Teachers VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        teacherId,
        firstName,
        lastName,
        classroom,
        gender,
        birthDate,
        religion,
        email,
        phoneNumber,
        isHeadTutor
      ],
      error => {
        if (error) {
          return -1;
        }

        return 0;
      }
    );
  }

  // delete teacher from the database
  delete(teacher) {
    const { teacherId } = teacher;

    this.databaseConn.run(
      "DELETE FROM Teachers WHERE id = ?",
      [teacherId],
      error => {
        if (error) {
          return -1;
        }

        return 0;
      }
    );
  }
}

export default TeachersDatabase;
