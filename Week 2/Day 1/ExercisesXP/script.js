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
console.log(myWatchedSeries)



