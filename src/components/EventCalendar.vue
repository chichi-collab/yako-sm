<template>
  <div class="event-calendar">
    <div class="timeline">
      <div class="column">
        <div class="title">
          <span>{{ day }}-{{ month }}-{{ year }}</span>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique reprehenderit, asperiores rerum autem nihil laborum atque ducimus hic fuga perspiciatis dolor! In maiores ipsam facilis ipsum beatae accusantium nisi?</p>
        </div>
        <div class="description">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, consequuntur aspernatur voluptatibus asperiores suscipit laboriosam rem, fugit corporis commodi dolor tenetur tempora dignissimos laudantium illo! Beatae eveniet soluta repudiandae placeat?</p>
        </div>

        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum at ducimus quibusdam ipsa ullam quo fugiat eaque facere! Praesentium soluta autem similique perferendis veniam culpa ullam in odio sit.</p>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam molestias laboriosam, placeat temporibus quo quam vel mollitia, dolore nihil, asperiores error. Sequi neque libero aliquam ipsam amet, ea adipisci?</p>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum at ducimus quibusdam ipsa ullam quo fugiat eaque facere! Praesentium soluta autem similique perferendis veniam culpa ullam in odio sit.</p>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam molestias laboriosam, placeat temporibus quo quam vel mollitia, dolore nihil, asperiores error. Sequi neque libero aliquam ipsam amet, ea adipisci?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// date utils
import { day, month, year } from "../utils/date";

export default {
  name: "EventCalendar",
  data() {
    return {
      year,
      month,
      day
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

.timeline .column .title span {
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-family: serif;
  letter-spacing: 1px;
}

/* timeline box drawn */
/* .timeline .column .description:before {
  content: "";
  position: absolute;
  left: 725px;
  width: 5px;
  height: 5px;
  background: #fff;
  border: 3px solid #57f261;
} */

.timeline .column .description p {
  font-size: 13px;
  line-height: 20px;
  margin-left: 20px;
  margin-top: 10px;
  font-family: serif;
}

.timeline .column .description {
  background: #f3f3f3;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: 15px;
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
