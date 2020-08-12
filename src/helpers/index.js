import moment from "moment";

Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

export function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    var temp = {
      day: moment(currentDate).format("ddd"),
      dayNumb: moment(currentDate).format("DD"),
      date: moment(currentDate).format("dddd, DD MMMM YYYY"),
    };
    dateArray.push(temp);
    currentDate = currentDate.addDays(1);
  }

  return dateArray;
}
