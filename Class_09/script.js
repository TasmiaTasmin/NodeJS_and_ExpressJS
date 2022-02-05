/*
console.log('Hi there');

function cb() {
	console.log('callback function');
}

setTimeout(cb, 1000);

console.log('Bye There');   
*/

/*
console.log('Hi there');

function cb() {
	console.log('callback function');
}

setTimeout(cb, 0);

console.log('Bye There');   
*/

/*
console.log('Hi there');

function x() {
	setTimeout(function cb() {
		console.log('callback function');
	}, 5000);
}

x();

console.log('Bye There');
//Draw the call stack
*/

/*
console.log('Hi there');

function x() {
	setTimeout(function cb() {
		console.log('callback function');
		setTimeout(() => {
			console.log('Next callback function');
		}, 0);
	}, 5000);
}

x();

console.log('Bye There');
//Draw the call stack
*/

/*
console.log('Hi there');

function x() {
	for(var i=1; i<=5; i++){
		setTimeout(function cb() {
			console.log(i);
		}, i * 1000);
	}	
}

x();

console.log('Bye There');

 //Output:
 //closure(x):
 //	i: 6

 //Hi there
 //Bye There
 //6   output will be printed from closure
 //6
 //6
 //6
 //6
*/

/*
console.log('Hi there');

function x() {
	for(let i=1; i<=5; i++){
		setTimeout(function cb() {
			console.log(i);
		}, i * 1000);
	}	
}

x();

console.log('Bye There');
*/

/*
console.log('Hi there');

function x() {
	for(var i=1; i<=5; i++){
		function closureFun(x){
			setTimeout(function cb() {
				console.log(x);
			}, x * 1000);
		}
		closureFun(i);
	}	
}

x();

console.log('Bye There');
*/

/* 
*/

/*
    * Topics: 
		JS concurrency is fake concurrency. In Go it is real
*/
