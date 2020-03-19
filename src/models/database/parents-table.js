/**
 * @class ParentsTable CRUD operations on the Parents table
 * @constructor initializes a connection to the database
 *
 */
class ParentsTable {
  constructor(database) {
    this.database = database;
  }

  // fetch all parents in the database
  fetchAll() {
    return this.database.all(`SELECT * FROM Parents`);
  }

  // fetch parent by student_id
  fetchOne(id) {
    return this.database.get(`SELECT * FROM Parents WHERE student_id = ?`, [
      id
    ]);
  }

  // update parent details by id
  update(parent) {
    const { parentName, parentContact, studentId, relation } = parent;

    return this.database.run(
      `UPDATE Parents
      SET parent_name = ?,
        parent_contact = ?,
        relation = ?
      WHERE student_id = ?`,
      [parentName, parentContact, relation, studentId]
    );
  }

  // add parent to the database
  // param parent contains object of parent details
  add(parent) {
    const { parentName, parentContact, studentId, relation } = parent;

    return this.database.run(
      `INSERT INTO Parents (
        parent_name,
        parent_contact,
        student_id,
        relation)
      VALUES( ? , ? , ? , ?)`,
      [parentName, parentContact, studentId, relation]
    );
  }

  // delete parent from the database
  // param id: student_id
  delete(id) {
    return this.database.run(`DELETE FROM Parents WHERE student_id = ?`, [id]);
  }
}

export default ParentsTable;

//   parentId,
//   parentName,
//   parentContact,
//   parentId,
//   relation
