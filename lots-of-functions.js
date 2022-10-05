/* Write a function called `sayHi` that takes in a name string and adds "Hi, " before the name.  Return the newly modified string.
*/

function sayHi(param){
    let hi = "Hi, ";
    let sentence = hi + param;
    return sentence;
};

console.log(sayHi("Nancy"));

/* bigString
Write a function called bigString that takes in 2 strings and returns which one is bigger. If the strings are equal in size, return a string that indicates this to the user.
*/

function bigString(param1, param2) {
    if (param1.length > param2.length){
        return param1
    } else if (param2.length > param1.length){
        return param2
    } else {
        return "Both strings are equal."
    };
};
console.log(bigString("coffee", "stop"));

/*b igNumber
Write a function called bigNumber that takes in 2 numbers and returns which one is greater. If the numbers are equal return a string that indicates the two numbers are equal.
*/

function bigNumber(num1, num2){
    if (num1 > num2){
        return num1
    } else if (num2 > num1){
        return num2
    } else {
        return "The numbers are the same."
    }
} console.log(bigNumber(12, 12));

/*fiveMore
Write a function called fiveMore that takes in an array of numbers and adds 5 to each odd number then returns the updated array. */

function fiveMore(param){
    let i = 0;
    while(i < param.length){
        if (param[i] % 2 !== 0){  
           param[i] += 5;
        }
        i++;
    }
    return param;
}

console.log(fiveMore([3, 2, 11, 6, 5, 13]));

/* arraySummer
Write a function called arraySummer that takes in an array of numbers and adds each number in the array together. Return the total.
*/

function arraySummer(numList){
    let i = 0;
    let sum = 0;
    while(i < numList.length){
        sum += numList[i];
        i++;
    }
    return sum;
}
console.log(arraySummer([2, 11, 15]));

/* everyDivisible
Write a function called everyDivisible that takes in a number n then prints every number less than or equal to 100 that is divisible that number n.

For example, if n = 7

Your function would print:  
7
14
21
28
35
42
49
56
63
70
77
84
91
98*/

function everyDivisible(n){
    let i = 0;
    while(i < 100){
        i += n;
        console.log(i);
    }
}
everyDivisible(5);