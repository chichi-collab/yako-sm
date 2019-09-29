<template>
  <!-- side menu bar -->
  <div id="side-menu-bar">
    <nav>
      <router-link to="/">
        <i class="fa fa-chart-bar"></i>
        Dashboard
      </router-link>
      <div>
        <a href="#" v-on:click.prevent="toggleTeachersSubmenu">
          <i class="fa fa-user-tie"></i> Teachers
          <i
            :class="{ 'fa-caret-up': showTeachersSubmenu, 'fa-caret-down': !showTeachersSubmenu }"
            class="fa"
            aria-hidden="true"
          ></i>
        </a>
        <div v-if="showTeachersSubmenu">
          <ul class="submenu">
            <router-link to="/teachers">All Teachers</router-link>
            <router-link to="/addTeacher">Add Teacher</router-link>
          </ul>
        </div>
      </div>
      <div>
        <a href="#" v-on:click.prevent="toggleStudentSubmenu">
          <i class="fa fa-user-graduate"></i> Students
          <i
            :class="{ 'fa-caret-up': showStudentSubmenu, 'fa-caret-down': !showStudentSubmenu }"
            class="fa"
            aria-hidden="true"
          ></i>
        </a>
        <div v-if="showStudentSubmenu">
          <ul class="submenu">
            <router-link to="/students">All Students</router-link>
            <router-link to="/admitStudent">Admit Student</router-link>
          </ul>
        </div>
      </div>
      <router-link to="/parents">
        <i class="fa fa-users"></i> Parents
      </router-link>
      <div>
        <a href="#" v-on:click.prevent="toggleExpenseSubmenu">
          <i class="fa fa-credit-card"></i> Account
          <i
            :class="{ 'fa-caret-up': showExpenseSubmenu, 'fa-caret-down': !showExpenseSubmenu }"
            class="fa"
            aria-hidden="true"
          ></i>
        </a>
        <div v-if="showExpenseSubmenu">
          <ul class="submenu">
            <router-link to="/feesCollection">Fees Collection</router-link>
            <router-link to="/addFeesPayment">Add Fees Payment</router-link>
            <router-link to="/expenses">Expenses</router-link>
            <router-link to="/addExpense">Add Expense</router-link>
          </ul>
        </div>
      </div>
      <router-link to="/classrooms">
        <i class="fa fa-user-friends"></i> Classrooms
      </router-link>
      <router-link to="/noticeBoard">
        <i class="fa fa-file-alt"></i> Notice Board
      </router-link>
      <router-link to="/attendance">
        <i class="fa fa-user-check"></i> Attendance
      </router-link>
      <div id="exam-report">
        <a href="#" v-on:click.prevent="toggleExamReportSubmenu">
          <i class="fa fa-file"></i> Exam Report
          <i
            :class="{ 'fa-caret-up': showExamReportSubmenu, 'fa-caret-down': !showExamReportSubmenu }"
            class="fa"
            aria-hidden="true"
          ></i>
        </a>
        <div v-if="showExamReportSubmenu">
          <ul class="submenu">
            <router-link to="/addMarks">Add Marks</router-link>
            <router-link to="/printReport">Print Exam Report</router-link>
          </ul>
        </div>
      </div>
      <!-- <router-link to="/transport">
        <i class="fa fa-truck"></i> Transport
      </router-link>-->
      <router-link to="/logout" class="logout">
        <i class="fa fa-sign-out-alt"></i> Logout
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideMenuBar",
  props: {},
  data() {
    return {
      showTeachersSubmenu: false,
      showStudentSubmenu: false,
      showExpenseSubmenu: false,
      showExamReportSubmenu: false
    };
  },
  methods: {
    toggleTeachersSubmenu() {
      this.showTeachersSubmenu = !this.showTeachersSubmenu;
      this.showStudentSubmenu = false;
      this.showExpenseSubmenu = false;
      this.showExamReportSubmenu = false;
    },
    toggleStudentSubmenu() {
      this.showStudentSubmenu = !this.showStudentSubmenu;
      this.showTeachersSubmenu = false;
      this.showExpenseSubmenu = false;
      this.showExamReportSubmenu = false;
    },
    toggleExpenseSubmenu() {
      this.showExpenseSubmenu = !this.showExpenseSubmenu;
      this.showStudentSubmenu = false;
      this.showTeachersSubmenu = false;
      this.showExamReportSubmenu = false;
    },
    toggleExamReportSubmenu() {
      this.showExamReportSubmenu = !this.showExamReportSubmenu;
      this.showStudentSubmenu = false;
      this.showExpenseSubmenu = false;
      this.showTeachersSubmenu = false;
    }
  }
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
  padding: 10px 30px;
  color: #eaedf3;
  font-weight: 300;
  transition: all 0.3s ease-in-out;
}

#side-menu-bar .submenu {
  margin-left: 35px;
}

#side-menu-bar nav a:hover {
  background: #282639;
  /* border-left: 5px solid #92cf48; */
  padding: 10px 30px 10px 25px;
}

#side-menu-bar nav a.router-link-exact-active {
  background: #282639;
  border-left: 5px solid #92cf48;
  padding: 10px 30px 10px 25px;
}

.logout {
  position: absolute;
  top: 620px;
  width: 250px;
}

#side-menu-bar .fa-caret-up {
  margin-left: 70px;
}

#side-menu-bar .fa-caret-down {
  margin-left: 70px;
}

#exam-report .fa-caret-down {
  margin-left: 35px;
}

#exam-report .fa-caret-up {
  margin-left: 35px;
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
