<template>
  <div class="contain-area">
    <div class="content">
      <!-- Edit Expense Details -->
      <div class="container-for-table">
        <div class="title-bar">
          <span class="window-title">Edit Expense Details</span>
          <!-- control box for window container -->
          <div class="control-box prevent-select">
            <font-awesome-icon
              icon="times"
              class="fa fa-times"
              @click="closeCurrentWindow"
            />
          </div>
        </div>
        <div class="line"></div>

        <!-- form here -->
        <form action>
          <div class="input-container">
            <div>
              <span>Id</span>
              <br />
              <input type="number" v-model="expensesId" readonly />
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
              <input type="date" v-model="dateOfExpense" />
            </div>
          </div>
          <div class="btn-container">
            <input
              type="button"
              value="Save"
              class="save-btn"
              @click="updateExpenseDetails"
            />
            <input
              type="button"
              value="Revert Changes"
              class="reset-btn"
              @click="refreshExpenseDetails(expensesId)"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer, remote } from "electron";

// database scripts
import Database from "@/models/database/database";
import ExpensesTable from "@/models/database/expense-table";

// init ExpensesTable
const expensesTable = new ExpensesTable(new Database());

export default {
  name: "editExpenseDetails",
  mounted() {
    ipcRenderer.on("expense-id", (event, arg) => {
      this.expensesId = arg;

      this.refreshExpenseDetails(this.expensesId);
    });
  },
  data() {
    return {
      expensesId: 0,
      expenseType: "",
      name: "",
      status: "",
      amountTaken: 0,
      reason: "",
      dateOfExpense: "",
      expenseDetails: {}
    };
  },
  methods: {
    updateExpenseDetails() {
      const expenseNewDetails = {
        expensesId: this.expensesId,
        expenseType: this.expenseType,
        name: this.name,
        status: this.status,
        amountTaken: this.amountTaken,
        reason: this.reason,
        dateOfExpense: this.dateOfexpense
      };

      expensesTable
        .update(expenseNewDetails)
        .then(result => {
          ipcRenderer.send("open-teacher-information-dialog");
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    },
    refreshExpenseDetails(id) {
      expensesTable
        .fetchOne(id)
        .then(result => {
          this.expenseDetails = result;

          // set default data values to expenseDetails
          this.expensesId = this.expenseDetails.expenses_id;
          this.expenseType = this.expenseDetails.expense_type;
          this.name = this.expenseDetails.name;
          this.status = this.expenseDetails.status;
          this.amountTaken = this.expenseDetails.amount_taken;
          this.reason = this.expenseDetails.reason;
          this.dateOfExpense = this.expenseDetails.date_of_expense;
        })
        .catch(err => {
          console.log(err);
        });
    },
    closeCurrentWindow() {
      let currentWindow = remote.getCurrentWindow();
      currentWindow.close();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain-area {
  margin-top: 10px;
  background: #e8e9ec;
}

.container-for-table {
  background: #fff;
  width: 100%;
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

.control-box .fa-times {
  font-size: 12px;
  color: rgb(204, 34, 34);
}

.control-box .fa-times:hover {
  color: rgb(236, 16, 16);
}

form {
  margin: 30px;
  font-size: 15px;
  font-weight: 300;
  color: #303030;
}

.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

input[type="text"],
input[type="date"],
input[type="email"],
input[type="phone"],
input[type="number"] {
  border-radius: 5px;
  background: #e8e9ec;
  outline: none;
  border: none;
  height: 30px;
  padding: 5px;
  color: #303030;
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

input[type="button"],
input[type="reset"] {
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

select {
  border-radius: 5px;
  background: #f3f3f3;
  height: 30px;
  padding: 5px;
  color: #303030;
  font-weight: 100;
  width: 100%;
  margin-top: 10px;
}

.reset-btn {
  background: #ffe711;
}

.save-btn {
  background: #3686ff;
}
</style>
