<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="contain-area">
        <p class="content-title">Admit Student</p>
        <div class="content">
          <!-- All Students -->
          <div class="container-for-table">
            <div class="title-bar">
              <span class="window-title">Student Information</span>
              <!-- control box for window container -->
              <div class="control-box prevent-select">
                <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
                <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
                <font-awesome-icon icon="times" class="fa fa-times" />
              </div>
            </div>
            <div class="line"></div>

            <!-- form here -->
            <form>
              <div class="input-container">
                <div>
                  <span>Id</span>
                  <br />
                  <input type="number" v-model="id" />
                </div>
                <div>
                  <span>First Name</span>
                  <br />
                  <input type="text" v-model="firstName" />
                </div>
                <div>
                  <span>Last Name</span>
                  <br />
                  <input type="text" v-model="lastName" />
                </div>
                <div>
                  <span>Class</span>
                  <br />
                  <input type="text" v-model="studentClass" />
                </div>
                <div>
                  <span>Gender</span>
                  <br />
                  <select v-model="gender">
                    <option disabled value>Please choose gender...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <span>Date of Birth</span>
                  <br />
                  <input type="date" v-model="birthdate" />
                </div>
                <div>
                  <span>Parent Name</span>
                  <br />
                  <input type="text" v-model="parentName" />
                </div>
                <div>
                  <span>Parent Contact</span>
                  <br />
                  <input type="phone" v-model="parentNo" />
                </div>
                <div>
                  <span>Relation</span>
                  <br />
                  <input type="text" v-model="relation" />
                </div>
                <div>
                  <span>Address</span>
                  <br />
                  <input type="text" v-model="contact" />
                </div>
              </div>
              <div class="btn-container">
                <input type="button" value="Save" class="save-btn" />
                <input type="button" value="Reset" class="reset-btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";

export default {
  name: "admitStudent",
  components: {
    InfoBar,
    SideMenuBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain-area {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 15px;
  background: #f3f3f3;
}

.content-title {
  margin-bottom: 5px;
}

.container-for-table {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  height: 390px;
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
  border-top: 1px sol#eee;
}

.control-box {
  float: right;
  display: grid;
  margin-right: 5px;
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

form {
  margin: 10px;
  font-size: 15px;
  font-weight: 300;
  color: #707070;
}

.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

input[type="text"] {
  border-radius: 5px;
  background: #f3f3f3;
  outline: none;
  border: none;
  height: 30px;
  padding: 5px;
  color: #707070;
  font-weight: 100;
  width: 100%;
  margin-top: 5px;
}

.btn-container {
  display: grid;
  grid-template-columns: 113px 113px;
  grid-column-gap: 30px;
  margin-top: 30px;
}

input[type="button"] {
  border-radius: 5px;
  outline: none;
  border: none;
  height: 30px;
  padding: 5px;
  color: #fff;
  font-weight: bold;
  width: 100%;
  margin-top: 5px;
}

.reset-btn {
  background: #ffe711;
}

.save-btn {
  background: #3686ff;
}
</style>
