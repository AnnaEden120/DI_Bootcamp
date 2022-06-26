//Exercise1

let favFood= "sushi";
let favDinner= "lunch";
let favorite= "I eat"+favFood+"at every"+favDinner;
console.log(favorite);

//or
let fav2="I eat"${favFood} "at every" ${favDinner};
console.log(fav2);

//Exercise2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeriesLength);
console.log(myWatchedSeriesLength[myWatchedSeriesLength-1]);
let sentence="I watched"$myWatchedSeriesLength "series": $myWatchedSeries
console.log(myWatchedSeries);

//Exercise2 part 2
myWatchedSeries.splice(2, "friends")
console.log(myWatchedSeries);

myWatchedSeries.push("the office");
console.log(myWatchedSeries);

myWatchedSeries.unshift("Gilmore Girls");
console.log(myWatchedSeries);

myWatchedSeries.splice(1);
console.log(myWatchedSeries);

const word = "money heist";
const character = word.charAt(3);
console.log(character) // -> e


//Exercise 3
let celsius= 25;
let celsiusdiv9=(celsius/5);
let fahrenheit= celsiusdiv9*9+35;
console.log(fahrenheit);

//Exercise 4
let c;
let a = 34;
let b = 21;

    console.log(a+b) //first expression
    // Prediction:34+21 beacuse a and c are variables.
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23 because a is 2 and it will be 2+21
    // Actual:23

    console.log(c)
    // Prediction:no value becuase we did not define any value for 'c'
    // Actual:c is not defined

    console.log(3 + 4 + '5');
    // Prediction:7+5 becuase '5' is defined value
    // Actual:75


 //Exercise 5
 typeof(15)
// Prediction:string because it's not define as number
// Actual:number

typeof(5.5)
// Prediction:Number because of the digits
// Actual:number

typeof(NaN)
// Prediction:not a number because this is the initials of NaN
// Actual: number

typeof("hello")
// Prediction:string because it's undifiend
// Actual:string

typeof(true)
// Prediction:boolean because it's only has 2 options
// Actual:boolean

typeof(1 != 2)
// Prediction:boolean becuase it's say "1 is not 2"
// Actual:boolean


"hamburger" + "s"
// Prediction:Value is undefined, type is undefined
// Actual:"hamburger's'

"hamburgers" - "s"
// Prediction:Value is undefined, type is undefined
// Actual:Nan

"1" + "3"
// Prediction:13 because these are to strings with + between
// Actual:13

"1" - "3"
// Prediction:NaN because it's not defined as a number
// Actual:-2

"johnny" + 5
// Prediction:johnny5 because of +
// Actual:johnny5

"johnny" - 5
// Prediction:NaN because it's not defined as a number
// Actual:NaN

99 * "hello"
// Prediction:NaN because it's not defined as a number
// Actual:NaN

1 != 1
// Prediction:False becuase 1 is 1
// Actual:False

1 == "1"
// Prediction:true becuase 1 is 1
// Actual:true

1 === "1"
// Prediction:false becuase it's comparing the data type
// Actual:false

//Exercise 6
5 + "34"
// Prediction:534 because of +
// Actual:534

5 - "4"
// Prediction:NaN because it's not a number
// Actual:1

10 % 5
// Prediction:2 becuase % returns 2
// Actual:0

5 % 10
// Prediction:NaN becuase 10 does not fit in 10
// Actual:5

"Java" + "Script"
// Prediction:JavaScript because of +
// Actual:JavaScript

" " + " "
// Prediction:nothing, it's blank
// Actual:''

" " + 0
// Prediction:0 or nothing
// Actual:' 0'

true + true
// Prediction:true because it's twice
// Actual:2

true + false
// Prediction:2 because it's 2 strings
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1 becuase it's true minus false
// Actual:-1

!true
// Prediction:false, because ! declares that something is "not" something
// Actual:false

3 - 4
// Prediction:-1 because it's calculating math
// Actual:-1

"Bob" - "bill"
// Prediction:0 because it's the same type data
// Actual:NaN








