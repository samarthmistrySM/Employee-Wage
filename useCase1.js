const checkAttendance = () => {
    const employeeAttendance = Math.random();
    console.log(employeeAttendance);

    return employeeAttendance > 0.5 ? true : false;
}

const emp1 = checkAttendance();

if(emp1){
    console.log(`Employee1 is present`);
}else{
    console.log(`Employee1 is Absent`);
}