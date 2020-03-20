<template>
  <div class="contain-area">
    <div class="content">
      <!-- Edit Fee Details -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">Edit Fee Details</span>
          <!-- control box for window container -->
          <div class="control-box prevent-select">
            <font-awesome-icon
              icon="times"
              class="fa fa-times"
              @click="closeCurrentWindow"
            />
          </div>
        </div>
        <div class="line"></div>

        <!-- form here -->
        <form>
          <div class="input-container">
            <div>
              <span>Student Id</span>
              <br />
              <input
                type="number"
                v-model="studentId"
                min="0"
                @change="getStudentDetails"
              />
            </div>
            <div>
              <span>Student Name</span>
              <br />
              <input type="text" v-model="studentName" readonly />
            </div>

            <div>
              <span>Class</span>
              <br />
              <input type="text" v-model="studentClass" readonly />
            </div>
            <div>
              <span>Fees Paid</span>
              <br />
              <input type="number" v-model="feesPaid" min="0" />
            </div>

            <div>
              <span>Date</span>
              <br />
              <input type="date" v-model="paidDate" />
            </div>
          </div>
          <div class="btn-container">
            <input
              type="button"
              value="Save"
              class="save-btn"
              @click="updateFeeDetails"
            />
            <input
              type="button"
              value="Revert Changes"
              class="reset-btn"
              @click="refreshFeeDetails"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer, remote } from "electron";

// database scripts
import Database from "@/models/database/database";
import FeesTable from "@/models/database/fees-table";
import StudentsTable from "@/models/database/students-table";

// init FeesTable and StudentsTable
const feesTable = new FeesTable(new Database());
const studentsTable = new StudentsTable(new Database());

export default {
  name: "editFeeDetails",
  mounted() {
    ipcRenderer.on("fee-id", (event, arg) => {
      this.feesId = arg;

      this.refreshFeeDetails(this.feesId);

      console.log("hello");
    });
  },
  data() {
    return {
      feesId: 0,
      studentId: 0,
      studentName: "",
      studentClass: "",
      feesPaid: 0,
      paidDate: "",
      totalFees: 0,
      feeDetails: {}
    };
  },
  methods: {
    updateFeeDetails() {
      const feeNewDetails = {
        feesId: this.feesId,
        studentName: this.studentName,
        studentClass: this.studentClass,
        feesPaid: this.feesPaid,
        paidDate: this.paidDate,
        studentId: this.studentId
      };

      feesTable
        .update(feeNewDetails)
        .then(result => {
          ipcRenderer.send("open-teacher-information-dialog");
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    },
    refreshFeeDetails(feesId) {
      feesTable
        .fetchOne(feesId)
        .then(result => {
          this.feeDetails = result;

          // set default data values to feeDetails
          this.feesId = this.feeDetails.fees_id;
          this.studentName = this.feeDetails.student_name;
          this.studentClass = this.feeDetails.student_class;
          this.feesPaid = this.feeDetails.fees_paid;
          this.paidDate = this.feeDetails.paid_date;
          this.studentId = this.feeDetails.student_id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getStudentDetails() {
      studentsTable
        .fetchOne(this.studentId)
        .then(result => {
          this.studentName = result.first_name + " " + result.last_name;
          this.studentClass = result.classroom;
          console.log(result);
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

.control-box .fa-times {
  font-size: 12px;
  color: rgb(204, 34, 34);
}

.control-box .fa-times:hover {
  color: rgb(236, 16, 16);
}

form {
  margin: 30px;
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
