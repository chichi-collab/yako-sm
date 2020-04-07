<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="contain-area">
        <p class="content-title">Notice Board</p>
        <div class="content">
          <!-- Add Notice -->
          <div class="container-for-table">
            <div class="title-bar">
              <span class="window-title">Notice Board Information</span>
              <!-- control box for window container -->
              <div class="control-box prevent-select">
                <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
                <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
                <font-awesome-icon icon="times" class="fa fa-times" />
              </div>
            </div>
            <div class="line"></div>

            <!-- form here -->
            <form>
              <div class="input-container">
                <div>
                  <span>Title</span>
                  <br />
                  <input type="text" v-model="title" />
                </div>
                <div>
                  <span>Event Date</span>
                  <br />
                  <input type="date" v-model="noticeDate" />
                </div>
                <div class="btn-container">
                  <input
                    type="button"
                    value="Save"
                    class="save-btn"
                    @click="addNotice"
                  />
                  <input type="reset" value="Reset" class="reset-btn" />
                </div>
              </div>
              <div class="event">
                <span>Event</span>
                <br />
                <textarea type="" v-model="event"> </textarea>
              </div>
            </form>
            <!-- Table for notices stored -->
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Event</th>
                    <th>Event Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr v-for="(notice, index) in noticesData" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ notice.title }}</td>
                    <td>{{ notice.event }}</td>
                    <td>{{ notice.notice_date }}</td>
                    <td>
                      <div class="action-box prevent-select">
                        <font-awesome-icon
                          icon="eye"
                          @click="openNoticeDetails(notice.notice_board_id)"
                          class="fa-eye"
                        />
                        <font-awesome-icon
                          icon="user-edit"
                          @click="openEditNoticeDetails(notice.notice_board_id)"
                          class="fa-user-edit"
                        />
                        <font-awesome-icon
                          icon="trash-alt"
                          class="fa-trash-alt"
                          @click="removeNotice(notice.notice_board_id)"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";
import { day, month, year } from "../utils/date";

// convert today's date to YYYY-MM-DD format
let monthToString = month.toString();
if (monthToString.length == 1) {
  monthToString = `0${month}`;
}

let dayToString = day.toString();
if (dayToString.length == 1) {
  dayToString = `0${day}`;
}

const today = `${year}-${monthToString}-${dayToString}`;

// database scripts
import Database from "@/models/database/database";
import NoticeBoard from "@/models/database/notice-board-table";

// init TeachersTable
const noticeBoardTable = new NoticeBoard(new Database());

export default {
  name: "noticeBoard",
  components: {
    InfoBar,
    SideMenuBar
  },
  mounted() {
    this.refreshNoticeBoardData();
  },
  data() {
    return {
      title: "",
      event: "",
      noticeDate: `${today}`,
      noticesData: []
    };
  },
  methods: {
    addNotice() {
      const noticeData = {
        title: this.title,
        event: this.event,
        noticeDate: this.noticeDate
      };

      console.log(noticeData);

      noticeBoardTable
        .add(noticeData)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });

      this.refreshNoticeBoardData();
      this.resetForm();
    },
    refreshNoticeBoardData() {
      noticeBoardTable
        .fetchAll()
        .then(result => {
          this.noticesData = result;
        })
        .catch(err => {
          console.log(err);
        });
    },
    removeNotice(id) {
      noticeBoardTable
        .delete(id)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });

      this.refreshNoticeBoardData();
    },
    openNoticeDetails() {
      // when the button is clicked set the click variable to true
      // this.clicked = !this.clicked
    },
    openEditNoticeDetails() {
      // when the button is clicked set the click variable to true
      // this.clicked = !this.clicked
    },
    resetForm() {
      this.title = "";
      this.event = "";
      this.noticeDate = "";
    }
  }
};
</script>

<style scoped>
.contain-area {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 15px;
  background: #f3f3f3;
}

.content-title {
  margin-bottom: 5px;
}

.container-for-table {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  height: 580px;
}

.title-bar {
  border-radius: 5px;
  background: rgb(255, 255, 255);
  margin-bottom: 1.5px;
  height: 20px;
}

.window-title {
  height: 20px;
  padding: 2px;
  color: #3d3c3c;
  margin-left: 5px;
  float: left;
}

.container-for-table .line {
  border-top: 1px solid #eee;
}

.control-box {
  float: right;
  display: grid;
  margin-right: 5px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px;
  height: 20px;
}

.control-box .fa-sync-alt {
  font-size: 10px;
  margin-right: 5px;
  color: rgb(16, 172, 24);
}

.control-box .fa-times {
  font-size: 12px;
  margin-right: 2px;
  color: rgb(204, 34, 34);
}

.control-box .fa-angle-down {
  font-size: 14px;
  color: rgb(224, 203, 7);
}

.control-box .fa-times:hover {
  color: rgb(236, 16, 16);
}

.control-box .fa-angle-down:hover {
  color: rgb(246, 222, 4);
}

.control-box .fa-sync-alt:hover {
  color: rgb(14, 233, 25);
}

form {
  margin: 10px;
  font-size: 15px;
  font-weight: 300;
  color: #303030;
}

.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

input[type="text"],
input[type="date"] {
  border-radius: 5px;
  background: #f3f3f3;
  outline: none;
  border: none;
  height: 30px;
  padding: 5px;
  color: #303030;
  font-weight: 100;
  width: 100%;
  margin-top: 5px;
}

.btn-container {
  display: grid;
  grid-template-columns: 113px 113px;
  grid-column-gap: 30px;
  margin-top: 17px;
}

input[type="button"],
input[type="reset"] {
  border-radius: 5px;
  outline: none;
  border: none;
  height: 30px;
  padding: 5px;
  color: #fff;
  font-weight: bold;
  width: 100%;
  margin-top: 5px;
}

textarea {
  border-radius: 5px;
  outline: none;
  border: none;
  background: #f3f3f3;
  height: 60px;
  padding: 5px;
  color: #303030;
  font-weight: bold;
  width: 65.5%;
  margin-top: 5px;
}

.event {
  margin-top: 10px;
}

.reset-btn {
  background: #ffe711;
}

.save-btn {
  background: #3686ff;
}

.action-box .fa-trash-alt {
  font-size: 12px;
  color: rgb(204, 34, 34);
}

.action-box .fa-eye {
  font-size: 14px;
  color: rgb(224, 203, 7);
}

.action-box .fa-trash-alt:hover {
  color: rgb(236, 16, 16);
}

.action-box .fa-eye:hover {
  color: rgb(246, 222, 4);
}

.action-box .fa-user-edit:hover {
  color: rgb(14, 233, 25);
}

.action-box .fa-user-edit {
  color: rgb(16, 172, 24);
}

table {
  width: 100%;
  table-layout: fixed;
}

.tbl-header {
  background-color: #302d43;
}

.tbl-content {
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

th {
  color: #fff;
  padding: 10px;
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  border-bottom: 1px solid #f3f3f3;
  text-transform: uppercase;
}

td {
  padding-left: 10px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 14px;
  color: #303030;
  border-bottom: 1px solid #f3f3f3;
}

/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
