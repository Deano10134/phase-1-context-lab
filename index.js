/* Your Code Here */
// Creates an employee record object from a 4-element Array
const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => ({
  firstName,
  familyName,
  title,
  payPerHour,
  timeInEvents: [],
  timeOutEvents: []
});

// Takes an array of arrays, returns an array of employee objects
const createEmployeeRecords = (arrayOfArrays) => arrayOfArrays.map(createEmployeeRecord);

// Adds a new "TimeIn" event to the employee record
const createTimeInEvent = function(dateStamp) {
  const [date, hourString] = dateStamp.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hourString, 10),
    date
  });
  return this;
};

// Adds a new "TimeOut" event to the employee record
const createTimeOutEvent = function(dateStamp) {
  const [date, hourString] = dateStamp.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hourString, 10),
    date
  });
  return this;
};

// Returns hours worked on a specific date (as a Number)
const hoursWorkedOnDate = function(date) {
  const timeIn = this.timeInEvents.find(e => e.date === date);
  const timeOut = this.timeOutEvents.find(e => e.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
};

// Returns wages earned on specific date
const wagesEarnedOnDate = function(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

// Finds an employee record in an array by first name
const findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(rec => rec.firstName === firstName);
};

// Calculates total payroll for a given array of employee records
const calculatePayroll = function(employeeRecords) {
  return employeeRecords.reduce((total, rec) => total + allWagesFor.call(rec), 0);
};


/*


/*

 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

