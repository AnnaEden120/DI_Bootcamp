function song() {  
    number= prompt("Type a number");
    input type="number"
    console.log("Let's start singing!");
}
var bottles;
var bottlesLeft;
for (i = 99; i >= 1; i----) {
    if (i == 1) {
        bottles = "bottle";
        console.log(i + bottles + " of beer on the wall,");
        console.log(i + bottles + " of beer,");
        console.log("Take one down, pass it around,");
        bottlesLeft = "No bottles of beer on the wall!";
    } else {
      bottles = "bottles";
      bottlesLeft = i - 2 + " bottles of beer on the wall!";
  } console.log(i+ " " + bottles + " of beer on the wall,");
  console.log(i+ " " + bottles + " of beer,");
  console.log("Take one down, pass them around,");
  console.log(bottlesLeft);
} 


console.log(song());