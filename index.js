// ********** ASSIGNMENT # 21 - 25 **********

document.writeln("<h1>Assignment # 21 - 25</h1>");
// ******* QUESTION-1 ************
document.writeln("<h2>Question-1</h2>");
// let FirstName = prompt("Enter the First Name : ");
// let LastName = prompt("Enter the Last Name : ");
// let fullName = FirstName + " " + LastName;
// alert("Hello..." + " " + fullName);

document.writeln("<h3>Done</h3>");

// ******* QUESTION-2 ************
document.writeln("<h2>Question-2</h2>");

// let favMobile = prompt("Enter your Favourite Mobile Phone Model");
// let mobileLength = favMobile.length;
// document.writeln(`My favourite phone is: ${favMobile} <br> Length of string: ${mobileLength} `);

document.writeln("<h3>Done</h3>");

// ******* QUESTION-3 ************
document.writeln("<h2>Question-3</h2>");

let countryName = "Pakistani";
let index = countryName.indexOf("n");
document.writeln(`String: ${countryName} <br> Index of 'n': ${index} `);

document.writeln("<h3>Done</h3>");

// ******* QUESTION-4 ************
document.writeln("<h2>Question-4</h2>");

let word = "Hello World";
let lastIndex = word.lastIndexOf("l");
document.writeln(`String: ${word} <br> Last Index of 'l': ${lastIndex} `);

document.writeln("<h3>Done</h3>");

// ******* QUESTION-5 ************
document.writeln("<h2>Question-5</h2>");

let str = "Pakistani";
let char = str.charAt(3);
document.writeln(`String: ${str} <br> Character at index 3: ${char}`);

document.writeln("<h3>Done</h3>");

// ******* QUESTION-6 ************
document.writeln("<h2>Question-6</h2>");

// let FirstName = prompt("Enter the First Name : ");
// let LastName = prompt("Enter the Last Name : ");
// let fullName = FirstName.concat(" ", LastName);
// alert("Hello..." + " " + fullName);

document.writeln("<h3>Done</h3>");

// ******* QUESTION-7 ************
document.writeln("<h2>Question-7</h2>");

let city = "Hyderabad";
let replaceCity = city.replace("Hyder", "Islam");
document.writeln(`City: ${city} <br> After Replacement: ${replaceCity}`);

document.writeln("<h3>Done</h3>");

// ******* QUESTION-8 ************
document.writeln("<h2>Question-8</h2>");

let message =
  " Ali and Sami are best friends. They play cricket and football together.";
let replace_message = message.replace(/and/gi, "&");
document.writeln(replace_message);
document.writeln("<h3>Done</h3>");

// ******* QUESTION-9 ************
document.writeln("<h2>Question-9</h2>");

let number = 472;
console.log("value:" + number);
console.log(typeof number);

console.log("value:" + number);
let numberAsString = number.toString();
console.log(typeof numberAsString);

document.writeln("<h3>Done</h3>");

// ******* QUESTION-10 ************
document.writeln("<h2>Question-10</h2>");
// let Userinput = prompt("Enter the word which would be converted in uppercase: ")
// let upper_input = Userinput.toUpperCase()
// alert(`User input: ${Userinput} \nUpper Case: ${upper_input}`)

document.writeln("<h3>Done</h3>");

// ******* QUESTION-11 ************
document.writeln("<h2>Question-11</h2>");

// let userInput = prompt("Enter the word which would be converted in Title case: ")
// let user = userInput[0].toUpperCase() + userInput.slice(1)
// console.log(user);

document.writeln("<h3>Done</h3>");

// ******* QUESTION-12 ************
document.writeln("<h2>Question-12</h2>");

var num = 35.36;
console.log(num.toString().replace(".", ""));

document.writeln("<h3>Done</h3>");

// ******* QUESTION-13 ************
document.writeln("<h2>Question-13</h2>");

// let user = prompt("Enter the User name: ");
// let flag = 0;
// for (let i = 0; i < user.length; i++) {
//   let chr = user.charCodeAt(i);
//   if (chr == 33 || chr == 44 || chr == 46 || chr == 64) {
//     alert("Please Enter a valid Username");
//    flag = 1;
//   }
// }
document.writeln("<h3>Done</h3>");

// ******* QUESTION-14 ************
document.writeln("<h2>Question-14</h2>");

// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchInput = prompt(
//   "Welcome to ABC Bakery. What do you want to order Sir / Ma'am?",
// ).toLowerCase();
// let flag = 0;
// for (let i = 0; i < bakeryItems.length; i++) {
//   if (bakeryItems[i] === searchInput) {
//     alert(
//       `${searchInput} is available at index ${bakeryItems.indexOf(searchInput)}`,
//     );
//     flag = 1;
//     break;
//   }
// }
// if (flag === 0) {
//   alert(`We are sorry. ${searchInput} is not available in our bakery..`);
// }
document.writeln("<h3>Done</h3>");

// ******* QUESTION-15 ************
document.writeln("<h2>Question-15</h2>");

// let user_pswd = prompt(`Enter the Valid Password and Password must be:

document.writeln("<h3>Done</h3>");

// ******* QUESTION-16 ************
document.writeln("<h2>Question-16</h2>");

var university = "University of Karachi";
console.log(university.split(""));

document.writeln("<h3>Done</h3>");
// ******* QUESTION-17 ************
document.writeln("<h2>Question-17</h2>");

// let input = prompt("Enter the name: ")
// alert(input.slice(-1))

document.writeln("<h3>Done</h3>");
// ******* QUESTION-18 ************
document.writeln("<h2>Question-18</h2>");

let text = "The quick brown fox jumps over the lazy dog".toLowerCase();
let change = text.split(" ");
console.log(change);
let flag = 0;
for (let i = 0; i < change.length; i++) {
  if (change[i] === "the") {
    flag++;
  }
}
console.log(`There are ${flag} occurence(s) of "the"`);

document.writeln("<h3>Done</h3>");

// ********** ASSIGNMENT # 21 - 25 Completed!! **********
// ----------------------------------------------------------
//////////////////////////////////
document.writeln(
  `<br> /////////////////////////////completed assignment 21 - 25///////////////////////////////////////////`,
);
// ********** ASSIGNMENT # 26 - 30 **********
// ******* QUESTION-1 ************
document.writeln("<h2>Question-1</h2>");
// let userInput = prompt("Enter a positive integer: ");
// document.writeln(
//   `Number: ${userInput} <br> Round off value: ${Math.round(userInput)} <br> Floor value: ${Math.floor(userInput)} <br> Ceil value: ${Math.ceil(userInput)}`,
// );

document.writeln("<h3>Done</h3>");

// ******* QUESTION-2 ************

document.writeln("<h2>Question-2</h2>");
// let userinput = prompt("Enter a negative floating-point: ");
// document.writeln(
//   `Number: ${userinput} <br> Round off value: ${Math.round(userinput)} <br> Floor value: ${Math.floor(userinput)} <br> Ceil value: ${Math.ceil(userinput)}`,
// );
document.writeln("<h3>Done</h3>");

// ******* QUESTION-3 ************

document.writeln("<h2>Question-3 </h2>");
let Number = -4;
document.writeln(`The absolute value of ${Number} is ${Math.abs(Number)}`);
document.writeln("<h3>Done</h3>");

// ******* QUESTION-4 ************
document.writeln("<h2>Question-4</h2>");

let diceRoll = Math.floor(Math.random() * 6) + 1;
document.writeln(`Random dice value: ${diceRoll}`);
document.writeln("<h3>Done</h3>");

// ******* QUESTION-5 ************
document.writeln("<h2>Question-5</h2>");

// let generate_Number = Math.floor( Math.random() * 6)
// if (generate_Number === 1){
//   alert(generate_Number + "Random coins value: Tails" )
// }else{
//   alert(generate_Number + "Random coins value: Head" )
// }
document.writeln("<h3>Done</h3>");

// ******* QUESTION-6 ************
document.writeln("<h2>Question-6</h2>");

let random_Number = Math.floor(Math.random() * 100) + 1;
document.writeln("random number between 1 and 100 : " + random_Number);
document.writeln("<h3>Done</h3>");

// ******* QUESTION-7 ************

document.writeln("<h2>Question-7</h2>");
// let user_weight = prompt("Enter your weight in kiograms")
// let weight = parseFloat(user_weight)
// alert(`The weight of user is ${weight} kilograms`)
document.writeln("<h3>Done</h3>");

// ******* QUESTION-8 ************

document.writeln("<h2>Question-8</h2>");

// let secret_number = Math.floor(Math.random() * 10) + 1;
// let userAns = +prompt("Guess the number b/w 1-10");

// if (userAns === secret_number) {
//  document.writeln("Congratulations! you win");
// } else {
//  document.writeln("Try again: " + secret_number);

// }
document.writeln("<h3>Done</h3>");

// ********** ASSIGNMENT # 26 - 30 Completed!! **********
// ----------------------------------------------------------
//////////////////////////////////
document.writeln(
  `<br> /////////////////////////////completed assignment 26 - 30///////////////////////////////////////////`,
);

// ********** ASSIGNMENT # 31 - 34  **********
// ******* QUESTION-1 ************
document.writeln("<h2>Question-1</h2>");

let currentDate = new Date();
document.writeln(currentDate);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-2 ************
document.writeln("<h2>Question-2</h2>");
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth = currentDate.getMonth();
document.writeln(`Current Month: ${monthNames[currentMonth]}`);
document.writeln("<h3>Done</h3>");

// ******* QUESTION-3 ************
document.writeln("<h2>Question-3</h2>");
// let dayNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];
// let currentDay = currentDate.getDay();
// document.writeln(`Today is: ${dayNames[currentDay].slice(0, 3)}`);
document.writeln("<h3>Done</h3>");

// ******* QUESTION-4 ************
document.writeln("<h2>Question-4</h2>");
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = currentDate.getDay();
let day = dayNames[currentDay].slice(0, 3);
if (day === "Sat" || day === "Sun") {
  document.writeln("It's Fun day");
} else {
  document.writeln("It's a Weekday");
}
document.writeln("<h3>Done</h3>");
// ******* QUESTION-5 ************
document.writeln("<h2>Question-5</h2>");
let date = currentDate.getDate();
if (date < 16) {
  document.writeln("First fifteen days of the month");
} else {
  document.writeln("Last days of the month");
}
document.writeln("<h3>Done</h3>");

// ******* QUESTION-6 ************
document.writeln("<h2>Question-6</h2>");
let current_Date = new Date();
let milisecond = current_Date.getTime();
let minutes = milisecond / 60000;

document.writeln("Current Date: " + current_Date + "<br>");
document.writeln("Milliseconds since Jan 1, 1970: " + milisecond + "<br>");
document.writeln("Minutes since Jan 1, 1970: " + minutes);
document.writeln("<h3>Done</h3>");

// ******* QUESTION-7 ************
document.writeln("<h2>Question-7</h2>");

// let hours = current_Date.getHours()
// if (hours < 12){
// alert("Its AM.")
// }else if (hours >= 12){
// alert("Its PM.")
// }

document.writeln("<h3>Done</h3>");

// ******* QUESTION-8 ************
document.writeln("<h2>Question-8</h2>");
let laterDate = new Date("December 31, 2020");
document.writeln(laterDate);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-9 ************
document.writeln("<h2>Question-9</h2>");
// let ramdanStart = new Date("June 18, 2015");
// let today = new Date();
// let difference = today - ramdanStart;
// let past_days = Math.floor(difference / (1000 * 60 * 60 * 24));
// alert(past_days + " days have passed since 1st Ramdan , 2015")

document.writeln("<h3>Done</h3>");
// ******* QUESTION-10 ************
document.writeln("<h2>Question-10</h2>");
let refrence_Date = new Date("December 05, 2015 22:50:16");
let begining2015 = new Date("January 01, 2015");
let difference = refrence_Date - begining2015;
let last_difference = Math.floor(difference / (1000 * 60));
document.writeln(
  "On reference date " +
    refrence_Date +
    " " +
    last_difference +
    " seconds had passed since beginning of 2015",
);
document.writeln("<h3>Done</h3>");
// ******* QUESTION-11 ************
document.writeln("<h2>Question-11</h2>");

let currentDateTime = new Date();
let oneHourAgo = new Date(currentDateTime.getTime() - 60 * 60 * 1000);
document.writeln(
  "Current date: " +
    currentDateTime +
    "<br>" +
    "1 hour ago, it was: " +
    oneHourAgo,
);
document.writeln("<h3>Done</h3>");

// ******* QUESTION-12 ************
document.writeln("<h2>Question-12</h2>");
let $Date = new Date();
let current$Date = new Date();
current$Date.setFullYear(current$Date.getFullYear() - 100);
document.writeln(`current date: ${$Date} 100 years back: ${current$Date}`);
console.log(current$Date);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-13 ************
document.writeln("<h2>Question-13</h2>");
// let birth_year = new Date ()
// let age = +prompt("Enter your age: ")
// let find_birth = birth_year.getFullYear() - age
// document.writeln(`Your age is: ${age}
//   Your birth year is ${find_birth}
//   `)

document.writeln("<h3>Done</h3>");

// ******* QUESTION-14 ************
document.writeln("<h2>Question-14</h2>");
// let customerName = prompt("Enter your name:");
// let customer_Month = prompt("Enter your Current Month:");
// let Num_Units = parseFloat(prompt("Enter your Number of units:"));
// let Charges_unit = parseFloat(prompt("Enter your charges per unit:"));
// let net_Amount = Num_Units * Charges_unit;
// let late_Payment = 350;
// let gross_Amount = net_Amount + late_Payment;
// document.writeln(
//   `<h3>K-Electric Bill</h3>
//   Customer Name: <b>${customerName}</b> <br>
//   Current Month: <b>${customer_Month}</b> <br>
//   Number of Units: <b>${Num_Units}</b> <br>
//   Charges per Unit: <b>${Charges_unit}</b> <br>
//   Net Amount Payable (within Due Date): <b>${net_Amount}</b> <br>
//   Late Payment Surcharge: <b>${late_Payment}</b> <br>
//   Gross Amount Payable (after Due Date) : <b>${gross_Amount}</b> <br>
//   `,
// );

document.writeln("<h3>Done</h3>");

// ********** ASSIGNMENT # 31 - 34  Completed!! **********
// ----------------------------------------------------------
//////////////////////////////////
document.writeln(
  `<br> /////////////////////////////completed assignment 31 - 34///////////////////////////////////////////`,
);

// ********** ASSIGNMENT # 35 - 38 **********
// ******* QUESTION-1 ************
document.writeln("<h2>Question-1</h2>");
function _time() {
  let latestDate = new Date();
  document.writeln(latestDate);
}
_time();
document.writeln("<h3>Done</h3>");
// ******* QUESTION-2 ************
document.writeln("<h2>Question-2</h2>");
// function greet(message, userName, firstname, lastname) {
//   if (!userName) {
//     firstname = prompt("Enter your first name");
//     lastname = prompt("Enter your last name");
//     userName = firstname + " " + lastname;
//   }
//   console.log(message + " " + userName);
// }
// greet("Welcome!!");

document.writeln("<h3>Done</h3>");
// ******* QUESTION-3 ************
document.writeln("<h2>Question-3</h2>");
// function add (num1,num2){
//   return (num1 + num2)
// }
// let number1 = +prompt("Enter the number 1")
// let number2 = +prompt("Enter the number 2")
// let result = add(number1 , number2)
// console.log(result);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-4 ************
document.writeln("<h2>Question-4  </h2>");
document.writeln("<h3>Calculator:</h3>");
// function calculator(num1, num2, operator) {
//   operator = prompt(`Enter the operator which are given below:
// + → addition
// - → subtraction
// * → multiplication
// / → division `);
//   num1 = +prompt("Enter the first number ");
//   num2 = +prompt("Enter the second number ");
//   if (operator == "+") {
//     console.log(num1 + num2);
//   } else if (operator == "-") {
//     console.log(num1 - num2);
//   } else if (operator == "*") {
//     console.log(num1 * num2);
//   } else if (operator == "/") {
//     console.log(num1 / num2);
//   } else {
//     console.log("the function was'nt work!!");
//   }
// }
// calculator();
document.writeln("<h3>Done</h3>");
// ******* QUESTION-5 ************
document.writeln("<h2>Question-5</h2>");
// function multiplication(num1, num2) {
//   return num1 * num2;
// }
// let result = multiplication(2,3);
// console.log(result);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-6 ************
document.writeln("<h2>Question-6</h2>");
function factorial(num) {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result = result * i;
  }
  return result;
}
console.log(factorial(9));

document.writeln("<h3>Done</h3>");
// ******* QUESTION-7 ************
document.writeln("<h2>Question-7</h2>");
// function counting(num1, num2) {
//   num1 = +prompt("Enter the start number of counting!");
//   num2 = +prompt("Enter the end number of the counting!");
//   for (let i = num1; i <= num2; i++) {
//     console.log(i);
//   }
// }
// counting();
document.writeln("<h3>Done</h3>");
// ******* QUESTION-8 ************
document.writeln("<h2>Question-8</h2>");
// function hypotenuse(base, perpendicular) {
//   base = +prompt(
//     "Enter the number which would be the base of right angle triangle",
//   );
//   perpendicular = +prompt(
//     "Enter the number which would be the perpendicular of right angle triangle",
//   );

//   function triangle(square, root) {
//     square = base ** 2 + perpendicular ** 2;
//     root = Math.floor(Math.sqrt(square));
//     console.log(root);
//   }
//   triangle();
// }
// hypotenuse();
document.writeln("<h3>Done</h3>");
// ******* QUESTION-9 ************
document.writeln("<h2>Question-9</h2>");
function areaoftriangle(width, height) {
  return width * height;
}
let w = 5;
let h = 2;
let square = areaoftriangle(w, h);
console.log(square);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-10 ************
document.writeln("<h2>Question-10</h2>");
// function palindrome(name) {
//   name = prompt(
//     "Enter a palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam. ",
//   );
//   if (name == name.split("").reverse().join("")) {
//     console.log("This word is Palindrome!");
//   } else {
//     console.log("It wasn't palindrome!");
//   }
// }palindrome()
document.writeln("<h3>Done</h3>");
// ******* QUESTION-11 ************
document.writeln("<h2>Question-11</h2>");
// function uppercase(str) {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(" ");
// }
// let myString = "the quick brown fox";
// let output = uppercase(myString)
// console.log(output);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-12 ************
document.writeln("<h2>Question-12</h2>");

// let string = "Web Development Tutorial";

// function find_longest_word(str) {

//   let words = str.split(" ");
//   let longestword = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longestword.length) {
//       longestword = words[i];
//     }
//   }
//   return longestword;
// }
// let result = find_longest_word(string)
// console.log(result);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-13 ************
document.writeln("<h2>Question-13</h2>");
function countletter(str, letter) {
  let word = [0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      word++;
    }
  }
  return word;
}
let result = countletter("JSResources.com", "o");
console.log(result);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-14 ************
document.writeln("<h2>Question-14</h2>");
document.writeln("<h3>The Geometrizer</h3>");
function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  document.writeln("The Circumference is " + circumference + "<br>");
}
function calcArea(radius) {
  let area = Math.PI * radius * radius;
  document.writeln("The area is " + area);
}
calcCircumference(5);
calcArea(5);
document.writeln("<h3>Done</h3>");

// ********** ASSIGNMENT # 35 - 38 Completed!! **********
// ----------------------------------------------------------
//////////////////////////////////
document.writeln(
  `<br> /////////////////////////////completed assignment 35 - 38///////////////////////////////////////////`,
);

// ********** ASSIGNMENT # 39 - 42 **********
// ******* QUESTION-1 ************
document.writeln("<h2>Question-1</h2>");
function power(a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result = result * a;
  }
  return result;
}
console.log(power(2, 3));

document.writeln("<h3>Done</h3>");

// ******* QUESTION-2 ************
document.writeln("<h2>Question-2</h2>");

// function Leapyear(year){
//   year = prompt("Enter the year?")
//   if (year % 4 === 0){
// alert("leap year");

// }else{
//  alert("Not a leap year!!");
// }
// }
// Leapyear()
document.writeln("<h3>Done</h3>");
// ******* QUESTION-3 ************
document.writeln("<h2>Question-3</h2>");
function triangle(a, b, c) {
  let side = (a + b + c) / 2;
  console.log(side);
  function areaoftriangle() {
    let area = side * (side - a) * (side - b) * (side - c);
    console.log(area);
  }
  areaoftriangle();
}
triangle(3, 2, 2);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-4 ************
document.writeln("<h2>Question-4  </h2>");
// function mainfunction() {
//   let sub1 = +prompt("Enter the marks obtained in subject 1: ");
//   let sub2 = +prompt("Enter the marks obtained in subject 2: ");
//   let sub3 = +prompt("Enter the marks obtained in subject 3: ");
//   let totalMarks = 300;
//   function average() {
//     let sub_avg = (sub1 + sub2 + sub3) / 3;
//     return sub_avg;
//   }
//   function percentage(sub_avg) {
//   let sub_percentage = (sub_avg / totalMarks) * 100;
//   return sub_percentage;
//   }
//   let avgmarks = average();
//   let percentmarks = percentage(avgmarks);
//   console.log("The average marks of student is: " + avgmarks);
//   console.log("The percentage of given marks is: " + percentmarks + "%");
// }
// mainfunction();
document.writeln("<h3>Done</h3>");
// ******* QUESTION-5 ************
document.writeln("<h2>Question-5</h2>");
// function Indexof(str, chr) {
//   str = prompt("Enter the word!!");
//   chr = prompt("Enter the character which would be present in the string...");
//   for (let i = 0; i < str.length; i++) {
//     index = word[i];
//     if (str[i] === chr) {
//       console.log("Character found at index: " + i);
//       return;
//     }
//   }

//   console.log("-1");
// }
// Indexof();
document.writeln("<h3>Done</h3>");
// ******* QUESTION-6 ************
document.writeln("<h2>Question-6</h2>");
// function removeVowels(str) {
//   str = prompt("Enter the sentence!!");
//   let result = str.replace(/[aeiou]/gi, "");
//   console.log(result);
// }
// removeVowels();

document.writeln("<h3>Done</h3>");
// ******* QUESTION-7 ************
document.writeln("<h2>Question-7</h2>");
// function pairsvowel(text) {
//   text = prompt("Enter a line of text");
//   let count = 0;
//   for (let i = 0; i < text.length - 1; i++) {
//     let isfirst = text[i].toLowerCase()
//     let issecond = text[i + 1].toLowerCase()
//     let firstchar = false;
//     let secondchar = false;
//     switch (isfirst) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         firstchar = true;
//         break;
//     }
//     switch (issecond) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         secondchar = true;
//         break;
//     }
//       if (firstchar && secondchar) {
//     count++;
//     console.log("Found vowel pair:", text[i] + text[i + 1]);
//   }
//   }
// }
// pairsvowel()
document.writeln("<h3>Done</h3>");
// ******* QUESTION-8 ************
document.writeln("<h2>Question-8</h2>");

// let input_km = +prompt("Enter the distance between two cities in km: ")
// function distance_meter(meter) {

// meter = input_km * 1000
// console.log("The distance between two cities in meter is : " + meter);
// }distance_meter()

// function distance_feet(feet){
// feet = input_km * 3280.84
// console.log("The distance between two cities in feet is : " + feet);
// }distance_feet()

// function distance_inches(inches){
// inches = input_km * 39370.1
// console.log("The distance between two cities in inches is : " + inches);
// }distance_inches()

// function distance_cm(centimeters){
// centimeters = input_km * 1000
// console.log("The distance between two cities in centimeters is : " + centimeters);
// }distance_cm()

document.writeln("<h3>Done</h3>");
// ******* QUESTION-9 ************
document.writeln("<h2>Question-9</h2>");

// let hours = +prompt("How much Hours do ypu work??")
// let overtime = 0
// if (hours > 40){
//   overtime = (hours - 40) * 12
// }else{
//   overtime = 0
// }
// document.writeln("overtime pay = Rs. " + overtime);

document.writeln("<h3>Done</h3>");
// ******* QUESTION-10 ************
document.writeln("<h2>Question-10</h2>");

// let amount = +prompt("Enter amount in hundreds");
// amount * 100;

// let hundred = Math.floor(amount / 100);
// let rem = amount % 100;

// let fifty = Math.floor(rem / 50);
// rem = rem % 50;

// let ten = Math.floor(rem / 10);

// console.log("100 notes:", hundred);
// console.log("50 notes:", fifty);
// console.log("10 notes:", ten);
document.writeln("<h3>Done</h3>");

// ********** ASSIGNMENT # 39 - 42 Completed!! **********
// ----------------------------------------------------------
//////////////////////////////////
document.writeln(
  `<br> /////////////////////////////completed assignment 39 - 42///////////////////////////////////////////`,
);
