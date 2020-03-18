<template>
  <div class="contain-area">
    <p class="content-title">
      <router-link to="/teachers">
        <i class="fa fa-arrow-left"></i>
      </router-link>
    </p>
    <div class="content">
      <!-- All Teachers -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">Edit Teacher Details</span>
          <!-- control box for window container -->
          <div class="control-box prevent-select">
            <font-awesome-icon icon="times" class="fa fa-times" @click="closeCurrentWindow" />
          </div>
        </div>
        <div class="line"></div>

        <!-- form here -->
        <div class="profile-container">
          <form>
            <div class="input-container">
              <div>
                <span>Id Number</span>
                <br />
                <input type="number" v-model="teacherId" readonly />
              </div>
              <div>
                <span>First Name</span>
                <br />
                <input type="text" v-model="firstName" />
              </div>
              <div>
                <span>Last Name</span>
                <br />
                <input type="text" v-model="lastName" />
              </div>
              <div>
                <span>Class</span>
                <br />
                <input type="text" v-model="classroom" />
              </div>
              <div>
                <span>Gender</span>
                <br />
                <select v-model="gender">
                  <option disabled value>Please choose gender...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <span>Date of Birth</span>
                <br />
                <input type="date" v-model="birthDate" />
              </div>
              <div>
                <span>Email</span>
                <br />
                <input type="email" v-model="email" />
              </div>
              <div>
                <span>Contact</span>
                <br />
                <input type="phone" v-model="contact" />
              </div>
              <div>
                <span>Head Tutor</span>
                <br />
                <input type="checkbox" v-model="isHeadTutor" />
              </div>
              <div class="btn-container">
                <input type="button" value="Save" class="save-btn" @click="updateTeacherDetails" />
                <input
                  type="button"
                  value="Revert Changes"
                  class="reset-btn"
                  @click="refreshTeacherDetails(teacherId)"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer, remote } from "electron";

// database scripts
import Database from "@/models/database/database";
import TeachersTable from "@/models/database/teachers-table";

// init TeachersTable
const teachersTable = new TeachersTable(new Database());

export default {
  name: "EditTeacherDetails",
  created() {
    ipcRenderer.on("teacher-id", (event, arg) => {
      this.teacherId = arg;

      this.refreshTeacherDetails(this.teacherId);
    });
  },
  data() {
    return {
      teacherId: "",
      teacherDetails: {},
      id: "",
      firstName: "",
      lastName: "",
      classroom: "",
      gender: "",
      birthDate: "",
      email: "",
      contact: "",
      isHeadTutor: ""
    };
  },
  methods: {
    updateTeacherDetails() {
      const teacherNewDetails = {
        teacherId: this.teacherId,
        firstName: this.firstName,
        lastName: this.lastName,
        classroom: this.classroom,
        gender: this.gender,
        birthDate: this.birthDate,
        email: this.email,
        contact: this.contact,
        isHeadTutor: this.isHeadTutor
      };

      teachersTable
        .update(teacherNewDetails)
        .then(result => {
          ipcRenderer.send("open-teacher-information-dialog");
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    },
    refreshTeacherDetails(teacherId) {
      teachersTable
        .fetchOne(teacherId)
        .then(result => {
          this.teacherDetails = result;

          // set default data values to teacherDetails
          this.firstName = this.teacherDetails.first_name;
          this.id = this.teacherDetails.teacher_id;
          this.lastName = this.teacherDetails.last_name;
          this.classroom = this.teacherDetails.classroom;
          this.gender = this.teacherDetails.gender;
          this.birthDate = this.teacherDetails.birth_date;
          this.email = this.teacherDetails.email;
          this.contact = this.teacherDetails.phone_number;
          this.isHeadTutor = this.teacherDetails.is_head_tutor;
        })
        .catch(err => {
          console.log(err);
        });
    },
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

form {
  margin: 20px;
  font-size: 15px;
  font-weight: 300;
  color: #303030;
}

.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

input[type="text"],
input[type="date"],
input[type="email"],
input[type="phone"],
input[type="number"] {
  border-radius: 5px;
  background: #e8e9ec;
  outline: none;
  border: none;
  height: 33px;
  padding: 5px;
  color: #303030;
  font-weight: 100;
  width: 100%;
  margin-top: 5px;
}

.btn-container {
  display: grid;
  grid-template-columns: 120px 120px;
  grid-column-gap: 30px;
  margin-top: 30px;
}

input[type="button"] {
  border-radius: 5px;
  outline: none;
  border: none;
  height: 33px;
  padding: 5px;
  color: #fff;
  font-weight: bold;
  width: 100%;
  margin-top: 5px;
}

select {
  border-radius: 5px;
  background: #f3f3f3;
  height: 30px;
  padding: 5px;
  color: #303030;
  font-weight: 100;
  width: 100%;
  margin-top: 10px;
  width: 250px;
}

.reset-btn {
  background: #ffe711;
}

.save-btn {
  background: #3686ff;
}
</style>
