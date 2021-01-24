 function createEmployeeRecord(src) {
   let employee = {};
   employee.firstName = src[0];
   employee.familyName = src[1];
   employee.title = src[2];
   employee.payPerHour = src[3];
   employee.timeInEvents = [];
   employee.timeOutEvents = [];
   return employee;
 }

function createEmployeeRecords(src) {
  let employees = src.map(createEmployeeRecord);
  return employees;
}

function createTimeInEvent(timeEvent) {
  let timeEventArray = timeEvent.split(" ");
  let date = timeEventArray[0];
  let hour = parseInt(timeEventArray[1]);
  this.timeInEvents.push({date: date, hour: hour, type: "TimeIn"});
  return this;
}

function createTimeOutEvent(timeEvent) {
  let timeEventArray = timeEvent.split(" ");
  let date = timeEventArray[0];
  let hour = parseInt(timeEventArray[1]);
  this.timeOutEvents.push({date: date, hour: hour, type: "TimeOut"});
  return this;
}

function hoursWorkedOnDate(date) {
  let findHour = function(date) {if (date === this.timeInEEvents.date) {return this;}}
  let timeIn = this.timeInEvents.find(findHour).hour;
  let timeOut = this.timeOutEvents.find(findHour).hour;
  let hoursWorked = timeOut - timeIn;
  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  let wagesEarned = this.payPerHour*hoursWorkedOnDate(date);
  return wagesEarned;
}
