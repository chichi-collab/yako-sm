<template>
  <div class="dashboard">
    <p class="content-title">Dashboard</p>
    <div class="content">
      <div class="row-number">
        <div class="row-card">
          <div>
            <font-awesome-icon icon="users" class="fa fa-users" />
            <br />
            <span class="col-pst">Parents</span>
          </div>
          <div class="separator"></div>
          <span class="pst-number">500</span>
        </div>
        <div class="row-card">
          <div>
            <font-awesome-icon icon="user-graduate" class="fa fa-user-graduate" />
            <br />
            <span class="col-pst">Students</span>
          </div>
          <div class="separator"></div>
          <span class="pst-number">1500</span>
        </div>
        <div class="row-card">
          <div>
            <font-awesome-icon icon="user-tie" class="fa fa-user-tie" />
            <br />
            <span class="col-pst">Teachers</span>
          </div>
          <div class="separator"></div>
          <span class="pst-number">20</span>
        </div>
      </div>
      <!-- three tables -->
      <div class="three-tables">
        <!-- Fees Collection and Expenses -->
        <div class="container-for-table fc-e-box">
          <div class="title-bar">
            <span class="window-title">Fees Collection and Expenses</span>
            <!-- control box for window container -->
            <div class="control-box prevent-select">
              <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
              <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
              <font-awesome-icon icon="times" class="fa fa-times" />
            </div>
          </div>
          <div class="line"></div>
          <div class="bar-chart">
            <BarChart />
          </div>
        </div>

        <!-- Event Calendar -->
        <div class="container-for-table nb-h-full">
          <div class="title-bar">
            <span class="window-title">Event Calendar</span>
            <!-- control box for window container -->
            <div class="control-box prevent-select">
              <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
              <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
              <font-awesome-icon icon="times" class="fa fa-times" />
            </div>
          </div>
          <div class="line"></div>
          <div class="calendar">
            <EventCalendar />
          </div>
        </div>

        <!-- School Population -->
        <div class="container-for-table sp-box">
          <div class="title-bar">
            <span class="window-title">School Population</span>
            <!-- control box for window container -->
            <div class="control-box prevent-select">
              <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
              <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
              <font-awesome-icon icon="times" class="fa fa-times" />
            </div>
          </div>
          <div class="line"></div>
          <div class="line-chart">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";
import EventCalendar from "@/components/EventCalendar.vue";

export default {
  name: "Dashboard",
  props: {
    msg: String
  },
  components: {
    BarChart,
    LineChart,
    EventCalendar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 15px;
  background: #f3f3f3;
}

.content-title {
  color: #282639;
  margin-bottom: 5px;
}

.row-number {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
}

.row-card {
  border-radius: 5px;
  background: #fff;
  width: 250px;
  height: 85px;
  padding: 15px;
  display: flex;
}

.row-card span {
  background: #fff;
}

.row-card div {
  background: #fff;
}

.row-card div a {
  text-decoration: none;
  background: #fff;
}

.col-pst {
  margin: 0px 20px 20px 0;
  color: #303030;
}

.row-card .fa-user-tie {
  font-size: 30px;
  margin-bottom: 10px;
  background: #fff;
  color: #ffe711;
  margin-left: 15px;
}

.row-card .fa-users {
  font-size: 30px;
  margin-bottom: 10px;
  background: #fff;
  color: #ffe711;
  margin-left: 5px;
}

.row-card .fa-user-graduate {
  font-size: 30px;
  margin-bottom: 10px;
  background: #fff;
  color: #ffe711;
  margin-left: 12px;
}

.separator {
  height: 50px;
  border-left: 2px solid #eee;
  margin-top: 5px;
}

.pst-number {
  margin-left: 15px;
  margin-top: 15px;
  color: #303030;
  text-align: right;
  font-size: 1.5rem;
}

.three-tables {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 405px 405px;
  grid-template-rows: 225px 225px;
  grid-template-areas: "fc-e-box nb-h-full" "sp-box nb-h-full";
  grid-column-gap: 45px;
  grid-row-gap: 20px;
}

.container-for-table {
  background: #fff;
  width: 405px;
  border-radius: 5px;
  height: 225px;
}

.bar-chart {
  background: #fff;
  width: 405px;
  border-radius: 5px;
  height: 25px;
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

.nb-h-full {
  height: 470px;
}

.control-box {
  float: right;
  display: grid;
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
</style>
