//Exercise1
async function fetchStarships(){
	const response= await fetch("https://www.swapi.tech/api/starships/9/")
	const result= await response.json();
	console.log(result);
}

//Exercise2
function resolveAfter2Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}

async function asyncCall() {
	console.log('calling');
	let result = await resolveAfter2Seconds();
	console.log(result);
}

asyncCall();

//First it will show "Calling", 
//Than it will show after 2 second "resolved"