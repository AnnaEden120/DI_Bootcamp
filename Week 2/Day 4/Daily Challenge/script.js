//prompt

let words=["hello", "world", "in", "a", "frame"];

function longestWordLength(arr){
	let len=arr[0].length;
	for (let i=1; i<words.length; i++){
		if(arr[i].length>len){
			len = arr[i].length;		
		}
	}
	return len;
}

function addSpaces(word,len){
	if(wors.length==len){
		return "";
	}
	return " ".repeat(len-word.length);
}


functions stars(){
	let len= longestWordLength(words);
	console.log("*".repeat(len+4));
	for (x in words){
		console.log('*'+words[x]+addSpaces(words[x],len) + '*');
	}
	console.log(len);
}
stars()

