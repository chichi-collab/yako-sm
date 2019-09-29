<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="contain-area">
        <p class="content-title">Attendance of Students</p>
        <div class="content">
          <!-- All Teachers -->
          <div class="container-for-table">
            <div class="title-bar">
              <span class="window-title">Attendance Information</span>
              <!-- control box for window container -->
              <div class="control-box prevent-select">
                <a href>
                  <i class="fa fa-angle-down"></i>
                </a>
                <a href>
                  <i class="fa fa-sync-alt"></i>
                </a>
                <a href>
                  <i class="fa fa-times"></i>
                </a>
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
                  <span>Attendance for</span>
                  <br />
                  <div class="attendance-for">
                    <span>{{ day }}/{{ month }}/ {{ year }}</span>
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
                    <th>Students</th>
                    <th>Present</th>
                    <th>Absent</th>
                    <th>Total Attendance</th>
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
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>+2.01</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <input type="button" value="Save Attendance" class="save-btn" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

// date utils
import { day, month, year } from "../utils/date";

export default {
  name: "attendance",
  components: {
    InfoBar,
    SideMenuBar
  },
  data() {
    return {
      searchItem: "One",
      sortBy: "Id",
      year,
      month,
      day
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
  background: #e8e9ec;
}

.content-title {
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

.attendance-for {
  background: #282639;
  color: #fff;
  margin-top: 12px;
  padding: 3px;
  font-weight: bold;
  font-size: 17px;
  border-radius: 5px;
  width: 100%;
  height: 25px;
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

input[type="checkbox"] {
  background: #e8e9ec;
  height: 20px;
  width: 20px;
  margin-left: 10px;
  font-weight: 100;
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
  /* width: 100%; */
  margin: 1px;
}

.search-area {
  background: #e8e9ec;
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
  background-color: #302d43;
}

.tbl-content {
  height: 400px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

th {
  color: #fff;
  padding: 10px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  border-bottom: 1px solid #e8e9ec;
  text-transform: uppercase;
}

td {
  padding-left: 10px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #707070;
  height: 25px;
  border-bottom: 1px solid #e8e9ec;
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
