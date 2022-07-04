//Exercise1
//Using a DOM property, retrieve the h1 and console.log it.
let facts=document.getElementsByTagName("h1"[0]);
console.log(facts);//HTMLCollection[h1.facts]
//Using DOM methods, remove the last paragraph in the <article> tag.
let last= document.getElementsByTagName("h3"[0]).lastChild.innerHTML;
last.remove();
//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
var redClick=document.getElementsByTagName("h2"[0]);
redClick.addEventListener("click",function(){ 
	redClick.style.backgroundcolor="red";
}
//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

//BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

//BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)