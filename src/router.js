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
import Subject from "./views/Subject.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/teachers",
      name: "teachers",
      component: Teachers
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
      path: "/subject",
      name: "subject",
      component: Subject
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
