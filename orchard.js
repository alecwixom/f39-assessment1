///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// In this for loop I decided to make the totalAcres = the math from adding the other acres up giving the total value over to totalAcres.

let totalAcres = 0

for (i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log(totalAcres);



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// In this code, I decided to make the averageDailyAcres = the total divided by the fuji's length. The reason being if the fuji length gets longer it will still give the correct average.

let averageDailyAcres = totalAcres / fujiAcres.length
console.log(averageDailyAcres);




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

/* In the while loop, it will continue to run as long as the value of acresLeft is above 0.
The value of days increases by 1 every time the loop goes through and the value of acresLeft goes down by the average (9 i believe)
*/

while (acresLeft > 0){
    days++
    acresLeft -= averageDailyAcres
}
console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// This for loop basically takes the type of apples in tons and gives it the value of that type's acres * acreTon. This gives you the apples ton value.

let fujiTons = []
let galaTons = []
let pinkTons = []

let acreTon = 6.5

for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons.push(fujiAcres[i] * acreTon)
  galaTons.push(galaAcres[i] * acreTon)
  pinkTons.push(pinkAcres[i] * acreTon)
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

/*
The for loop runs depending on the length of fuji' acres array so that it constantly updates with new value's.
The apple type's lps value is calculated on the tons * lbs giving appletypePounds that value.
*/

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0
let acreLbs = 2000

for (i = 0; i < fujiAcres.length; i++){
    fujiPounds = fujiTons[i] * acreLbs
    galaPounds = galaTons[i] * acreLbs
    pinkPounds = pinkTons[i] * acreLbs
}
console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

/*
There are three for loops that run based on the legth of the lbs list, then calculating the appletypePounds * applePrice to give the appleProfit.
I could have made this simpler but this is the only way it made sense in my head.
*/


let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log('-----------');
console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

/*
Now for this one, I got stuck for a long time.
Eventually looked up a method using .reduce which combines the values set in array together and then add those three together to give a total profit.
The acc is for the accumulator and the cc is the current value, in otherwords the acc and cur are going to add up all the arrays,
then add the other arrays together to get a totalProfit value.
*/

console.log('----------------------------------');

let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(totalProfit);