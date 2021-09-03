// Returns a random DNA base
/*const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }*/
/*
const kelvin = 293;
// covert to celcius
var celcius = kelvin - 273;
// convert to farenheit
var farenheit = math.floor[celcius * (9 / 5) + 32]

console.log("the temperature is" + farenheit + "degree farenheit");

console.log("Hello");
//return newStrand0
//}
*/
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [8, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [7, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//loop through the batch array4

for (let i = 0; i < batch.length; i++) {
    console.log(batch[i]);
}
inValidCards(batch);

function inValidCards(batch) {

    let invalid = [];
    for (let i = 0, j = 0; i < batch.length; i += 1) {
        var validate = validateCred(batch[i]);


        if (validate == true)
            console.log(i + " valid");

        else {
            console.log("length of batch[i) " + batch[i].length);
            // invalid[j] = new Array();
            console.log(i + " invalid");
            invalid.push(batch[i]);
            j++;
            console.log("invlid cards so far: " + invalid);
        }

        //   console.log(i, "i am " + batch[i].length, ": value at i: " + batch[i]);
        // console.log("function works " + validate + " " + batch[i]);
    }
    console.log("length of invalid array " + invalid.length + '\n');
    for (let i = 0; i < invalid.length; i++) {
        console.log("array of invalid cards " + invalid[i]);
    }

    findInvalidCards_Company(invalid);
}

function findInvalidCards_Company(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    let temp = new Set();
    for (let i = 0; i < arr.length; i++) {

        //  for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][0] == 3) {
            console.log("element at 1st index: " + arr[i][0]);
            temp.add("Amex");
        } else if (arr[i][0] == 4) {
            console.log("element at 1st index: " + arr[i][0]);
            temp.add("Visa");
        } else if (arr[i][0] == 5) {
            console.log("element at 1st index: " + arr[i][0]);
            temp.add("Master Card");
        } else if (arr[i][0] == 6) {

            console.log("element at 1st index: " + arr[i][0]);
            temp.add("Discover");

        } else {

            console.log("element at 1st index: " + arr[i][0]);
            temp.add("Company not found");
        }
        // }
        /*  if (arr[i][0] == 3) {
            console.log("element at 1st index: " + arr[i][0]);
            temp.push("Amex");
        } else if (arr[i][0] == 4) {
            console.log("element at 1st index: " + arr[i][0]);
            temp.push("Visa");
        } else if (arr[i][0] == 5) {
            console.log("element at 1st index: " + arr[i][0]);
            temp.push("Master Card");
        } else if (arr[i][0] == 6) {

            console.log("element at 1st index: " + arr[i][0]);
            temp.push("Discover");

        } else {

            console.log("element at 1st index: " + arr[i][0]);
            temp.push("Company not found");
        }
    */
    }
    let getCompanies = temp[Symbol.iterator]();
    /* for (let i = 0; i < getCompanies.size; i++) {
         console.log("company " + getCompanies.next(i));
     }*/
    temp.forEach((value, set) => console.log(value)); //can asl o be written as (value,value2, set)

    //    console.log("unique set: " + temp);
}

function validateCred(arr) {
    //  console.log("validate credit " + arr);
    var validity =
        luhns_Algorithm(arr);
    //    console.log(validity);
    return validity;
}

function findInvalidCards() {

}

function double_the_digit(digit) {
    var temp = digit * 2;
    if (temp > 9)
        return temp - 9;

    else
        return temp;
}

function sum_digits(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    return sum;
}

function luhns_Algorithm(arr) {
    let temp_arr = [];

    console.log(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        temp_arr.push(arr[i]);


        if (i - 1 >= 0) {
            var temp = double_the_digit(arr[i - 1]);
            temp_arr.push(temp);
            --i;
            console.log("in luhns function " + temp_arr);
        }

    }
    var res = sum_digits(temp_arr);
    console.log("sum result: " + res);
    if ((res % 10) == 0)
        return true;
    else
        return false;
}