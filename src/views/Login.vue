<template>
  <div class="login">
    <div class="triangle">
      <img src="../../src/assets/logo.png" alt="logo" />
    </div>
    <div class="login-container">
      <p class="login-title">Login</p>
      <p class="login-wlc">welcome back to the state-of-art</p>
      <input type="text" v-model="username" placeholder="username" />
      <br />
      <input type="password" v-model="password" placeholder="password" />
      <br />
      <div class="crf">
        <input type="checkbox" v-model="remember" />
        <span class="remember-me">&nbsp;remember me</span>
        <span class="forgot-passwd">forgot password?</span>
      </div>
      <button type="submit" class="btn-submit" @click="checkLogin()">
        login
      </button>
    </div>
  </div>
</template>

<script>
// database scripts
import Database from "@/models/database/database";
import AdminTable from "@/models/database/admin-table";

const adminTable = new AdminTable(new Database());

export default {
  name: "login",
  created() {
    adminTable
      .getById(1)
      .then(result => {
        this.adminDetails = result;
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      username: "",
      password: "",
      remember: false,
      adminDetails: {}
    };
  },
  methods: {
    // checks login authentication
    checkLogin() {
      const { username, password } = this.adminDetails;

      if (username == this.username && password == this.password) {
        this.$router.push({ path: "/home" });
      }
    }
  }
};
</script>

<style scoped>
.login {
  color: #282639;
}

.login-title {
  margin-top: 20px;
  font-size: 90px;
  font-weight: bold;
}

.login-wlc {
  font-size: 30px;
}

.triangle {
  position: absolute;
  width: 100%;
  height: 679px;
  z-index: 2;
  background: #38306d;
  clip-path: polygon(37% 0, 100% 0, 100% 100%);
  -webkit-clip-path: polygon(37% 0, 100% 0, 100% 100%);
}

.triangle img {
  position: relative;
  left: 790px;
  top: 100px;
}

.login-container {
  position: absolute;
  margin-left: 60px;
  margin-top: 90px;
  font-size: 20px;
}

input[type="text"],
input[type="password"] {
  border-radius: 5px;
  border: 1px solid #e8e9ec;
  height: 45px;
  padding: 5px;
  outline: none;
  padding-left: 10px;
  width: 100%;
  margin-top: 30px;
  font-size: 17px;
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 1px solid #cacece;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 7px;
  border-radius: 3px;
  outline: none;
}

input[type="checkbox"] :active,
input[type="checkbox"]:checked:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px 1px 3px rgba(0, 0, 0, 0.1);
}

input[type="checkbox"]:checked {
  background-color: #38306d;
  border: 1px solid #adb8c0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
    inset 15px 10px -12px rgba(255, 255, 255, 0.1);
  color: #99a1a7;
}

.forgot-passwd {
  margin-left: 120px;
}

.crf {
  margin-top: 15px;
}

.btn-submit {
  background-color: #38306d;
  border: none;
  color: white;
  padding: 10px 27px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  width: 120px;
  margin: 15px;
  margin-left: 260px;
  cursor: pointer;
  outline: none;
}
</style>
