const prompt = require("prompt-sync")();

const checkAttendance = () => {
  const employeeAttendance = Math.random();
  return employeeAttendance > 0.3 ? true : false;
};

const getWorkHours = () => {
  let workType = Math.floor(Math.random() * 3) + 2;

  const attandance = checkAttendance();

  workType = !attandance ? 1 : workType;

  switch (workType) {
    case 1:
      return 0;
    case 2:
      return 4;
    case 3:
      return 8;
    default:
      return 0;
  }
};

const calculateDailyWage = () => {
  const hourWorked = getWorkHours();
  const salaryPerHour = 20;
  return {
    hour: hourWorked,
    salaryPerDay: salaryPerHour * hourWorked,
  };
};

const calculateForMonth = (month) => {
  let days = 0;
  let totalHours = 0;
  let salary = 0;

  for (let i = 0; i < 20; i++) {
    const emp = calculateDailyWage();
    if (emp.hour !== 0) {
      days++;
      totalHours += emp.hour;
      salary += emp.salaryPerDay;
    }
  }

  return { month, daysWorked: days, totalHours, salary };
};

const calculateMaxWage = () => {
  let days = 0;
  let totalHours = 0;
  let salary = 0;

  while (days < 20 && totalHours < 160) {
    const emp = calculateDailyWage();
    if (totalHours + emp.hour <= 160) {
      if (emp.hour !== 0) {
        days++;
        totalHours += emp.hour;
        salary += emp.salaryPerDay;
      }
    } else {
      break;
    }
  }
  return { days, totalHours, salary };
};

const numberToMonth = (num) => {
  const months = [
    "Jan",
    "Fab",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[num - 1];
};

const calculateForYear = () => {
  const employeeData = [];
  for (let i = 1; i <= 12; i++) {
    const month = numberToMonth(i);
    const empDataPerMonth = calculateForMonth(month);
    employeeData.push(empDataPerMonth);
  }
  return employeeData;
};

const calculateForUsers = () => {
  const usersData = new Map();
  const input = parseInt(prompt("Enter the number of Employees: "));
  for (let i = 0; i < input; i++) {
    const name = prompt("Enter the name of user: ");
    const userData = calculateForYear();

    if (!usersData.has(name)) {
      usersData.set(name, []);
    }
    usersData.get(name).push(userData);
  }
  return usersData;
};

const findMonthUserData = () => {
  const usersData = calculateForUsers();

  const username = prompt("Enter the username: ");
  const month = prompt("Enter Month (Jan, Feb, ...): ");

  const userData = usersData.get(username);
  let monthData;
  if (userData.length === 1) {
    monthData = userData[0].filter((data) => {
      return data.month === month;
    });
  } else {
    console.log("====================================");
    for (let i = 0; i < userData.length; i++) {
      console.log(`${i}. ${username}`);
    }
    console.log("====================================");
    
    const input = parseInt(prompt("Select User: "));

    monthData = userData[input].filter((data) => {
      return data.month === month;
    });
  }

  return monthData;
};

//[=============]Debuger[=============]

//   const emp1 = checkAttendance();

//   if (emp1) {
//     console.log(`Employee1 is present`);
//   } else {
//     console.log(`Employee1 is Absent`);
//   }

// const emp1 = calculateDailyWage();
// console.log(`Employee1 worked ${emp1.hour}hrs Earned ${emp1.salary}$`);

// calculateForMonth()
// console.log(calculateForUsers());

// const usersData = calculateForUsers();

// for (let [key, value] of usersData) {
//     console.log(key, value.length);
//   }

console.table(findMonthUserData());
//[=============]Debuger[=============]
