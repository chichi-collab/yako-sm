<template>
  <div class="contain-area">
    <div class="content">
      <!-- Student Details -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">Student Details</span>
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
                <span>{{ id }}</span>
              </div>
            </div>
            <div>
              <span>First Name</span>
              <br />
              <div class="info-card">
                <span>{{ studentDetails.first_name }}</span>
              </div>
            </div>
            <div>
              <span>Last Name</span>
              <br />
              <div class="info-card">
                <span>{{ studentDetails.last_name }}</span>
              </div>
            </div>
            <div>
              <span>Class</span>
              <br />
              <div class="info-card">
                <span>{{ studentDetails.classroom }}</span>
              </div>
            </div>
            <div>
              <span>Gender</span>
              <br />
              <div class="info-card">
                <span>{{ studentDetails.gender }}</span>
              </div>
            </div>
            <div>
              <span>Date of Birth</span>
              <br />
              <div class="info-card">
                <span>{{ studentDetails.birth_date }}</span>
              </div>
            </div>
            <div>
              <span>Parent Name</span>
              <br />
              <div class="info-card">
                <span>{{ parentDetails.parent_name }}</span>
              </div>
            </div>
            <div>
              <span>Parent Contact</span>
              <br />
              <div class="info-card">
                <span>{{ parentDetails.parent_contact }}</span>
              </div>
            </div>
            <div>
              <span>Relation</span>
              <br />
              <div class="info-card">
                <span>{{ parentDetails.relation }}</span>
              </div>
            </div>
            <div>
              <span>Digital Address</span>
              <br />
              <div class="info-card">
                <span>{{ studentDetails.address }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { remote, ipcRenderer } from "electron";

// database scripts
import Database from "@/models/database/database";
import StudentsTable from "@/models/database/students-table";
import ParentsTable from "@/models/database/parents-table";

// init StudentsTable and ParentsTable
const studentsTable = new StudentsTable(new Database());
const parentsTable = new ParentsTable(new Database());

export default {
  name: "studentDetails",
  mounted() {
    ipcRenderer.on("student-id", (event, arg) => {
      this.id = arg;

      studentsTable
        .fetchOne(this.id)
        .then(result => {
          this.studentDetails = result;
        })
        .catch(err => {
          console.log(err);
        });

      parentsTable
        .fetchOne(this.id)
        .then(result => {
          this.parentDetails = result;
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
  data() {
    return { id: "", studentDetails: {}, parentDetails: {} };
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
