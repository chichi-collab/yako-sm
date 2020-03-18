/**
 * @class FeesTable CRUD operations on the Fees table
 * @constructor initializes a connection to the database
 *
 */
class FeesTable {
  constructor(database) {
    this.database = database;
  }

  // fetch all fees in the database
  fetchAll() {
    return this.database.all(`SELECT * FROM Fees`);
  }

  // fetch fees by id
  fetchOne(id) {
    return this.database.get(`SELECT * FROM Fees WHERE fees_id = ?`, [id]);
  }

  // update fees details where id equals fees_id
  update(fees) {
    const {
      feesId,
      studentName,
      studentClass,
      feesPaid,
      paidDate,
      studentId
    } = fees;

    return this.database.run(
      `UPDATE Fees
      SET student_name = ?,
        student_class = ?,
        fees_paid = ?,
        paid_date = ?,
        student_id = ?
      WHERE fees_id = ?`,
      [studentName, studentClass, feesPaid, paidDate, studentId, feesId]
    );
  }

  // update total fees of all fees
  updateTotalFees(totalFees) {
    return this.databaseConn.run(
      `UPDATE Fees
      SET total_fees = ?`,
      [totalFees]
    );
  }

  // add fee to the database
  // param fee contains object of fee paid
  add(fees) {
    const { studentName, studentClass, feesPaid, paidDate, studentId } = fees;

    return this.database.run(
      `INSERT INTO Fees (
        student_name,
        student_class,
        fees_paid,
        paid_date,
        student_id)
      VALUES( ? , ? , ? , ? , ? )`,
      [studentName, studentClass, feesPaid, paidDate, studentId]
    );
  }

  // delete fee from the database
  // param id by fees_id
  delete(id) {
    return this.database.run(`DELETE FROM Fees WHERE fees_id = ?`, [id]);
  }
}

export default FeesTable;

//   feesId,
//   studentName,
//   studentClass,
//   feesPaid,
//   totalFees,
//   paidDate,
//   studentId,
