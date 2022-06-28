//Exercise 1
//part1
//1)
let people = ["Greg", "Mary", "Devon", "James"];
console.log(people.shift());
console.log(people);
['Mary', 'Devon', 'James']

//2)
people.pop(2);
'James'
console.log(people);
['Mary', 'Devon']
people.push("Jason")
['Mary', 'Devon', 'Jason']

//or
people.splice(2, "Jason");

//3.
people.push("Anna");

//4.
people.indexOf("Mary");
0

//5.
let newPeople= people.slice(1,3);
['Devon', 'Jason']

//6.
newPeople.indexOf("Foo");
-1
//It returns -1 because it's not exist in the array.

//7.
