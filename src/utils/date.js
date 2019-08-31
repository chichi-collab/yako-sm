let todayDate = new Date();
let year = todayDate.getFullYear();
let month = todayDate.getMonth();
let day = todayDate.getDate();

let date = {
  year,
  month,
  day
};

module.exports = date;
