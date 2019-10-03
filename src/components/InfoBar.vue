<template>
  <div class="info-bar">
    <div class="box1">
      <h3 class="school-name">Apostolic JHS</h3>
    </div>
    <div class="box2">
      <img
        width="35"
        height="35"
        src="../assets/school-icon.png"
        alt="school-icon"
        class="school-icon"
      />
      <span class="yakoSM">yakoSM</span>
      <span class="tm">TM</span>
      <div class="search-area">
        <input type="search" name id placeholder="Search here..." />
        <font-awesome-icon icon="search" class="fa fa-color fa-search" />
      </div>
      <div class="user-notification">
        <div class="grey-circle">
          <font-awesome-icon icon="envelope" class="fa fa-color fa-envelope" />
        </div>
        <span class="counter">13</span>
        <div class="grey-circle">
          <font-awesome-icon icon="bell" class="fa fa-color fa-bell" />
        </div>
        <span class="counter-yellow">13</span>
        <div class="pipe"></div>
        <div class="user-img"></div>
        <div class="user-area">
          <span class="user-name">Anane Gabriel</span>
          <br />
          <span class="user-type">Admin</span>
        </div>
        <font-awesome-icon
          icon="angle-down"
          class="fa fa-color fa-angle-down"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBar"
};
</script>

<style scoped>
.info-bar {
  height: 45px;
  width: 100%;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 45px 1fr;
  grid-template-areas: "box1 box2" "box3 box3";
}

.box1 {
  background: #ffe711;
}

.box2 {
  background: rgb(255, 255, 255);
  display: flex;
}

.box1 {
  grid-area: box1;
}

.box2 {
  grid-area: box2;
}

.box3 {
  grid-area: box3;
}

.user-notification {
  display: flex;
}

.pipe {
  border-right: 2px solid #e8e9ec;
  height: 30px;
  margin: 8px 14px 10px 0px;
}

.school-icon {
  margin: 5px 20px;
}

.school-name {
  margin: 10px 0 10px 30px;
  color: #fff;
}

.yakoSM {
  font-size: 25px;
  font-weight: 300;
  width: 150px;
  color: #707070;
  margin: 10px 10px 10px 55px;
  vertical-align: center;
}

.tm {
  display: inline-block;
  width: 15px;
  height: 15px;
  font-size: 11px;
  text-align: center;
  color: #707070;
  position: relative;
  font-weight: 200;
  top: 6px;
  left: -80px;
}

.search-area {
  background: #e8e9ec;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 280px;
  height: 25px;
  border-radius: 50px;
  margin-top: 10px;
  margin-right: 30px;
  padding: 2px;
}

.search-area input[type="search"] {
  color: #707070;
  background: transparent;
  outline: none;
  border: none;
  width: 82%;
  margin: 1px 5px 1px 10px;
}

.search-area img {
  margin-top: 5px;
}

.grey-circle {
  background: #e8e9ec;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 30px;
  height: 30px;
  margin-top: 5px;
  border-radius: 50%;
  padding: 7px;
}

.grey-circle a {
  text-decoration: none;
}

.user-img {
  /* background: url("../img/me.jpg"); */
  background: #192060;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  margin: 7px 14px 8px 0px;
}

.counter {
  display: inline-block;
  background: #3686ff;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 11px;
  text-align: center;
  color: #fff;
  position: relative;
  font-weight: 200;
  top: 5px;
  left: -15px;
}

.counter-yellow {
  display: inline-block;
  background: #ffe711;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 11px;
  text-align: center;
  color: #fff;
  position: relative;
  font-weight: 200;
  top: 5px;
  left: -15px;
}

.user-area {
  margin: 3px 10px 0px 0px;
}

.user-name {
  top: 5px;
  font-size: 0.9rem;
  font-weight: 300;
  width: 110px;
}

.user-type {
  color: #707070;
  font-size: 0.7rem;
  width: 110px;
}

.fa-search {
  margin-top: 2px;
}

.user-notification .fa-angle-down {
  margin-top: 15px;
  color: #192060;
}

.fa-search {
  color: #192060;
}

.fa-bell {
  color: #192060;
}

.fa-envelope {
  color: #192060;
}
</style>
