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

  // fetch notice by today's date
  fetchByToday(date) {
    return this.database.all(
      `SELECT * FROM NoticeBoard WHERE notice_date = ?`,
      [date]
    );
  }

  // update notice details where id: notice_board_id
  update(notice) {
    const { noticeBoardId, title, event, noticeDate } = notice;

    return this.database.run(
      `UPDATE NoticeBoard
      SET title = ?,
        event = ?,
        notice_date = ?
      WHERE notice_board_id = ?`,
      [title, event, noticeDate, noticeBoardId]
    );
  }

  // add notice to the database
  // param notice contains object of notice paid
  add(notice) {
    const { title, event, noticeDate } = notice;

    return this.database.run(
      `INSERT INTO NoticeBoard (
        title,
        event,
        notice_date)
      VALUES( ? , ? , ?)`,
      [title, event, noticeDate]
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

//   notice_board_id,
//   title,
//   event,
//   notice_date,
