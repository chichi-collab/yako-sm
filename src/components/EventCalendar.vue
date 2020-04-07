<template>
  <div class="event-calendar">
    <div class="timeline">
      <div class="column">
        <div class="event-date">
          <span>{{ weekday[actualDay] }}</span
          >,
          <span>{{ day }}-{{ months[month] }}-{{ year }}</span>
        </div>
        <div v-if="isEventsAvailable">
          <div
            class="event-card"
            v-for="event in eventsForToday"
            :key="event.notice_board_id"
          >
            <span class="event-title">{{ event.title }}</span>
            <p class="event-description">
              {{ event.event }}
            </p>
          </div>
        </div>
        <div v-else>
          <span>No event available</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// date utils
import dateToStr from "@/utils/dateToStr";
import { year, month, months, day, actualDay, weekday } from "@/utils/date";

// database scripts
import Database from "@/models/database/database";
import NoticeBoard from "@/models/database/notice-board-table";

// init TeachersTable
const noticeBoardTable = new NoticeBoard(new Database());

export default {
  name: "EventCalendar",
  mounted() {
    let todayDate = dateToStr.today();

    noticeBoardTable
      .fetchByToday(todayDate)
      .then(result => {
        if (result.length > 0) {
          this.eventsForToday = result;
          this.isEventsAvailable = true;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      year,
      month,
      months,
      weekday,
      actualDay,
      day,
      eventsForToday: [],
      isEventsAvailable: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-calendar {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1; /* added */
}

.timeline {
  max-height: 450px;
  display: flex;
  flex-direction: column;
}

/* timeline vertical line */
/* .timeline .column:before {
  content: "";
  position: absolute;
  top: 250px;
  left: 730px;
  width: 3px;
  height: calc(100% - 300px);
  background: rgba(87, 242, 97, 0.5);
} */

.timeline .column {
  margin: 10px;
}

.timeline .column .event-date span {
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-family: serif;
  letter-spacing: 1px;
}

/* timeline box drawn */
/* .timeline .column .event:before {
  content: "";
  position: absolute;
  left: 725px;
  width: 5px;
  height: 5px;
  background: #fff;
  border: 3px solid #57f261;
} */

.timeline .column .event-card .event-description {
  font-size: 13px;
  line-height: 15px;
  margin-left: 10px;
  font-family: serif;
}

.timeline .column .event-card .event-title {
  font-size: 20px;
  font-family: serif;
}

.timeline .column .event-card {
  background: #f3f3f3;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: 15px;
  margin-top: 10px;
  padding: 10px;
}

/* for custom scrollbar for webkit browser */

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
