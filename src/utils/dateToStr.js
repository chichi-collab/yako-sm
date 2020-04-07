const { month, day, year } = require("@/utils/date");

// convert today's date to YYYY-MM-DD format
const dateToStr = {
  converter: function(date) {
    let dts = date.toString();
    if (dts.length == 1) {
      dts = `0${date}`;
    }

    return dts;
  },
  dayToStr: function() {
    return this.converter(day);
  },
  monthToStr: function() {
    return this.converter(month);
  },
  yearToStr: function() {
    return year.toString();
  },
  today: function() {
    return this.yearToStr() + "-" + this.monthToStr() + "-" + this.dayToStr();
  }
};

export default dateToStr;
