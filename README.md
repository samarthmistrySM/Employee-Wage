# Employee Wage


## Use Case 1 - Employee Present or Absent
### Date - 04-12-2024
The `checkAttendance` function uses the `Math.random()` function to generate a random attendance value between 0 and 1. The function then checks whether the attendance value is greater than 0.5, which corresponds to a 50% chance of the employee being present or absent.

## Use Case 2 - Daily Wage based on 
The `calculateDailyWage` function uses the `Math.random()` function to generate a random number to determine whether the employee is working Part-Time, Full-Time, or No-Time. Based on this, the function calculates the employee's salary. The work hours are fixed: Part-Time = 4 hours, Full-Time = 8 hours, and No-Time = 0 hours. The wage is then calculated based on the number of hours worked, with an hourly rate of $20.