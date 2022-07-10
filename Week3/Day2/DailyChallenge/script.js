//Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

var n= document.getElemenById('noun').value;
var ad= document.getElemenById('adjective').value;
var p= document.getElemenById('person').value;
var v= document.getElemenById('verb').value;
var pl= document.getElemenById('place').value;
if (data!=null){
	console.log(n, ad, p, v, pl);
}
//Write a story that uses each of the values.
var theStory = document.createElement('story');
theStory.setAttribute("p","story");
theStory.textContent = "The"+n "will be always a" +ad "thing, because" +p "is never going to" +v ". So stay at" +pl;
//Make sure you check the console for errors when playing the game.
//Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). 
//The user could click the button at least three times and get a new story. Display the stories randomly.
//not sure how to do the last two....//