/**
1. Write a function that simply repeats the string a given number of times:
repeatString('hey', 3) // returns 'heyheyhey'
**/
function repeatString(str = '', num) {
  if (Number.isInteger(num) && num >= 0 && typeof str == 'string') {
    let repeatString = str.repeat(num);
    console.log(`Chuỗi '${str}' lặp lại ${num} lần: '${repeatString}'`);
  } else {
    console.log('Tham số không thoả mãn');
  }
}

repeatString('abc', 3);

/**
2. Pretty simple, write a function called reverseString that returns its input,
reversed!
reverseString('hello there') // returns 'ereht olleh'
**/
function reverseString(str) {
  let reverseString = str.split('').reverse().join('');
  console.log(`Chuỗi đảo của chuỗi '${str}' là: '${reverseString}'`);
}

reverseString('Le Hoai Nam');

/**
2. Create a function that determines whether or not a given year is a leap year.
Leap years are determined by the following rules:
Leap years are years divisible by four (like 1984 and 2004). However, years
divisible by 100 are not leap years (such as 1800 and 1900) unless they are
divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all
pretty confusing)

leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
**/
function leapYears(num) {
  let reverseString = str.split('').reverse().join('');
  console.log(`Chuỗi đảo của chuỗi '${str}' là: '${reverseString}'`);
}

reverseString('Le Hoai Nam');

/**
3. Create a function that determines whether or not a given year is a leap year.
Leap years are determined by the following rules:
Leap years are years divisible by four (like 1984 and 2004). However, years
divisible by 100 are not leap years (such as 1800 and 1900) unless they are
divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all
pretty confusing)

leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
**/
function leapYears(year) {
  let isLeapYear = false;
  if (year % 100 === 0) {
    if (year % 400 === 0) isLeapYear = true;
  } else {
    if (year % 4 === 0) isLeapYear = true;
  }

  console.log(`Năm ${year} ${isLeapYear ? 'là năm nhuận' : 'không phải năm nhuận'}`);
}

leapYears(1800);

/**
4. Implement a function that takes 2 integers and returns the sum of every number
between(and including) them:
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
**/
const sumAll = function (a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }

  console.log(`Tổng các số từ ${min} đến ${max} là: ${sum}`);
};

sumAll(10, 9);

/**
5. Write two functions that convert temperatures from Fahrenheit to Celsius, and
vice versa:
ftoc(32) // fahrenheit to celsius, should return 0
ctof(0) // celsius to fahrenheit, should return 32
Because we are human, we want the result temperature to be rounded to one
decimal place: i.e., ftoc(100) should return 37.8 and not 37.77777777777778.
This exercise asks you to create more than one function so the module.exports
section of the spec file looks a little different this time. Nothing to worry about,
we're just packaging both functions into a single object to be exported.
**/
function ctof(c) {
  let cTemp = c;
  let cToFahr = (cTemp * 9) / 5 + 32;
  let message = cTemp + '\xB0C là ' + cToFahr.toFixed(1) + ' \xB0F.';
  console.log(message);
}

function ftoc(f) {
  let fTemp = f;
  let fToCel = ((fTemp - 32) * 5) / 9;
  let message = fTemp + '\xB0F là ' + fToCel.toFixed(1) + '\xB0C.';
  console.log(message);
}
ctof(70, 8);
ftoc(45, 5);

/**
6. Write a function that determines whether or not a given string is a palindrome.
A palindrome is a string that is spelled the same both forwards and backwards,
usually without considering punctuation or word breaks:
some palindromes:
● A car, a man, a maraca.
● Rats live on no evil star.
● Lid off a daffodil.
● Animal loots foliated detail of stool lamina.
● A nut for a jar of tuna.
palindromes('racecar') // true
palindromes('tacos') // false
**/
function palindrome(str) {
  let re = /[\W_]/g; //Regex Loại bỏ các kí tự không phải chữ và số
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); // Đảo ngược chuỗi và so sánh với chuỗi chưa đảo
  let isPalindrome = reverseStr === lowRegStr;
  console.log(`Chuỗi '${str}' ${isPalindrome ? 'là' : 'không phải là'} palindrome`);
}

palindrome('A man, a plan, a canal. Panama');

/**
7. Implement the legendary Caesar cipher:
In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher,
Caesar's code or Caesar shift, is one of the simplest and most widely known
encryption techniques. It is a type of substitution cipher in which each letter in the
plaintext is replaced by a letter some fixed number of positions down the
alphabet. For example, with a left shift of 3, D would be replaced by A, E would
become B, and so on. The method is named after Julius Caesar, who used it in
his private correspondence.
Hint: You may need to convert letters to their unicode values. Be sure to read the
documentation!
**/
function caesar(str, num) {
  const arr = [];
  const re = /[a-zA-Z]/;
  for (const c of str) {
    if (re.test(c)) {
      const start = c === c.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      const diff = c.charCodeAt(0) - start;
      const sh = num >= 0 ? diff + num : diff + Math.abs(26 - Math.abs(num));
      const code = (sh % 26) + start;
      arr.push(String.fromCharCode(code));
    } else {
      arr.push(c);
    }
  }
  let caesarStr = arr.join('');
  console.log(`Mã ceasar của '${str}' là '${caesarStr}'`);
}

caesar('A', 1); // simply shifts the letter by 1: returns 'B'
caesar('Hey', 5); // returns 'Mjd'
caesar('Hello, World!', 5); //returns 'Mjqqt, Btwqi!'
caesar('Z', 1); // returns 'A'
caesar('Mjqqt, Btwqi!', -5); // returns 'Hello, World!'
