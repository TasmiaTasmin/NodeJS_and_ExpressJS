/* 
const arr = [1, 2, 3, 4, 5];

const print = number => {
	console.log(number);
}

print(5);
print(6);

//function forEach(callback){
	//for(let num of arr){
		//callback(num);
	//}
//}

arr.forEach(print);
*/

/* 
const arr = [1, 2, 3, 4, 5];

arr.forEach(number => {
	console.log(number);
});
*/

/* 
const arr = [1, 2, 3, 4, 5];

arr.forEach(function(number){
	console.log(number);
});
*/


/* 
const arr = [1, 2, 3, 4, 5];

function print(number){
	return number*2;
}

arr.forEach(number => print(number));
*/

/* 
const arr = [1, 2, 3, 4, 5];

function print(number){
	return number*2;
}

arr.forEach(print);
*/

/* 
const arr = [1, 2, 3, 4, 5];

function print(number){
	return number*2;
}

arr.map(print);
*/

/* 
const arr = [1, 2, 3, 4, 5];

function print(number){
	return number*2;
}

const newArr = arr.map(print);

console.log(newArr);
*/

/* 
const arr = [1, 2, 3, 4, 5];

function print(number){
	if(number > 3) return true;
	else retun false;
}

const newArr = arr.filter(print);

console.log(newArr);
*/

/* 
const arr = [1, 2, 3, 4, 5];

function print(number){
	if(number > 3) return true;
	return false;
}

const newArr = arr.filter(print);

console.log(newArr);
*/

/*
const users = [
	{firstName: 'Nazia', lastName: 'Rahman', age: 27 },
	{firstName: 'Jarin', lastName: 'Rahman', age: 17 },
	{firstName: 'Ritaa', lastName: 'Rahman', age: 37 },
	{firstName: 'Sweta', lastName: 'Rahman', age: 47 },
	{firstName: 'Mitaa', lastName: 'Rahman', age: 13 }
];

//console.log(users[2].firstName, ' ', users[2].lastName);

users.forEach(function(user){
	console.log(user.firstName, ' ', user.lastName, ' ', user.age);
});
*/

/*
const users = [
	{firstName: 'Nazia', lastName: 'Rahman', age: 27 },
	{firstName: 'Jarin', lastName: 'Rahman', age: 17 },
	{firstName: 'Ritaa', lastName: 'Rahman', age: 37 },
	{firstName: 'Sweta', lastName: 'Rahman', age: 47 },
	{firstName: 'Mitaa', lastName: 'Rahman', age: 13 }
];

const user_ages = users.map(function(user){
	return user.age;
});

//arrow function
const user_ages = users.map(user => user.age);

console.log(user_ages);
*/

/*
const users = [
	{firstName: 'Nazia', lastName: 'Rahman', age: 27 },
	{firstName: 'Jarin', lastName: 'Rahman', age: 17 },
	{firstName: 'Ritaa', lastName: 'Rahman', age: 37 },
	{firstName: 'Sweta', lastName: 'Rahman', age: 47 },
	{firstName: 'Mitaa', lastName: 'Rahman', age: 13 },
];

const new_arr = users.filter(user => {
	if(user.age > 20) return true;
	return false;
});

const again_new_arr = new_arr.map(user => user.age);

console.log(again_new_arr);
*/

/*
const users = [
	{firstName: 'Nazia', lastName: 'Rahman', age: 27 },
	{firstName: 'Jarin', lastName: 'Rahman', age: 17 },
	{firstName: 'Ritaa', lastName: 'Rahman', age: 37 },
	{firstName: 'Sweta', lastName: 'Rahman', age: 47 },
	{firstName: 'Mitaa', lastName: 'Rahman', age: 13 },
];

const ages = users.filter(user => {
	if(user.age > 20) return true;
	return false;
}).map(user => user.age);

console.log(ages);
*/

/*
const arr = [1, 2, 3, 4, 5];

const output = arr.reduce((sum, currentValue) => {
	sum = sum + currentValue;
	return sum;
}, 0); //initialized sum with 0

console.log(output);
*/

/*
const a = {
	firstName: 'Nazia', 
	lastName: 'Rahman', 
	age: 27,
	print: () => {
		console.log('Print Me!!');	
	} 
};

console.log(a);
console.log(a.firstName);
a.print();	
*/

/*
function User(a, b, c) {
	this.firstName: a;
	this.lastName: b; 
	this.age: c;
}

const obj1 = new User('Nazia', 'Rahman', 27);	//{firstName: 'Nazia', lastName: 'Rahman', age: 27 }
console.log(obj1);
*/

/*
function User(a, b, c) {
	this.firstName = a;
	this.lastName = b; 
	this.age = c;
	this.print = () => {
		console.log('Print Me!!');	
	} 
}

const obj1 = new User('Nazia', 'Rahman', 27);	//{firstName: 'Nazia', lastName: 'Rahman', age: 27 }
console.log(obj1);
obj1.print();
*/

/*
class User {
	constructor(a, b, c){
		this.firstName = a;
		this.lastName = b; 
		this.age = c;
	}
	print = () => {
		console.log('Print Me!!');	
	} 
}

const obj1 = new User('Nazia', 'Rahman', 27);	//{firstName: 'Nazia', lastName: 'Rahman', age: 27 }
console.log(obj1); //syntactical sugar
obj1.print();
*/

/*
class User {
	constructor(a, b, c){
		this.firstName = a;
		this.lastName = b; 
		this.age = c;
	}
}

class Teacher extends User{
	constructor(a, b, c){

	}
}
*/

/* 
const arr = [1, 2, 3, 4, 5];

arr.forEach(function(number){
	console.log(number);
});

//arr.forEach() 

//arr is an object
//console.log(typeof arr);

const user_name = "Tasmia Tasmin";

console.log(typeof user_name);
console.log(user_name.length);
const small_name = user_name.toLowerCase(); //String in compile time and object in Runtime
//When we press the run button, Compiler checks if there is any error or not which is compile time
//When the code starts execution, called runtime
console.log(small_name);
*/

/*
const user = {
	firstName: 'Nazia', 
	lastName: 'Rahman', 
	address: {}
};

user.address.city = 'Dhaka';
user.address.home_address = {
	village: 'Kaoakhali'
}

//console.log(user);
//console.log(user.address.home_address.village);

const user2 = {
	firstName: 'Nazia', 
	lastName: 'Rahman', 
	address: {}
};
console.log(user2.address.home_address.village);
console.log(user2.address.home_address?.village); 	//here, ? is optional chain operator
//We have added "?" after "user2.address.home_address" to be sure "user2.address.home_address" is valid 
console.log(user2.address.home_address?.village || '--');	//To print anything other than Undefined

//here, "user2.address.home_address?.village" is falsy and '--' is for trusy so it will print for trusy.
*/

/*
    * Topics: 
//Transform with map
		1. map, filter, reduce, promise, callback hell, async/await, object, create object using function (constructor function),
		   class, instantiate, instance, prototype, __proto, prototype chaining, javascript garbage collector, optional chain operator
*/




