<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="contain-area">
        <p class="content-title">Add New Expense</p>
        <div class="content">
          <!-- All Expenses -->
          <div class="container-for-table">
            <div class="title-bar">
              <span class="window-title">Expense Information</span>
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
                  <input type="number" v-model="id" />
                </div>
                <div>
                  <span>Expense Type</span>
                  <br />
                  <input type="text" v-model="expenseType" />
                </div>
                <div>
                  <span>Name</span>
                  <br />
                  <input type="text" v-model="name" />
                </div>
                <div>
                  <span>Status</span>
                  <br />
                  <select v-model="status">
                    <option disabled value>Please choose status...</option>
                    <option>Pending</option>
                    <option>Received</option>
                  </select>
                </div>
                <div>
                  <span>Amount Taken</span>
                  <br />
                  <input type="number" v-model="amountTaken" />
                </div>
                <div>
                  <span>Reason</span>
                  <br />
                  <input type="text" v-model="reason" />
                </div>
                <div>
                  <span>Date</span>
                  <br />
                  <input type="date" v-model="takenDate" />
                </div>
              </div>
              <div class="btn-container">
                <input type="button" value="Save" class="save-btn" @click="addExpense" />
                <input type="reset" value="Reset" class="reset-btn" />
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

// database scripts
import ExpenseDatabase from "../../models/database/expense-database";

const expenseDatabase = new ExpenseDatabase();

export default {
  name: "AddExpense",
  components: {
    InfoBar,
    SideMenuBar
  },
  data() {
    return {
      id: "",
      expenseType: "",
      name: "",
      status: "",
      amountTaken: "",
      reason: "",
      takenDate: ""
    };
  },
  methods: {
    addExpense() {
      const expenseData = {
        id: this.id,
        expenseType: this.expenseType,
        name: this.name,
        status: this.status,
        amountTaken: this.amountTaken,
        reason: this.reason,
        takenDate: this.takenDate
      };

      console.log(expenseData); // log expense details

      // insert expense details into the database
      // if error then show error message box
      // else show success message box

      expenseDatabase
        .add(expenseData)
        .then(result => {
          // ipcRenderer.send("open-teacher-information-dialog");
          console.log(result);
        })
        .catch(err => {
          // ipcRenderer.send("open-teacher-error-dialog");
          console.log(err);
        });
    }
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
  color: #282639;
  margin-bottom: 5px;
}

.container-for-table {
  background: #fff;
  width: 100%;
  border-radius: 5px;
  height: 320px;
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
  color: #303030;
}

.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

input[type="text"],
input[type="number"],
input[type="date"] {
  border-radius: 5px;
  background: #f3f3f3;
  outline: none;
  border: none;
  height: 30px;
  padding: 5px;
  color: #303030;
  font-weight: 100;
  width: 100%;
  margin-top: 5px;
}

select {
  border-radius: 5px;
  background: #f3f3f3;
  height: 30px;
  padding: 5px;
  color: #303030;
  font-weight: 100;
  width: 100%;
  margin-top: 10px;
  width: 250px;
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
