# Employee Wage

## Use Case 1 - Employee Present or Absent
### Date - 04-12-2024

The `checkAttendance` function uses the `Math.random()` function to generate a random attendance value between 0 and 1. The function then checks whether the attendance value is greater than 0.5, which corresponds to a 50% chance of the employee being present or absent.

## Use Case 2 - Daily Wage based on Work type
### Date - 04-12-2024

The `calculateDailyWage` function uses the `Math.random()` function to generate a random number to determine whether the employee is working Part-Time, Full-Time, or No-Time. Based on this, the function calculates the employee's salary. The work hours are fixed: Part-Time = 4 hours, Full-Time = 8 hours, and No-Time = 0 hours. The wage is then calculated based on the number of hours worked, with an hourly rate of $20.

## Use Case 3 - Refectored the code And Made it Minimal
### Date - 04-12-2024

The code has been refactored to simplify attendance and wage calculation. The `checkAttendance` function determines if the employee is present based on a random value. The `getWorkHours` function generates random work hours: 0 for absent, 4 for Part-Time, and 8 for Full-Time. The `calculateDailyWage` function calculates the salary based on hours worked at a rate of $20 per hour.

## Use Case 4 - Employee Wages for a month 
### Date - 04-12-2024

The `calculateForMonth` function calculates the total salary and hours worked by an employee over 20 workdays in a month. It calls the `calculateDailyWage` function to get the daily hours worked and salary, and then aggregates the data. It tracks the total number of days worked, total hours, and total salary. At the end, it prints the results in a formatted message:
##### Message:
```markdown
===========================================================
Employee worked 5 days, 36 hours a in month and earned 720$
===========================================================
```

## Use Case 5 - Employee Wages for a month 
### Date - 04-12-2024

The `calculateMaxWage` function calculates the total salary and hours worked by an employee over a month (up to 20 workdays or 160 hours). It tracks the number of days worked, total hours, and total salary earned.

### Key Differences from the Original Function:
- The function will stop calculating when either 20 days or 160 hours are reached.
- It ensures that the total hours worked in the month do not exceed 160 hours.
- The total salary is calculated based on daily wages returned by the `calculateDailyWage()` function.

##### Message:
```markdown
==============================================================
Employee worked 24 days, 160 hours a in month and earned 3200$
==============================================================
```