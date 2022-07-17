 const robots = [
 {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  image: 'https://robohash.org/1?200x200'
},
{
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
  image: 'https://robohash.org/2?200x200'
},
{
  id: 3,
  name: 'Clementine Bauch',
  username: 'Samantha',
  email: 'Nathan@yesenia.net',
  image: 'https://robohash.org/3?200x200'
},
{
  id: 4,
  name: 'Patricia Lebsack',
  username: 'Karianne',
  email: 'Julianne.OConner@kory.org',
  image: 'https://robohash.org/4?200x200'
},
{
  id: 5,
  name: 'Chelsey Dietrich',
  username: 'Kamren',
  email: 'Lucio_Hettinger@annie.ca',
  image: 'https://robohash.org/5?200x200'
},
{
  id: 6,
  name: 'Mrs. Dennis Schulist',
  username: 'Leopoldo_Corkery',
  email: 'Karley_Dach@jasper.info',
  image: 'https://robohash.org/6?200x200'
},
{
  id: 7,
  name: 'Kurtis Weissnat',
  username: 'Elwyn.Skiles',
  email: 'Telly.Hoeger@billy.biz',
  image: 'https://robohash.org/7?200x200'
},
{
  id: 8,
  name: 'Nicholas Runolfsdottir V',
  username: 'Maxime_Nienow',
  email: 'Sherwood@rosamond.me',
  image: 'https://robohash.org/8?200x200'
},
{
  id: 9,
  name: 'Glenna Reichert',
  username: 'Delphine',
  email: 'Chaim_McDermott@dana.io',
  image:'https://robohash.org/9?200x200'
},
{
  id: 10,
  name: 'Clementina DuBuque',
  username: 'Moriah.Stanton',
  email: 'Rey.Padberg@karina.biz',
  image:'https://robohash.org/10?200x200'
}
];

let sectionRobot = document.getElementById("content")
document.getElementsByTagName('section')[0]
document.getElementsByClassName('hello')[0]
document.querySelector("#content")
document.querySelectorAll("div")
           //also relationships children, sibling, parent

           //create an element
           let newParagraph = document.createElement("p");
           let textParagraph = document.createTextNode("hello");
           newParagraph.appendChild(textParagraph)
           document.body.appendChild(newParagraph)

           (function add (){
            for(let i =0; i<5; i++){
              let newParagraph = document.createElement("p");
              let textParagraph = document.createTextNode("hello");
              newParagraph.classList.add("ocean");
              newParagraph.appendChild(textParagraph);
              document.body.appendChild(newParagraph);
            }
          })()

          let btn = document.querySelector("#btnpara");
          btn.addEventListener("click", changePara)

          function changePara (){
            const allP = document.querySelectorAll("p")
            for (let p of allP){
           //  p.classList.toggle("hide")
         }
       }

// https://stackoverflow.com/questions/2741312/using-css-to-insert-text