/**
 * @class AttendanceTable CRUD operations on the Attendance table
 * @constructor constructor initializes a connection to the database
 *
 */
class AttendanceTable {
  constructor(database) {
    this.database = database;
  }

  // fetch all attendances in the database
  fetchAll() {
    return this.database.all(`SELECT * FROM Fees`);
  }

  // fetch attendance by id
  fetchOne(id) {
    return this.database.get(`SELECT * FROM Fees WHERE attendance_id = ?`, [
      id
    ]);
  }

  // update attendance details where id equals attendance_id
  update(attendance) {
    const { attendanceId, dateOfAttendance, present, absent } = attendance;

    return this.database.run(
      `UPDATE Fees
      SET date_of_attendance = ?,
        present = ?,
        absent = ?
      WHERE attendance_id = ?`,
      [dateOfAttendance, present, absent, attendanceId]
    );
  }

  // add attendance to the database
  // param attendance contains object of attendance details
  add(attendance) {
    const { studentId, dateOfAttendance, present, absent } = attendance;

    return this.database.run(
      `INSERT INTO Fees (
        student_id,
        date_of_attendance,
        present,
        absent)
      VALUES( ? , ? , ? , ?)`,
      [studentId, dateOfAttendance, present, absent]
    );
  }

  // delete attendance from the database
  // param id the unique id of the attendance
  delete(id) {
    return this.database.run(`DELETE FROM Fees WHERE attendance_id = ?`, [id]);
  }
}

export default AttendanceTable;

//   attendanceId,
//   studentId,
//   dateOfAttendance
//   present,
//   absent,
