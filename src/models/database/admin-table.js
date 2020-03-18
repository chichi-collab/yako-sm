/**
 * @class AdminTable CRUD operations on the Admin table
 * @constructor initializes a connection to the database
 *
 */
class AdminTable {
  constructor(database) {
    this.database = database;
  }

  // fetch admin by id
  getById(id) {
    return this.database.get(`SELECT * FROM Admin WHERE admin_id = ?`, [id]);
  }

  // update admin details where id equals admin_id
  update(admin) {
    const { id, username, password, fullName, rememberMe } = admin;

    return this.database.run(
      `UPDATE Admin
      SET username = ?,
        password = ?,
        fullName = ?,
        rememberMe = ?
      WHERE id = ?`,
      [username, password, fullName, rememberMe, id]
    );
  }
}

export default AdminTable;

//   id: ,
//   username: "",
//   password: "",
//   fullName: "",
//   rememberMe: "",
