// function declaration
// function statement
/*
function printName(name){
	console.log(name);
}
*/

// anonymous function
/*
(function (name){
	console.log(name);
})('Tasmia');  //Immediate Invokation-> Caling function

//IIFE(Immediately Invoked Function Expressions)
//Immediately Invokation
//Invokated Function
*/

// function expression
/*
var printName = function(name){
	console.log(name);
}

printName('Tasmia');
*/

/*
printName('Tasmia');// hoisting hobe kintu ref error dibe karon var undefined thakbe kintu agee function declaare hhobe but function was not aassigned.

var printName = function(name){
	console.log(name);
}
*/

// named function expression
/*
var printName = function printName(name){
	console.log(name);
}
*/

// difference between parameters & arguments
/*
function print(param1, param2){

}

print(arg1, arg2);
*/


// arrow functions
/*
var sum = (num1, num2) => {
	var res = num1+num2;
	console.log(res);
}

sum(5, 7);	 // All the arrow functions are anonymous function
*/

/*
var sum = (num1) => {
	return num1*10;
}
var s = sum(5);
*/

/*
var sum = num1 => {
	return num1*10;
}
var s = sum(5);
*/

/*
var sum = num1 => num1*10; //auto return onno function naa

var s = sum(5);
console.log(s);
*/


// first class functions 

/*
function a(){
	function b(){
		console.log('Tasmia');
	}
	b();
}
a();
console.log(a);
*/

/*
var sum = 10;

function a(){
	function b(){
		console.log('Tasmia');
	}
	b();
}
var b = a; // sharing the ref of a function a(); b is also acting as a function.
console.log(b);

console.log(sum);
console.log(a);
*/

/*
function a(b){
	b();
}
function c(){
		console.log('Tasmia');
}
a(c);   //passing the ref. of function c as argument 
*/

/*
function a(b) {
    //b();
   
    function d() {
        console.log('d');
    }

	return d;  // returning a function
}

function c(){
		console.log('Tasmia');
}
var p = a(c);
console.log(p);
*/

/*
function a(b) {
   
    return function d() {
        console.log('d');
    }
}

function c(){
		console.log('Tasmia');
}
var p = a(c);
(p);
*/

/*
function a(b) {
   
    return function d() {
        console.log('d');
    }
}

function c(){
		console.log('Tasmia');
}
var p = a(c);
(p);
*/

/* 
// Interview Quesion
function a(b) {    
	return d;

    function d() {
        console.log('d');
    }
}

function c(){
		console.log('Tasmia');
}
var p = a(c);
p();
*/

/////
/*
var a = [1, 2, 3];

//forEach(print){
	//for(var elem of a){
		//print(elem);
	//}
//}

function print(num){  //print() is a callback function
	console.log(num);
}

forEach(print){
	for(var elem of a){
		print(elem);
	}
}
//a.map(); 
//a.filter();  
//map() is a built in function in JavaScript.
a.forEach(print); //forEach() is a first class function
*/


/*
    * Topics: 
		
		1. function statement
		2. function declaration
		3. anonymous function
		4. Invokation or function call or function execuion or Invoke
		5. function expression
		
		6. named function expression
		7. difference between parameters & arguments
		
		8. arrow functions
		9. first class functions: 
				The function which takes a function as a parameter  is a first class function. 
				first claass function can pass a function or can return a function.
		10. callback function:a(c); here c is cbf
*/
