let x = 75


// 0-33 fail
// 34-45 Third
// 46-59 Second
// 60-100 First


// if(x < 90) {
//     console.log('Fail');
// }


// If  Else Conditon
/*
x = 100
if(x >= 60 && x <= 100) {
    console.log('First');
} else if (x >=46 && x <= 59){
    console.log('Second');
} else if (x >=34 && x <= 45){
    console.log('Third');
} else{
    console.log('Fail');
}



let y = 7

switch (y) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Mon');
        break;
    case 3:
        console.log('Tue');
        break;
    case 4:
        console.log('Wed');
        break;
    case 5:
        console.log('Thu');
        break;
    case 6:
        console.log('Fri');
        break;
    case 7:
        console.log('Sat');
        break;

    default:
        console.log('Invelid Day');
        break;
}
*/

// Example
// 1. Even / Odd
let a = 5
let b = 5
z = a % b

if (z == 0 ) {
    console.log('Even');
} else {
    console.log('Odd');
}

// 2. Positive / Negative

let num = -1

if (num > 0) {
    console.log('Number Is Positive');
} else if (num < 0) {
    console.log('Number Is Negative');
} else{
    console.log('zero');
}

// 3. Voting Eligibility

let age = 17
if (age >= 18){
    console.log('You can vote');
} else (
    console.log('You cannot vote')
)


// 4 Day
// let time = 18
let hour = new Date().getHours()
console.log(hour);

if (hour < 18) {
    console.log('Good Day !');
} else {
    console.log('Good Evening !');
    
}


