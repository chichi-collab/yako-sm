import Vue from "vue";
import Router from "vue-router";

// view to route
import Home from "./views/Home.vue";
import Account from "./views/Account.vue";
import Teachers from "./views/Teachers.vue";
import Students from "./views/Students.vue";
import Parents from "./views/Parents.vue";
import Classrooms from "./views/Classrooms.vue";
import ExamReports from "./views/ExamReports.vue";
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
      path: "/students",
      name: "students",
      component: Students
    },
    {
      path: "/parents",
      name: "parents",
      component: Parents
    },
    {
      path: "/account",
      name: "account",
      component: Account
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
      path: "/examReports",
      name: "examReports",
      component: ExamReports
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
