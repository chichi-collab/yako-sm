<template>
  <div id="app">
    <!-- routes goes here -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
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

.split-screen {
  background: #e8e9ec;
  height: 635px;
  display: grid;
  grid-template-columns: 250px 1fr;
}
</style>
