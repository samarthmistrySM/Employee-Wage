const checkAttendance = () => {
  const employeeAttendance = Math.random();
  console.log(employeeAttendance);

  return employeeAttendance > 0.5 ? true : false;
};

const calculateDailyWage = () => {
  const workType = Math.floor(Math.random() * 4);

  let hourWorked;
  const salaryPerHour = 20;

  switch (workType) {
    case 1:
      hourWorked = 0;
      console.log("No Time");
      break;

    case 2:
      hourWorked = 4;
      console.log("Part Time");
      break;
    case 3:
      hourWorked = 8;
      console.log("Full Time");
      break;

    default:
      hourWorked = 0;
      console.log("No Time");
      break;
  }

  return hourWorked * salaryPerHour;
};



//[=============]Debuger[=============]

//   const emp1 = checkAttendance();

//   if (emp1) {
//     console.log(`Employee1 is present`);
//   } else {
//     console.log(`Employee1 is Absent`);
//   }


//   const emp1 = calculateDailyWage();
//   console.log(`Employee1 Earned ${emp1}$`);

//[=============]Debuger[=============]