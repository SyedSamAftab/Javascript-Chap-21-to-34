//                  Chapter# 21 to 25

// Q# 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// document.write(firstName, " " ,lastName);

// Q# 2
// var phone = prompt("Enter your favourite mobile phone");
// document.write("My favourite phone is: " + phone + "<br>");
// var txt = phone.length;
// document.write("Length of string is: " + txt);

// Q# 3
// var country = "Pakistani";
// document.write("String: " + country + "<br>" + "Index of 'n': " + country.indexOf("n"));

// Q# 4
// var country = "Hello world";
// document.write("String: " + country + "<br>" + "Index of 'l': " + country.lastIndexOf("l"));

// Q# 5
// var country = "Pakistani";
// document.write("String: " + country + "<br>" + "Character at index 3: " + country.charAt(3));

// Q# 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// document.write(firstName.concat(lastName));

// Q# 7
// var city = "Hyderabad";
// var city1 = city.replace("Hyderabad","Islamabad");
// document.write("City:" + city + "<br>" + " After repalcement: " + city1);

// Q# 8
// var message = "Sam and Faizan are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g,"&");
// document.write("Message: " + message + "<br>" + "After repalcement: " + message1);

// Q# 9
// var str = "472";
// var stra = Number(str);
// document.write("Value: " + str + "<br>" + "Type: String <br>" + "Value: " + stra + "<br>" + "Type: Number");

// Q# 10
// var userInput = prompt("Enter your fav biscuits");
// var User = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>" + "Upper case: " + User);

// Q# 11
// var str = prompt("Enter your fav Scripting lang");
// var firstLetter = str[0].toUpperCase()
// var otherLetters = str.slice(1).toLowerCase()
// var capitalize = firstLetter + otherLetters
// document.write("User input: " + str + "<br>" + "Title case: " + capitalize);

// Q# 12
// var num = 35.67;
// var fixed = num.toFixed();
// var str = fixed.toString()
// document.write("Number: " + num + "<br>" + "Result: " + str);

// Q# 13


// Q# 14
// var array = ["cake","apple pie","cookie","chips","patties"];
// var userInput = prompt("Welcome to GM bakery. What you want to order sir/mam").toLowerCase();
// var flag = "yes";
// for(var i = 0; i < array.length; i++){
//     if(userInput === array[i]){
//         flag = "no";
//         document.write(userInput + " is available at index " + array.indexOf(userInput) + " in our bakery");
//     }
// }
// if(flag === "yes"){
//     document.write("We are soory. " + userInput + " is not available in our bakery");
// }

// Q# 15


// Q# 16
// var university = "University of Karachi";
// for(var i = 0; i < university.length; i++){
//     document.write(university[i] + "<br>")
// }

// Q# 17
// var userInput = "Pakistan"
// document.write("User input: " + userInput + "<br>" + "Last character of input: " + userInput.charAt(7));

// Q# 18
// var text = "“The quick brown fox jumps over the lazy dog";
// text.replace(/the/g);
// console.log(text);



//                  Chapter# 26 to 30

// Q# 1
// var number = 3.45214;
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number: " + number + "<br>" + "round of value: " + round + "<br>" + "floor value: " + floor + "<br>" + "ceil value: " + ceil);

// Q# 2
// var number = -2.673;
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number: " + number + "<br>" + "round of value: " + round + "<br>" + "floor value: " + floor + "<br>" + "ceil value: " + ceil);

// Q# 3
// var num = -4;
// var abs = Math.abs(num)
// document.write("The absolute value of " + num + " is " + abs);

// Q# 4
// var random = Math.ceil(Math.random() * 6);
// document.write("random dice value: " + random);

// Q# 5
// var head = Math.ceil(Math.random() * 2);
// if (head === 1){
//     document.write(head + "<br>" + " random coin value: Heads")
// }
// else if (head === 2){
//     document.write(head + "<br>" + " random coin value: Tails")
// }

// Q# 6
// var random = Math.ceil(Math.random() * 100);
// document.write("random number between 1 and 100: " + random);

// Q# 7
// var userInput = prompt("Enter your weight");
// var rando = Math.random() * userInput;
// var fixed = rando.toFixed(1);
// document.write("The weight of user is " + fixed + " Kilograms");

// Q# 8
// var rando = Math.ceil(Math.random() * 10); 
// var userInput = +prompt("Enter a number between 1 and 10");
// if (userInput === rando){
//     alert("Congratulation the number Matched");
// }
// else {
//     alert("Try again");
// }



//                  Chapter# 31 to 34

// Q# 1
// var now = new Date();
// document.write(now);

// Q# 2
// var array = ["January","Feburuary","March","April","May","June","July","August","September","October","November","December"];
// var now = new Date();
// var date = now.getMonth();
// document.write("Current month: " + array[date]);

// Q# 3
// var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var now = new Date();
// var day = now.getDay();
// document.write("Today is: " + arr[day]);

// Q# 4
// var arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var now = new Date();
// var day = now.getDay();
// if(arr[day] === "Saturday"){
//     document.write("It's Fun Day");
// }
// else if(arr[day] === "Sunday"){
//     document.write("It's Fun Day");
// }
// else if(arr[day] === "Monday"){
//     document.write("Today is: " + arr[day]);
// }
// else if(arr[day] === "Tuesday"){
//     document.write("Today is: " + arr[day]);
// }
// else if(arr[day] === "Wednesday"){
//     document.write("Today is: " + arr[day]);
// } 
// else if(arr[day] === "Thursday"){
//     document.write("Today is: " + arr[day]);
// }
// else if(arr[day] === "Friday"){
//     document.write("Today is: " + arr[day]);
// }else{
//     document.write("Nothing");
// }

//                  OR

// var now = new Date().toString();
// var day = now.slice(0,3);
// day = "Saturday,Sunday";
// if(day === "Saturday,Sunday"){
//     document.write("It's Fun Day");
// }
// else if(day === "Monday"){
//     document.write("Today is: " + day);
// }
// else if(day === "Tuesday"){
//     document.write("Today is: " + day);
// }
// else if(day === "Wednesday"){
//     document.write("Today is: " + day);
// } 
// else if(day === "Thursday"){
//     document.write("Today is: " + day);
// }
// else if(day === "Friday"){
//     document.write("Today is: " + day);
// }else{
//     document.write("Nothing");
// }

// Q# 5
// var now = new Date();
// var date = now.getDate();
// if (date >= 1 && date <= 15){
//     document.write("First Fifteen days of Month");
// }
// else if (date > 15 && date <= 31){
//     document.write("Last days of the month");
// }

// Q# 6
// var now = new Date();
// var mili = now.getTime();
// var minute = mili / (1000 * 60 * 60);
// document.write("Current Date: " + now + "<br>" + "Elapsed millisecond since January 1, 1970: " + mili + "<br>" + "Elapsed minutes since January 1, 1970: " + minute);

// Q# 7
// var now = new Date();
// var hour = now.toLocaleTimeString().toString();
// var extract = hour.slice(7);
// document.write("It's " + extract);

// Q# 8
// var now = new Date("Dec 31 2020");
// document.write("Lather date: " + now);

// Q# 9
// var now = new Date().getTime();
// var ramdan = new Date("Mar 22 2023").getTime();
// var diff = ramdan - now;
// var floor = diff / (1000 * 60 * 60 * 24);
// var round = Math.round(floor);
// document.write(round + " days have passsed since Ist Ramdan, 2023");

// Q# 10
// var now = new Date();
// var pass = new Date("Jan 1 2022");
// var mili = now.getTime();
// var millisec = pass.getTime();
// var diff = mili - millisec;
// var floor = Math.round(diff / (1000));
// document.write("On reference date: " + now + "<br>" + floor + " seconds had passed since begining of 2022");

// Q# 11
// var now = new Date("Jan 01, 2015 23:08:16");
// var date = new Date("Jan 01, 2015 23:08:16");
// var beforeHr = new Date("Jan 01, 2015 22:08:16").getTime();
// date.setTime(beforeHr);
// document.write("current date: " + now + "<br>" + "1 hour ago, it was " + date);  

// Q# 12
// var now = new Date("Jan 01, 2015 23:08:16");
// var date = new Date("Jan 01, 2015 23:08:16");
// var beforeHr = new Date("Jan 01, 1915 23:08:16").getTime();
// date.setTime(beforeHr);
// document.write("current date: " + now + "<br>" + "100 year back, it was " + date);  

// Q# 13
// var user = new Date(prompt("Enter your birth year, Jan 1 2015").toLowerCase());
// var time = user.getTime();
// var now = new Date().getTime();
// var diff = now - time;
// var round = Math.round(diff / (1000 * 60 * 60 * 24 * 365));
// document.write("Your age is " + round + "<br>" + "Your birth year is " + user.getFullYear());

// Q# 14
// var user = prompt("Enter your name");
// var month = prompt("Enter your month");
// var unit = +prompt("Number of units");
// var charge = +prompt("Charge per unit");
// var late = 350;
// var net = unit * charge;
// var gross = net + late;
// document.write("<h1> K-Electric Bill </h1>");
// document.write("Customer Name: " + user + "<br>" + "Month: " + month + "<br> Number of units: " + unit + "<br> Charges per units: " + charge + "<br> <br>");
// document.write("Net Amount Payable (Within Due Date): " + net + "<br> Late payament surcharge: " + late + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + gross);






