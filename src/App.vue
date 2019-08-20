<template>
  <div id="app">
    <InfoBar />
    <div class="spilt-screen">
      <!-- side menu bar -->
      <div id="side-menu-bar">
        <nav>
          <router-link to="/" class="active">
            <i class="fa fa-chart-bar"></i> Dashboard
          </router-link>
          <router-link to="/teachers">
            <i class="fa fa-user-tie"></i> Teachers
          </router-link>
          <router-link to="/students">
            <i class="fa fa-user-graduate"></i> Students
          </router-link>
          <router-link to="/parents">
            <i class="fa fa-users"></i> Parents
          </router-link>
          <router-link to="/account">
            <i class="fa fa-credit-card"></i> Account
          </router-link>
          <router-link to="/classrooms">
            <i class="fa fa-user-friends"></i> Classrooms
          </router-link>
          <router-link to="/subject">
            <i class="fa fa-file-alt"></i> Subject
          </router-link>
          <router-link to="/attendance">
            <i class="fa fa-user-check"></i> Attendance
          </router-link>
          <router-link to="/examReports">
            <i class="fa fa-file"></i> Exam Report
          </router-link>
          <router-link to="/transport">
            <i class="fa fa-truck"></i> Transport
          </router-link>
          <router-link to="/" class="logout">
            <i class="fa fa-sign-out-alt"></i> Logout
          </router-link>
        </nav>
      </div>
      <!-- this.route goes here -->
      <router-view />
    </div>
  </div>
</template>

<script>
import InfoBar from "@/components/InfoBar";

export default {
  name: "app",
  components: {
    InfoBar
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

body * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}

.spilt-screen {
  background: #e8e9ec;
  height: 635px;
  display: grid;
  grid-template-columns: 250px 1fr;
}

#side-menu-bar {
  background: #302d43;
  width: 250px;
  height: 635px;
}

#side-menu-bar nav {
  padding-top: 10px;
}

#side-menu-bar nav a {
  display: block;
  text-decoration: none;
  padding: 15px 30px;
  color: #eaedf3;
  font-weight: 300;
  transition: all 0.3s ease-in-out;
}

#side-menu-bar nav a:hover {
  background: #282639;
  border-left: 5px solid #92cf48;
  padding: 15px 30px 15px 25px;
}

#side-menu-bar nav .active {
  background: #282639;
  border-left: 5px solid #92cf48;
  padding: 15px 30px 15px 25px;
}

.logout {
  position: absolute;
  top: 620px;
  width: 250px;
}

#side-menu-bar .fa-chart-bar {
  color: #ffe711;
  margin-right: 15px;
}

#side-menu-bar .fa-user-tie {
  color: #ffe711;
  margin-right: 15px;
}

#side-menu-bar .fa-user-graduate {
  color: #ffe711;
  margin-right: 15px;
}

#side-menu-bar .fa-users {
  color: #ffe711;
  margin-right: 15px;
}

#side-menu-bar .fa-credit-card {
  color: #ffe711;
  margin-right: 15px;
}

#side-menu-bar .fa-user-friends {
  color: #ffe711;
  margin-right: 15px;
}

#side-menu-bar .fa-file-alt {
  color: #ffe711;
  margin-right: 22px;
}

#side-menu-bar .fa-user-check {
  color: #ffe711;
  margin-right: 15px;
}

#side-menu-bar .fa-file {
  color: #ffe711;
  margin-right: 22px;
}

#side-menu-bar .fa-truck {
  color: #ffe711;
  margin-right: 12px;
}

#side-menu-bar .fa-sign-out-alt {
  color: #ffe711;
  margin-right: 15px;
}
</style>
