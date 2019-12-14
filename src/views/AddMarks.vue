<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="contain-area">
        <p class="content-title">Add Student Marks</p>
        <div class="content">
          <!-- All Teachers -->
          <div class="container-for-table">
            <div class="title-bar">
              <span class="window-title">Student Marks</span>
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
              <div class="tfees-container">
                <div>
                  <span>Class</span>
                  <br />
                  <div class="search-area">
                    <input type="search" :placeholder="searchItem" />
                    <a href="#">
                      <i class="fa fa-color fa-search"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <span>Select Subject</span>
                  <br />
                  <div class="select-subject">
                    <select v-model="subject">
                      <option v-for="subject in subjects" :key="subject.id">{{
                        subject
                      }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <div class="line"></div>
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Class Mark</th>
                    <th>Exam Mark</th>
                    <th>Overall Mark</th>
                    <th>Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Random dude</td>
                    <td>
                      <input type="text" v-model="classMark" />
                    </td>
                    <td>
                      <input type="text" v-model="examMark" />
                    </td>
                    <td>+2.01</td>
                    <td>
                      <div class="action-box prevent-select">
                        <font-awesome-icon icon="save" class="fa fa-save" />
                        <font-awesome-icon
                          icon="user-edit"
                          class="fa fa-user-edit"
                        />
                        <font-awesome-icon
                          icon="trash-alt"
                          class="fa fa-trash-alt"
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
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "AddFeesPayment",
  components: {
    InfoBar,
    SideMenuBar
  },
  data() {
    return {
      searchItem: "One",
      sortBy: "Id",
      classMark: "",
      examMark: "",
      subjects: ["English", "Math", "Science"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain-area {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 15px;
  background: #f3f3f3;
}

.content-title {
  color: #282639;
  margin-bottom: 5px;
}

.container-for-table {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  height: 579px;
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

.select-subject select {
  border-radius: 5px;
  background: #f3f3f3;
  height: 30px;
  padding: 5px;
  color: #707070;
  font-weight: 100;
  width: 100%;
  margin-top: 10px;
  width: 250px;
}

form {
  margin: 10px;
  font-size: 15px;
  font-weight: 300;
  color: #707070;
}

.input-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

.tfees-container {
  display: grid;
  grid-template-columns: 260px 113px;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  margin-bottom: 20px;
}

input[type="text"] {
  border-radius: 5px;
  background: #f3f3f3;
  outline: none;
  border: none;
  height: 30px;
  padding: 5px;
  color: #707070;
  font-weight: 100;
  width: 100%;
  margin-top: 1px;
  margin-bottom: 1px;
}

.btn-container {
  display: grid;
  grid-template-columns: 113px 113px;
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

.search-area {
  background: #f3f3f3;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 250px;
  height: 30px;
  border-radius: 30px;
  margin-top: 10px;
  margin-right: 30px;
  padding: 2px;
}

.search-area input[type="search"] {
  color: #707070;
  background: transparent;
  outline: none;
  border: none;
  width: 82%;
  margin: 5px 5px 1px 10px;
}

.search-area .fa-search {
  color: #192060;
  margin-top: 5px;
}

.reset-btn {
  background: #ffe711;
}

.save-btn {
  background: #3686ff;
}

.update-btn {
  background: rgb(14, 233, 25);
}

.action-box {
  float: right;
  display: grid;
  margin-right: 75px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3px;
  padding: 2px;
  height: 20px;
}

.action-box .fa-trash-alt {
  font-size: 12px;
  color: rgb(204, 34, 34);
}

.action-box .fa-save {
  font-size: 14px;
  color: rgb(224, 203, 7);
}

.action-box .fa-trash-alt:hover {
  color: rgb(236, 16, 16);
}

.action-box .fa-save:hover {
  color: rgb(246, 222, 4);
}

.action-box .fa-edit:hover {
  color: rgb(14, 233, 25);
}

.action-box .fa-edit {
  color: rgb(16, 172, 24);
}

table {
  width: 100%;
  table-layout: fixed;
}
.tbl-header {
  background-color: rgba(255, 255, 255, 0.3);
}
.tbl-content {
  height: 400px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

th {
  padding: 10px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #707070;
  border-bottom: 1px solid #f3f3f3;
  text-transform: uppercase;
}

td {
  padding-left: 10px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #707070;
  border-bottom: 1px solid #f3f3f3;
}

/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
