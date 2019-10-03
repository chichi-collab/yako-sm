<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="contain-area">
        <p class="content-title">Add Fees Payment</p>
        <div class="content">
          <!--  -->
          <div class="tfees-container">
            <div>
              <span>Total Fees</span>
              <br />
              <input type="text" value="1000" class="total-fees" />
            </div>
            <div>
              <span></span>
              <br />
              <input type="button" value="Update Fees" class="update-btn" />
            </div>
          </div>
          <div class="line"></div>
          <div class="container-for-table">
            <div class="title-bar">
              <span class="window-title">Payment Information</span>
              <!-- control box for window container -->
              <div class="control-box prevent-select">
                <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
                <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
                <font-awesome-icon icon="times" class="fa fa-times" />
              </div>
            </div>
            <div class="line"></div>

            <!-- form here -->
            <form action>
              <div class="input-container">
                <div>
                  <span>Id</span>
                  <br />
                  <input type="text" v-model="id" />
                </div>
                <div>
                  <span>Student Id</span>
                  <br />
                  <input type="text" v-model="id" />
                </div>
                <div>
                  <span>Student Name</span>
                  <br />
                  <input type="text" v-model="studentName" />
                </div>

                <div>
                  <span>Class</span>
                  <br />
                  <input type="text" v-model="studentClass" />
                </div>
                <div>
                  <span>Fees Paid</span>
                  <br />
                  <input type="text" v-model="feesPaid" />
                </div>

                <div>
                  <span>Date</span>
                  <br />
                  <input type="text" v-model="date" />
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
  name: "AddFeesPayment",
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
  background: #e8e9ec;
}

.content-title {
  margin-bottom: 5px;
}

.container-for-table {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  height: 330px;
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

form {
  margin: 10px;
  font-size: 15px;
  font-weight: 300;
  color: #707070;
}

.input-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

.tfees-container {
  display: grid;
  height: 70px;
  grid-template-columns: 260px 113px;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  margin-bottom: 20px;
  padding: 5px;
  background: #fff;
  border-radius: 5px;
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

.update-btn {
  background: rgb(14, 233, 25);
}
</style>
