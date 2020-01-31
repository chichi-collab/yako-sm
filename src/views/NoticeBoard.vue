<template>
  <div>
    <InfoBar />
    <div class="split-screen">
      <SideMenuBar />
      <div class="notice">
        <div class="heading">
          <p>Notice</p>
        </div>
        <div class="notice-area">
          <div class="notice-board">
            <div class="notice-section">
              <div class="title-bar">
                <span class="window-title">Notice information</span>
                <div class="control-box prevent-select">
                  <font-awesome-icon icon="angle-down" class="fa fa-angle-down" />
                  <font-awesome-icon icon="sync-alt" class="fa fa-sync-alt" />
                  <font-awesome-icon icon="times" class="fa fa-times" />
                </div>
              </div>
              <div class="line"></div>
              <div>
                <input type="text" placeholder="Title" v-model="noticeTitle" />
              </div>
              <div class="text-area">
                <textarea
                  name="notice"
                  id="notice"
                  cols="78"
                  rows="6"
                  v-model="note"
                  placeholder="Content"
                ></textarea>
              </div>
              <div class="addNoticeBtn">
                <button class="Btn" v-on:click="addNote">Add Notice</button>
              </div>
              <div v-if="!clicked && note != ''" class="notes-section">
                <div class="card" v-for="anote in notes" :key="anote.id">
                  <div class="delete-note">
                    <font-awesome-icon icon="times" class="fa fa-times" />
                  </div>
                  <div class="notes">
                    <p class="note-title">{{anote.title}}</p>
                    <div class="note-content">{{anote.content}}</div>
                  </div>
                  <div class="line"></div>
                  <span class="info">
                    <h4 class="date-label">Posted date</h4>
                    <h4 class="date-added">{{day}}-{{month}}-{{year}}</h4>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoBar from "@/components/InfoBar.vue";
import SideMenuBar from "@/components/SideMenuBar.vue";
import { day, month, year } from "../utils/date";

export default {
  name: "noticeBoard",
  components: {
    InfoBar,
    SideMenuBar
  },
  data() {
    return {
      note: "",
      clicked: false,
      dateAdded: null,
      notes: [],
      year,
      month,
      day,
      noticeTitle: ""
    };
  },
  methods: {
    addNote() {
      // when the button is clicked set the click variable to true
      // this.clicked = !this.clicked

      var currentNote = {
        title: this.noticeTitle,
        content: this.note
      };
      this.notes.push(currentNote);
    }
  }
};
</script>

<style scoped>
.notice {
  margin-top: 5px;
  margin-left: 20px;
  margin-right: 15px;
  background: #f3f3f3;
}

.notice-board {
  /* flex: 1; */
  background: #fff;
  overflow-y: scroll;
  height: 579px;


}


.notice-board::-webkit-scrollbar {
  display: none;
}

.heading {
  margin-bottom: 5px;
  margin-top: 5px;
}

.delete-note {
  margin-left: -25px;
  float: right;
  height: 20px;
  margin-top: -5px;
}

.delete-note .fa-times {
  font-size: 14px;
  margin-right: 2px;
  color: rgb(204, 34, 34);
}

.title-bar {
  border-radius: 5px;
  background: rgb(255, 255, 255);
  margin-bottom: 5.5px;
  height: 20px;
}

.addNoticeBtn {
  margin-top: 10px;
  margin-bottom: 15px;
}

.Btn {
  width: 15%;
  font-size: 14px;
  padding: 5px;
  border: 1px solid #302d43;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  margin-left: 140px;
}

.notes-section {
  margin-top: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  max-height: 450px;
  display: flex;
  flex-direction: column;
}

.notes {
  margin-bottom: 40px;
  margin-top: 15px;
  break-after: auto;
}

.card {
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-top: 4px;
  margin-bottom: 5px;
  word-wrap: break-word;
  width: 68%;
  padding: 5px;
  background: #fff;
  margin-left: 140px;
}

.date-added {
  text-align: right;
}

.info {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

textarea {
  font-size: 14px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  padding: 5px;
}

.text-area {
  margin-left: 140px;
}

/* for custom scrollbar for webkit browser */

.notes-section::-webkit-scrollbar {
  width: 6px;
}
.notes-section::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.notes-section::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.top-line {
  border-top: 1px solid #eee;
  margin-top: 10px;
}

.line {
  border-top: 1px solid #eee;
}

.window-title {
  height: 20px;
  padding: 2px;
  color: #3d3c3c;
  margin-left: 5px;
  float: left;
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

input[type="text"] {
  /* border-radius: 5px; */
  /* background: #f3f3f3; */
  /* outline: none; */
  border: 1px solid;
  height: 30px;
  padding: 5px;
  width: 67%;
  margin-top: 5px;
  margin-left: 140px;
  font-size: 14px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
}

.note-title {
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 5px;
  padding: 4px;
}

.note-content {
  padding: 4px;
  font-weight: lighter;
}
</style>
