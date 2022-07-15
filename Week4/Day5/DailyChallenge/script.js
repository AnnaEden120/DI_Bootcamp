let anagram1=function(string1, string2){
	let word1=string1.split('').sort().join('').toLowerCase();
	let word2=string2.split('').sort().join('').toLowerCase();
}
if (word1==word2){
	return (`${word1} is an anagram of ${word2}`)
}
else{
	reutrn false;
}
