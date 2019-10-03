import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//  fontawesome icons imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faUser,
  faUserEdit,
  faUserGraduate,
  faUserTie,
  faAngleDown,
  faSyncAlt,
  faTimes,
  faEye,
  faTrashAlt,
  faPrint,
  faSave,
  faEnvelope,
  faChartBar,
  faSearch,
  faBell,
  faCaretDown,
  faCaretUp,
  faSignOutAlt,
  faFile,
  faUserCheck,
  faFileAlt,
  faUserFriends,
  faCreditCard,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// add icon to library
library.add(
  faCoffee,
  faUser,
  faUserEdit,
  faUserGraduate,
  faUserTie,
  faAngleDown,
  faSyncAlt,
  faTimes,
  faEye,
  faTrashAlt,
  faPrint,
  faSave,
  faEnvelope,
  faChartBar,
  faSearch,
  faBell,
  faCaretDown,
  faCaretUp,
  faSignOutAlt,
  faFile,
  faUserCheck,
  faFileAlt,
  faUserFriends,
  faCreditCard,
  faUsers
);

// register FontAwesomeIcon as a global component
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
