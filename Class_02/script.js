/*
//Object Structure

var object1 = {
    key: 'value'   //key value pair
};
*/

/* 
var user1 = {
    firstName: 'Tasmia',
    lastName: 'Tasmin',
    profession: 'Instructor'
};

var user2 = user1;

console.log(user1);
console.log(user1.firstName);
console.log(user1.['profession']);
console.log(user2);

user2.profession: 'Engineer';
console.log(user1);

var key = 'firstName';
console.log(user1[key]);
*/

/*
	* Object Structure 
	{
		firstName: 'Tasmia',
		lastName: 'Tasmin',
		profession: 'Instructor'
	};

    object (not the variable name only the portion of inside and including curly braces) will be created in RAM.
	object will be created in RAM then user1 var will contain the reference of this object 
	if we write "var user2 = user1;", then user2 will contain the value of user1. That means the reference

};
*/

/*
var user1 = {
    firstName: 'Tasmia',
    lastName: 'Tasmin',          ----------> ref1
    profession: 'Instructor'
};

user2 -> ref1
user1 -> ref1
*/

/*
function sum(a, b){
    var c = a+b;
    return c;
}
var d = sum(5, 7);
console.log(d);

var d = sum(4, 2);
*/

/*
var a = 10;

if(a > 0){
    console.log('Positive Number');
}
else if(a < 0){
    console.log('Negative Number');
}
else{
    console.log('Zero');
}
*/

/*
if(condition){
    //code blocks;
}
*/

/*
var a = 2;

if(a == 2){
    console.log('Yes');
}
else{
    console.log('No');
}
*/

/*
var a = 2;

if(a === 2){
    console.log('Yes');
}
else{
    console.log('No');
}
*/

/*
var a = '2';

if(a === 2){
    console.log('Yes');
}
else{
    console.log('No');
}
*/

/*
var a = {
    firstName: 'Tasmia'
};

var b = {
    firstName: 'Tasmia'
};

if(a == b){
    console.log('Yes');
}
else{
    console.log('No');
}
*/

/*
{
    firstName: 'Tasmia'   ---> ref1
};
// The name of next empty cell in memory will be a. and a will contain the value ref1
a -> ref1

{
    firstName: 'Tasmia'   ---> ref2
};
// The name of next empty cell in memory will be b. and b will contain the value ref2
b -> ref2

ref1 != ref2    //Since the value of two memory cell can no be the same
*/

/*
var a = {
    firstName: 'Tasmia'
};

var b = a;

if(a == b){
    console.log('Yes');
}
else{
    console.log('No');
}
*/

/*
// How to check type of a variable
console.log(typeof(a));
*/

/*
// way 1
var a = [1, 2, 3, 4, 5];

for(var i = 0; i< a.length; i++){
    console.log(a[i]);
}
*/

/*
// way 2
var a = [1, 2, 3, 4, 5];

for(var value of a){  // we can give any name instead of value
    console.log(value);
}
*/

/*
// way 3
var a = [1, 2, 3, 4, 5];    // a is a list

for(var i in a){
    console.log(i);  // i is index value 
}

for(var i in a){
    console.log(a[i]);
}
*/

/*
var a = [1, 2, 3, 4, 5];

//array.forEach(element => { 
//
//});

function visit(element){
    console.log(element);
}

visit(5);
//a.forEach();   //forEach is a function. We can write list/array dot(.) function like forEach
a.forEach(visit);   // We gave the reference of the visit function and did not call the function  

a.forEach(element => { 
    console.log(element);
});
*/

/*
    * Topics:
        1. object
        2. function
        3. arguments vs parameters
        4. if...else
        5. operators:
            1. logical operator
                1. and -> &&
                2. or  -> ||
                3. not -> !
            2. comparison operator
                1. is greater than -> >
                2. is less than    -> <
                3. is greather than or equal to -> >=
                4. is less than or equeal to    -> <=
                5. equal to  (value)                   -> ==
                6. equal to with (value and type)          -> ===
        6. typeof
        7. for loop

        8. Execution context
            * 2 parts
                1. memory component or variable environment: Store variables and functions as key value pairs.
                2. code component or thread of execution:code
				
			Execution context phases: Running JavaScript code creates an execution context.
			Execution context is created in two phases.
			Execution context completed it's work in two phases.
            * 2 phase
                1. Creation phase ( Memory creation phase )
                2. Execution phase ( Code execution phase )
		9.  primitive vs non-primitive
*/

/*
    programming paradigm
        1. Structural programming language -> c
        2. Object oriented programming language -> java, python, php, c#
        3. functional programming language -> scala, ruby, racket

        f(x) = x^2 + 7
        let, x = 5
        So, y = f(x) = f(5) = 5^2 + 7 = 32
*/

