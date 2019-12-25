/**
 * @class FeesDatabase CRUD operations on the Fees table
 * @constructor constructor initializes a connection to the database
 *
 */
class FeesDatabase {
  constructor(databaseConn) {
    // databaseConn stores the connection
    this.databaseConn = databaseConn;
  }

  // fetch all students in the database
  fetchAll() {
    return this.databaseConn.all("SELECT * FROM Fees");
  }

  // fetch student by id
  fetchOne(id) {
    return this.databaseConn.get("SELECT * FROM Fees WHERE student_id = ?", [
      id
    ]);
  }

  // update student details where id equals student_id
  update(student) {
    const {
      feesId,
      studentId,
      studentName,
      studentClass,
      feesPaid,
      paidDate
    } = student;

    return this.databaseConn.run(
      "UPDATE Fees SET fees_id = ?, student_name = ?, student_class = ?, fees_paid = ?, paid_date = ? WHERE id = ?",
      [feesId, studentName, studentClass, feesPaid, paidDate, studentId]
    );
  }

  // update total fees of all students
  updateTotalFees(fees) {
    return this.databaseConn.run("UPDATE Fees SET total_fees = ?;", [fees]);
  }

  // add student to the database
  add(student) {
    const {
      feesId,
      studentId,
      studentName,
      studentClass,
      feesPaid,
      paidDate
    } = student;

    return this.databaseConn.run(
      "INSERT INTO Fees(fees_id, student_id, student_name, student_class, fees_paid, paid_date) VALUES( ? , ? , ? , ? , ? , ? , ? , ? , ? , ?); ",
      [feesId, studentId, studentName, studentClass, feesPaid, paidDate]
    );
  }

  // delete student from the database
  delete(student) {
    const { studentId } = student;

    return this.databaseConn.run("DELETE FROM Fees WHERE id = ?", [studentId]);
  }
}

export default FeesDatabase;
