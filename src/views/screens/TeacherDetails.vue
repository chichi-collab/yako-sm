<template>
  <div class="contain-area">
    <div class="content">
      <!-- Teacher's Details -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">Teacher Details</span>
          <!-- control box for window container -->
          <div class="control-box prevent-select">
            <font-awesome-icon icon="times" class="fa fa-times" @click="closeCurrentWindow" />
          </div>
        </div>
        <div class="line"></div>

        <!-- form here -->
        <div class="profile-container">
          <div class="user-img"></div>

          <div class="input-container">
            <div>
              <span>Id Number</span>
              <br />
              <div class="info-card">
                <span>{{ teacherDetails.teacher_id }}</span>
              </div>
            </div>
            <div>
              <span>First Name</span>
              <br />
              <div class="info-card">
                <span>{{ teacherDetails.first_name }}</span>
              </div>
            </div>
            <div>
              <span>Last Name</span>
              <br />
              <div class="info-card">
                <span>{{ teacherDetails.last_name }}</span>
              </div>
            </div>
            <div>
              <span>Class</span>
              <br />
              <div class="info-card">
                <span>{{ teacherDetails.classroom }}</span>
              </div>
            </div>
            <div>
              <span>Gender</span>
              <br />
              <div class="info-card">
                <span>{{ teacherDetails.gender }}</span>
              </div>
            </div>
            <div>
              <span>Date of Birth</span>
              <br />
              <div class="info-card">
                <span>{{ teacherDetails.birth_date }}</span>
              </div>
            </div>
            <div>
              <span>Email</span>
              <br />
              <div class="info-card">
                <span>{{ teacherDetails.email }}</span>
              </div>
            </div>
            <div>
              <span>Contact</span>
              <br />
              <div class="info-card">
                <span>{{ teacherDetails.phone_number }}</span>
              </div>
            </div>
            <div>
              <span>HeadTutor</span>
              <br />
              <div class="info-card">
                <span>{{ teacherDetails.is_head_tutor }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// node_modules
const { ipcRenderer, remote } = require("electron");

// database scripts
import Database from "@/models/database/database";
import TeachersTable from "@/models/database/teachers-table";

// init TeachersTable
const teachersTable = new TeachersTable(new Database());

export default {
  name: "teacherDetails",
  created() {
    ipcRenderer.on("teacher-id", (event, arg) => {
      this.teacherId = arg;

      teachersTable
        .fetchOne(this.teacherId)
        .then(result => {
          this.teacherDetails = result;
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  data() {
    return { teacherId: "", teacherDetails: {} };
  },
  methods: {
    closeCurrentWindow() {
      let currentWindow = remote.getCurrentWindow();
      currentWindow.close();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain-area {
  margin-top: 10px;
  background: #e8e9ec;
}

.container-for-table {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  height: 400px;
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
  margin-right: 0px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px;
  height: 20px;
}

.control-box .fa-times {
  font-size: 12px;
  color: rgb(204, 34, 34);
}

.control-box .fa-times:hover {
  color: rgb(236, 16, 16);
}

.profile-container {
  display: grid;
  grid-template-columns: 256px 1fr;
}

.user-img {
  /* background: url("../img/me.jpg"); */
  background: #192060;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  padding: 5px;
  margin: 10px;
  margin-top: 25px;
}

.input-container {
  margin: 20px;
  font-size: 15px;
  color: #303030;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

.info-card {
  background: #e8e9ec;
  color: #303030;
  margin-top: 5px;
  padding: 7px;
  font-weight: bold;
  font-size: 17px;
  border-radius: 5px;
  width: 100%;
  height: 35px;
}
</style>
