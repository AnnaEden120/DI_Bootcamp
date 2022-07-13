//1.
class Video{
	constructor(title, uploader, time){
		title==string;
		uploader==string;
		time=(number + " seconds ")
		this.title=title;
		this.uploader=uploader;
		this.time=time;
	}
}

//2.
watch(){
	return (`${this.uploader} watched all ${this.time} of ${this.title}`);
}

//3.
const uploader1 = new Video("titanic", "Anna", "500");
console.log(uploader1.watch()); 
//4.
