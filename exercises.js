// Function -  FirstFactorial(num)
// The function will take the num parameter being passed and return the factorial of it (ie. if num =3, return(3 * 2 * 1)).  For test cases, the range will be between 1 and 18.

let num = Math.floor(Math.random() * 18) + 1;

function FirstFactorial(num){
    var result = num;
    for (let i=1; i<num; i++) {
        result = result * i;
    }
    console.log('Number: ' + num);
    console.log('Factorial: ' + result);
}

FirstFactorial(num);


// Function - SimpleAdding(num)
// The function will take the num parameter and add up all the numbers from 1 to num.  For test cases, the parameter num will be any number from 1 to 1000.

num = Math.floor(Math.random() * 1000) + 1;

function SimpleAdding(num){
    var result = num;
    for (let i=1; i<num; i++){
        result = result + i;
    }
    console.log('Number: ' + num);
    console.log('Sum of all numbers 1 to Num: ' + result);    
}

SimpleAdding(num);

// Function - LetterCapitalize(str)
// The function will take the str parameter being passed and capitalize the first letter of each word.  Words will be separated by only one space.

function LetterCapitalize(str){
    let strSplit = str.split(' ');
    for (var i=0; i<strSplit.length; i++){
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
      }
    return strSplit.join(' ');
}

let capitalizeThis = LetterCapitalize('today is the first day of class.');

console.log(capitalizeThis);

// Function rangeRover(arr)
// The function will take an array of two numbers and return the sum of those two numbers AND all numbers between them.  The lowest number will not always come first.  For example rangeRover([1, 4]) should return 10, i.e.(1 + 2 + 3 + 4), rangeRover([4, 1]) should also return 10.

function rangeRover(arr){
    function sortNumber(a,b) {
        return a - b;
    }

    let sortArr = arr.sort(sortNumber);
    console.log(sortArr);
    let sumRange = sortArr[0];
    let lowerNum = sortArr[0];
    let higherNum = sortArr[1];
    
    for(var i=higherNum; i>lowerNum; i--){
        sumRange = sumRange + i;
    }
    console.log('Sum of Range: ' + sumRange);
}

rangeRover([-2, 1]);


// Function missingLetter(str)
// The function will find the missing letter passed in the parameter and return it.  If all letters are present in the string, the return will be undefined.  For example missingLetter("abce") should return "d", missingLetter("bcd") should return undefined.

function missingLetter(str){
    strToLower = str.toLowerCase();

    for (var i=0; i<strToLower.length; i++){
        var code = strToLower.charCodeAt(i);
        if (code !== strToLower.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}

console.log(missingLetter('aBcdEgh'));

// Function hailCaesar(num)
// The function will take the num parameter and convert the given number into a roman numeral.  For example hailCaesar(2) should return "II", hailCaesar(5) should return "V".

function hailCaesar(num){
    console.log('Original number: ' + num);
    let romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let roman = '';
    for (var i in romans){
        while(num >= romans[i]){
            roman += i;
            num -= romans[i];
        }
    }
    console.log('Roman numeral: ' + roman);
};

let randNum = (Math.floor(Math.random() * 1000) + 1);

hailCaesar(randNum);

// Function spinalTap(str)
// The function will convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.  For example spinalTap("I own this Taco Stand!") should return "i-own-this-taco-stand!".

function spinalTap(str){
    let splitStr = str.split(' ');
    for (var i=0; i<splitStr.length; i++){
        splitStr[i] = splitStr[i].toLowerCase();
    }
    let newStr =  splitStr.join('-');
    console.log(newStr);
}

spinalTap('I BeLiEvE I cAn Fly!');

// Function sumFibs(num)
// The function will return the sum of all ODD Fibonacci numbers up to and including the passed number if it's a Fibonacci number.  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, where the next number is found by adding up the two numbers before it.  For example subFibs(4) should return 5, sumbFibs(1000) should return 1785.


//using while loop
function sumFibs2(num){
    var num1 = 0;
    var num2 = 1;
    var num3 = num1 + num2;
    var fibArr = [0, 1];

    while (num3 <= num){
        var fibAdd = num3;
        fibArr.push(fibAdd);
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;

    }

    console.log(fibArr);
    let sumOdd = 0;

    for (var i in fibArr){
        if(fibArr[i]%2 === 1){
            sumOdd = sumOdd + fibArr[i];
        }
        
    }
    console.log('The sum of all odd Fib bumbers up to ' + randFib + ' is ' + sumOdd + '.');
}

let randFib = (Math.floor(Math.random() * 100) + 1);

sumFibs2(randFib);

