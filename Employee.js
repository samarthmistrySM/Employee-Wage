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

  console.log("====================================");
  console.log(
    `Employee worked ${days} days, ${totalHours} hours a in month and earned ${salary}$`
  );
  console.log("====================================");
};

const calculateForYear = () => {
  const employeeData = [];
  for (let i = 1; i <= 12; i++) {
    const empDataPerMonth = calculateForMonth(i);
    employeeData.push(empDataPerMonth);
  }
  return employeeData;
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

//[=============]Debuger[=============]
