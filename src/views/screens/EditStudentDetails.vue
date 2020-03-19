<template>
  <div class="contain-area">
    <div class="content">
      <!-- All Teachers -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">Edit Student Details</span>
          <!-- control box for window container -->
          <div class="control-box prevent-select">
            <font-awesome-icon icon="times" class="fa fa-times" @click="closeCurrentWindow" />
          </div>
        </div>
        <div class="line"></div>

        <!-- form here -->
        <div class="profile-container">
          <form action>
            <div class="input-container">
              <div>
                <span>Id Number</span>
                <br />
                <input type="number" v-model="id" readonly />
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
                <input type="text" v-model="gender" />
              </div>
              <div>
                <span>Date of Birth</span>
                <br />
                <input type="date" v-model="birthDate" />
              </div>
              <div>
                <span>Parent Name</span>
                <br />
                <input type="text" v-model="parentName" />
              </div>
              <div>
                <span>Parent Contact</span>
                <br />
                <input type="phone" v-model="parentContact" />
              </div>
              <div>
                <span>Relation</span>
                <br />
                <input type="text" v-model="relation" />
              </div>
              <div>
                <span>Address</span>
                <br />
                <input type="text" v-model="digitalAddress" />
              </div>
            </div>
            <div class="btn-container">
              <input type="button" value="Save" class="save-btn" @click="updateStudentDetails" />
              <input
                type="button"
                value="Revert Changes"
                class="reset-btn"
                @click="refreshAllDetails(id)"
              />
            </div>
          </form>
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
  name: "EditStudentDetails",
  mounted() {
    ipcRenderer.on("student-id", (event, arg) => {
      this.id = arg;

      this.refreshAllDetails(this.id);
    });
  },
  data() {
    return {
      id: "",
      firstName: "",
      lastName: "",
      classroom: "",
      gender: "",
      birthDate: "",
      parentName: "",
      parentContact: "",
      relation: "",
      digitalAddress: "",
      studentDetails: {},
      parentDetails: {}
    };
  },
  methods: {
    updateStudentDetails() {
      const studentData = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        classroom: this.classroom,
        gender: this.gender,
        birthDate: this.birthDate,
        digitalAddress: this.digitalAddress
      };

      const parentData = {
        parentName: this.parentName,
        parentContact: this.parentContact,
        studentId: this.id,
        relation: this.relation
      };

      parentsTable
        .update(parentData)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });

      studentsTable
        .update(studentData)
        .then(result => {
          ipcRenderer.send("open-teacher-information-dialog");
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    },
    refreshAllDetails(id) {
      studentsTable
        .fetchOne(id)
        .then(result => {
          this.studentDetails = result;

          // set default data values to studentDetails
          this.firstName = this.studentDetails.first_name;
          this.lastName = this.studentDetails.last_name;
          this.classroom = this.studentDetails.classroom;
          this.gender = this.studentDetails.gender;
          this.birthDate = this.studentDetails.birth_date;
          this.digitalAddress = this.studentDetails.address;
        })
        .catch(err => {
          console.log(err);
        });

      parentsTable
        .fetchOne(id)
        .then(result => {
          this.parentDetails = result;

          // set default data values to studentDetails
          this.parentName = this.parentDetails.parent_name;
          this.parentContact = this.parentDetails.parent_contact;
          this.relation = this.parentDetails.relation;
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
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
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
  margin-top: 14px;
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

.reset-btn {
  background: #ffe711;
}

.save-btn {
  background: #3686ff;
}
</style>
