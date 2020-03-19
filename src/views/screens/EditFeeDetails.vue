<template>
  <div class="contain-area">
    <p class="content-title">
      <router-link to="/teachers">
        <i class="fa fa-arrow-left"></i>
      </router-link>
    </p>
    <div class="content">
      <!-- All Fees -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">Edit Fee Details</span>
          <!-- control box for window container -->
          <div class="control-box prevent-select">
            <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
            <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
            <font-awesome-icon icon="times" class="fa fa-times" />
          </div>
        </div>
        <div class="line"></div>

        <!-- form here -->
        <form action>
          <div class="input-container">
            <div>
              <span>Id</span>
              <br />
              <input type="number" v-model="id" />
            </div>
            <div>
              <span>Expense Type</span>
              <br />
              <input type="text" v-model="expenseType" />
            </div>
            <div>
              <span>Name</span>
              <br />
              <input type="text" v-model="name" />
            </div>
            <div>
              <span>Status</span>
              <br />
              <select v-model="status">
                <option disabled value>Please choose status...</option>
                <option>Pending</option>
                <option>Received</option>
              </select>
            </div>
            <div>
              <span>Amount Taken</span>
              <br />
              <input type="number" v-model="amountTaken" />
            </div>
            <div>
              <span>Reason</span>
              <br />
              <input type="text" v-model="reason" />
            </div>
            <div>
              <span>Date</span>
              <br />
              <input type="date" v-model="takenDate" />
            </div>
          </div>
          <div class="btn-container">
            <input type="button" value="Save" class="save-btn" @click="addExpense" />
            <input type="reset" value="Reset" class="reset-btn" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

// database scripts
import FeeDatabase from "../../../models/database/teachers-database";

const teacherDatabase = new FeeDatabase();

export default {
  name: "editFeeDetails",
  created() {
    ipcRenderer.on("teacher-id", (event, arg) => {
      this.teacherId = arg;

      teacherDatabase
        .fetchOne(this.teacherId)
        .then(result => {
          this.teacherDetails = result;
          // set default data values to teacherDetails
          this.firstName = this.teacherDetails.firstName;
          this.id = this.teacherDetails.id;
          this.lastName = this.teacherDetails.lastName;
          this.classroom = this.teacherDetails.classroom;
          this.gender = this.teacherDetails.gender;
          this.birthDate = this.teacherDetails.birthdate;
          this.email = this.teacherDetails.email;
          this.contact = this.teacherDetails.phoneNumber;
          this.isHeadTutor = this.teacherDetails.isHeadTutor;
        })
        .catch(err => {
          console.log(err);
        });
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
    saveFeeDetails() {
      const teacherNewDetails = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        classroom: this.classroom,
        gender: this.gender,
        birthDate: this.birthDate,
        email: this.email,
        contact: this.contact,
        isHeadTutor: this.isHeadTutor,
        _id: this.teacherId
      };

      teacherDatabase
        .update(teacherNewDetails)
        .then(result => {
          ipcRenderer.send("open-teacher-information-dialog");
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain-area {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 15px;
  background: #e8e9ec;
}

.content-title {
  color: #282639;
  margin-bottom: 5px;
}

.container-for-table {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  height: 530px;
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
}

form {
  margin: 10px;
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
  height: 30px;
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
  height: 30px;
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
}

.reset-btn {
  background: #ffe711;
}

.save-btn {
  background: #3686ff;
}
</style>
