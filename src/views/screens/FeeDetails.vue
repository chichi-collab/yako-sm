<template>
  <div class="contain-area">
    <div class="content">
      <!-- All Fees -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">Teacher Details</span>
          <!-- control box for window container -->
          <div class="control-box prevent-select">
            <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
            <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
            <font-awesome-icon icon="times" class="fa fa-times" />
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
                <span>{{ feeDetails.id }}</span>
              </div>
            </div>
            <div>
              <span>Total Fees</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.totalFees }}</span>
              </div>
            </div>
            <div>
              <span>Student Id</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.studentId }}</span>
              </div>
            </div>
            <div>
              <span>Student Name</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.studentName }}</span>
              </div>
            </div>
            <div>
              <span>Classroom</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.studentClass }}</span>
              </div>
            </div>
            <div>
              <span>Fees paid</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.feesPaid }}</span>
              </div>
            </div>
            <div>
              <span>Date</span>
              <br />
              <div class="info-card">
                <span>{{ feeDetails.datePaid }}</span>
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
const { ipcRenderer } = require("electron");

// database scripts
import FeesDatabase from "../../../models/database/fees-database";

const feeDatabase = new FeesDatabase();

export default {
  name: "feeDetails",
  created() {
    ipcRenderer.on("fee-id", (event, arg) => {
      this.feeId = arg;

      feeDatabase
        .fetchOne(this.feeId)
        .then(result => {
          this.feeDetails = result;
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  data() {
    return { feeId: "", feeDetails: {} };
  },
  methods: {
    goToFees() {
      console.log("SERVER: ");
      console.log(this.feeDetails);
      // this.$router.push({ path: "/fees" });
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
  margin-top: 25px;
}

.input-container {
  margin: 20px;
  font-size: 15px;
  color: #707070;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

.info-card {
  background: #e8e9ec;
  color: #707070;
  margin-top: 5px;
  padding: 3px;
  font-weight: bold;
  font-size: 17px;
  border-radius: 5px;
  width: 100%;
  height: 25px;
}
</style>
