import Vue from "vue";
import Router from "vue-router";

// view to route
import Home from "./views/Home.vue";
import Teachers from "./views/Teachers";
import AddTeacher from "./views/AddTeacher.vue";
import Students from "./views/Students.vue";
import AdmitStudent from "./views/AdmitStudent.vue";
import Parents from "./views/Parents.vue";
import FeesCollection from "./views/FeesCollection.vue";
import AddFeesPayment from "./views/AddFeesPayment.vue";
import Expenses from "./views/ExpensesList.vue";
import AddExpense from "./views/AddExpense.vue";
import Classrooms from "./views/Classrooms.vue";
import AddMarks from "./views/AddMarks.vue";
import PrintReport from "./views/PrintReport.vue";
import Attendance from "./views/Attendance.vue";
import NoticeBoard from "./views/NoticeBoard.vue";
import Login from "./views/Login.vue";

// components to route
import EditStudentDetails from "./components/EditStudentDetails.vue";
import EditTeacherDetails from "./components/EditTeacherDetails.vue";
import TeacherDetails from "./components/TeacherDetails.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/teachers",
      name: "teachers",
      component: Teachers
    },
    {
      path: "/teachers/editTeacherDetails",
      name: "editTeacherDetails",
      component: EditTeacherDetails
    },
    {
      path: "/teachers/teacherDetails",
      name: "teacherDetails",
      component: TeacherDetails
    },
    {
      path: "/addTeacher",
      name: "addTeacher",
      component: AddTeacher
    },
    {
      path: "/students",
      name: "students",
      component: Students
    },
    {
      path: "/admitStudent",
      name: "admitStudent",
      component: AdmitStudent
    },
    {
      path: "/parents",
      name: "parents",
      component: Parents
    },
    {
      path: "/feesCollection",
      name: "feesCollection",
      component: FeesCollection
    },
    {
      path: "/addFeesPayment",
      name: "addFeesPayment",
      component: AddFeesPayment
    },
    {
      path: "/expenses",
      name: "expenses",
      component: Expenses
    },
    {
      path: "/addExpense",
      name: "addExpense",
      component: AddExpense
    },
    {
      path: "/classrooms",
      name: "classrooms",
      component: Classrooms
    },
    {
      path: "/noticeBoard",
      name: "noticeBoard",
      component: NoticeBoard
    },
    {
      path: "/attendance",
      name: "attendance",
      component: Attendance
    },
    {
      path: "/addMarks",
      name: "addMarks",
      component: AddMarks
    },
    {
      path: "/printReport",
      name: "printReport",
      component: PrintReport
    },
    {
      path: "/editStudentDetails",
      name: "EditStudentDetails",
      component: EditStudentDetails
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
