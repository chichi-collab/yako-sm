<template>
  <div class="dashboard">
    <p class="content-title">Dashboard</p>
    <div class="content">
      <div class="row-number">
        <div class="row-card">
          <div>
            <a href="#">
              <i class="fa fa-users"></i>
            </a>
            <br />
            <span class="col-pst">Parents</span>
          </div>
          <div class="separator"></div>
          <span class="pst-number">500</span>
        </div>
        <div class="row-card">
          <div>
            <a href="#">
              <i class="fa fa-user-graduate"></i>
            </a>
            <br />
            <span class="col-pst">Students</span>
          </div>
          <div class="separator"></div>
          <span class="pst-number">1500</span>
        </div>
        <div class="row-card">
          <div>
            <a href="#">
              <i class="fa fa-user-tie"></i>
            </a>
            <br />
            <span class="col-pst">Teachers</span>
          </div>
          <div class="separator"></div>
          <span class="pst-number">20</span>
        </div>
      </div>
      <!-- four tables -->
      <div class="four-tables">
        <!-- Fees Collection and Expenses -->
        <div class="container-for-table">
          <div class="title-bar">
            <span class="window-title">Fees Collection and Expenses</span>
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
          <span>hello</span>
        </div>

        <!-- Event Calendar -->
        <div class="container-for-table">
          <div class="title-bar">
            <span class="window-title">Event Calendar</span>
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
          <span>hello</span>
        </div>

        <!-- Notice Board -->
        <div class="container-for-table">
          <div class="title-bar">
            <span class="window-title">Notice Board</span>
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
          <span>hello</span>
        </div>

        <!-- Recent Activities -->
        <div class="container-for-table">
          <div class="title-bar">
            <span class="window-title">Recent Activities</span>
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
          <span>hello</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 15px;
  background: #e8e9ec;;
}

.content-title {
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
  color: #707070;
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
  color: #707070;
  text-align: right;
  font-size: 1.5rem;
}

.four-tables {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 405px 405px;
  grid-column-gap: 45px;
  grid-row-gap: 20px;
}

.container-for-table {
  background: #fff;
  width: 405px;
  border-radius: 5px;
  height: 225px;
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
