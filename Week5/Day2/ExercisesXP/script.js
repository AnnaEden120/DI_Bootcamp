//Exercise1
fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
method: 'GET',
headers:{
	'content-type': 'gifs/hilarious'
},
body: JSON.stringify({
	object: 'hilarious gif'
}) .then(res=>{
	return res.json()
})
.then(data=>console.log(data))
.catch(error=>consoloe.log('error'))

//Exercise2
//not sure how to solve this.