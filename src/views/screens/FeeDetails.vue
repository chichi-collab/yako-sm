<template>
  <div class="contain-area">
    <div class="content">
      <!-- All Fees -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">Fees Details</span>
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
        <div class="profile-container">
          <div class="input-container">
            <div>
              <span>Id Number</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.fees_id }}</span>
              </div>
            </div>
            <div>
              <span>Total Fees</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.total_fees }}</span>
              </div>
            </div>
            <div>
              <span>Student Id</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.student_id }}</span>
              </div>
            </div>
            <div>
              <span>Student Name</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.student_name }}</span>
              </div>
            </div>
            <div>
              <span>Classroom</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.student_class }}</span>
              </div>
            </div>
            <div>
              <span>Fees paid</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.fees_paid }}</span>
              </div>
            </div>
            <div>
              <span>Date</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.date_paid }}</span>
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
import FeesTable from "@/models/database/fees-table";

// init FeesTable and StudentsTable
const feesTable = new FeesTable(new Database());

export default {
  name: "feeDetails",
  mounted() {
    ipcRenderer.on("fee-id", (event, arg) => {
      this.feesId = arg;

      feesTable
        .fetchOne(this.feesId)
        .then(result => {
          this.feeDetails = result;
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  data() {
    return { feesId: "", feeDetails: {} };
  },
  methods: {
    closeCurrentWindow() {
      let currentWindow = remote.getCurrentWindow();
      currentWindow.close();
      console.log("hey");
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
