<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="contain-area">
        <p class="content-title">Expenses</p>
        <div class="content">
          <!-- All Teachers -->
          <div class="container-for-table">
            <div class="title-bar">
              <span class="window-title">All Expenses List</span>
              <!-- control box for window container -->
              <div class="control-box prevent-select">
                <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
                <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
                <font-awesome-icon icon="times" class="fa fa-times" />
              </div>
            </div>
            <div class="line"></div>
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Expense Type</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Amount Taken</th>
                    <th>Reason</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Lucy Addae</td>
                    <td>O. Yeboah</td>
                    <td>Male</td>
                    <td>JHS 1</td>
                    <td>None</td>
                    <td>None</td>
                    <td>
                      <div class="action-box prevent-select">
                        <font-awesome-icon icon="eye" class="fa fa-eye" />
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
  name: "ExpensesList",
  components: {
    InfoBar,
    SideMenuBar
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

.action-box {
  float: right;
  display: grid;
  margin-right: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3px;
  padding: 2px;
  height: 20px;
}

.action-box .fa-trash-alt {
  font-size: 12px;
  color: rgb(204, 34, 34);
}

.action-box .fa-eye {
  font-size: 14px;
  color: rgb(224, 203, 7);
}

.action-box .fa-trash-alt:hover {
  color: rgb(236, 16, 16);
}

.action-box .fa-eye:hover {
  color: rgb(246, 222, 4);
}

.action-box .fa-user-edit:hover {
  color: rgb(14, 233, 25);
}

.action-box .fa-user-edit {
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
  height: 500px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
th {
  padding: 5px;
  text-align: left;
  font-weight: 549;
  font-size: 12px;
  color: #707070;
  border-bottom: 1px solid #e8e9ec;
  text-transform: uppercase;
}
td {
  padding-left: 5px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #707070;
  height: 30px;
  border-bottom: 1px solid #e8e9ec;
}

.user-img {
  /* background: url("../img/me.jpg"); */
  background: #192060;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 5px;
  margin: 7px 14px 8px 0px;
}

section {
  margin: 50px;
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
