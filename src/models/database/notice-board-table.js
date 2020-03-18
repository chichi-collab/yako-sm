/**
 * @class NoticeBoardTable CRUD operations on the NoticeBoard table
 * @constructor initializes a connection to the database
 *
 */
class NoticeBoardTable {
  constructor(database) {
    this.database = database;
  }

  // fetch all notices from the NoticeBoard table
  fetchAll() {
    return this.database.all(`SELECT * FROM NoticeBoard`);
  }

  // fetch notice by id
  fetchOne(id) {
    return this.database.get(
      `SELECT * FROM NoticeBoard WHERE notice_board_id = ?`,
      [id]
    );
  }

  // update notice details where id: notice_board_id
  update(notice) {
    const { noticeBoardId, name, event, noticeDate } = notice;

    return this.database.run(
      `UPDATE NoticeBoard
      SET name = ?,
        event = ?,
        noticeDate = ?
      WHERE notice_board_id = ?`,
      [name, event, noticeDate, noticeBoardId]
    );
  }

  // add notice to the database
  // param notice contains object of notice paid
  add(notice) {
    const { name, event, noticeDate } = notice;

    return this.database.run(
      `INSERT INTO NoticeBoard (
        name,
        event,
        noticeDate)
      VALUES( ? , ? , ?)`,
      [name, event, noticeDate]
    );
  }

  // delete notice from the NoticeBoard table
  // param id: notice_board_id
  delete(id) {
    return this.database.run(
      `DELETE FROM NoticeBoard WHERE notice_board_id = ?`,
      [id]
    );
  }
}

export default NoticeBoardTable;

//   noticeBoardId,
//   name,
//   event,
//   noticeDate,
