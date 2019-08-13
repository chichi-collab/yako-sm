<template>
  <div id="side-menu-bar">
    <nav>
      <a href="#" class="active">
        <i class="fa fa-chart-bar"></i> Dashboard
      </a>
      <a href="#">
        <i class="fa fa-user-tie"></i> Teachers
      </a>
      <a href="#">
        <i class="fa fa-user-graduate"></i> Students
      </a>
      <a href="#">
        <i class="fa fa-users"></i> Parents
      </a>
      <a href="#">
        <i class="fa fa-credit-card"></i> Account
      </a>
      <a href="#">
        <i class="fa fa-user-friends"></i> Classrooms
      </a>
      <a href="#">
        <i class="fa fa-file-alt"></i> Subject
      </a>
      <a href="#">
        <i class="fa fa-user-check"></i> Attendance
      </a>
      <a href="#">
        <i class="fa fa-file"></i> Exam Report
      </a>
      <a href="#">
        <i class="fa fa-truck"></i> Transport
      </a>
      <a href="#" class="logout">
        <i class="fa fa-sign-out-alt"></i> Logout
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideMenuBar"
};
</script>

<style scoped>
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

#side-menu-bar .logout {
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
