/*
var a = 10;

function b(){
	console.log(a);
	a = 40;
}

console.log(a);

b();

console.log(a);
*/


/*
var a = 10;

function b(){
	var a = 100;
}

console.log(a);

b();

console.log(a);
*/

/*
{
	var a = 10;
	console.log(a);
}

console.log(a);
*/

/*
{
	var a = 10;
	console.log(a);
}

{
	var b = 100;
	console.log(b);
}
*/

/*
if(true){
	var a = 10;
	console.log(a);
}

console.log(a);
*/

/*
function b(){
	var a = 10;
	console.log(a);
}
b();
console.log(a);
*/

/*
console.log(a);

let a = 10;

function outer(){
	console.log(a);
}

console.log(a);
*/

/*
let a = 10;

outer();

let outer = function (){
	console.log(a);
}

console.log(a);
*/

/*
{
	let a = 10;
	console.log(a);
}
console.log(a);
*/

/*
var a = 10;

function outer(){
	var a = 20;
	console.log(a);
}

outer();
console.log(a); 
//Shadowing will occur since lexical scope is different or different execution context
*/

/*
var a = 10;

if(true){
	var a = 20;
	console.log(a);
}

console.log(a);
//Shadowing will not occur since lexical scope is same
*/

/*
a = 10; //How it work? Without declaration of variable type?

if(true){
	var a = 20;
	console.log(a);
}

console.log(a);

*/

/*
    * Topics: 
		//Problems in var and solution with Let and Const 
		1. Variable Type: Let, Const
		2. Temporal dead zone
		3. block (block is also called compound statement)
			if(true){ //Example of compound statement
				console.log("Tasmia");
				console.log("You also");	
			}
		4. block scope (conditional statement [if, else], looping statement [for, while] are block scope)
				(Variable Type [var] is global scoped and Variable Type [Let, Const] are block scoped)
				Variable Type [Let, Const] declared in function will be stored in script.
		5. shadowing (memory shadowing)
*/




