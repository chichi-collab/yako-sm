<template>
  <div class="contain-area">
    <p class="content-title">Edit Student Details</p>
    <div class="content">
      <!-- All Teachers -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">About Rita Donkor</span>
          <!-- control box for window container -->
          <div class="control-box prevent-select">
            <a href>
              <i class="fa fa-angle-down"></i>
            </a>
            <a href>
              <i class="fa fa-sync-alt"></i>
            </a>
            <a href>
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="line"></div>

        <!-- form here -->
        <div class="profile-container">
          <div class="user-img"></div>
          <form action>
            <div class="input-container">
              <div>
                <span>Id Number</span>
                <br />
                <input type="text" v-model="id" />
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
                <input type="text" v-model="gender" />
              </div>
              <div>
                <span>Date of Birth</span>
                <br />
                <input type="text" v-model="birthdate" />
              </div>
              <div>
                <span>Religion</span>
                <br />
                <input type="text" v-model="religion" />
              </div>
              <div>
                <span>Parent Name</span>
                <br />
                <input type="text" v-model="parentName" />
              </div>
              <div>
                <span>Parent No</span>
                <br />
                <input type="text" v-model="parentNo" />
              </div>
              <div>
                <span>Relation</span>
                <br />
                <input type="text" v-model="relation" />
              </div>
              <div>
                <span>Address</span>
                <br />
                <input type="text" v-model="address" />
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
</template>

<script>
export default {
  name: "EditTeacherDetails"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain-area {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 15px;
  background: #e8e9ec;
}

.content-title {
  color: #282639;
  margin-bottom: 5px;
}

.container-for-table {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  height: 530px;
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
  border-top: 1px solid #eee;
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

.profile-container {
  display: grid;
  grid-template-columns: 256px 1fr;
}

.user-img {
  /* background: url("../img/me.jpg"); */
  background: #192060;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  padding: 5px;
  margin: 10px;
}

form {
  margin: 10px;
  font-size: 15px;
  font-weight: 300;
  color: #707070;
}

.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

input[type="text"] {
  border-radius: 5px;
  background: #e8e9ec;
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
  grid-template-columns: 120px 120px;
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
