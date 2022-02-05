/*
console.log('Hi there');

setTimeout(function callbackTime() {
	console.log('callback time');
}, 1000);

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
*/

/*
console.log('Hi there');

function setTimeout(callback, time_amount) {
	if(time_amount === 0){
		callback();
	}
}

setTimeout(function callbackTime() {
	console.log('callback time');
}, 1000);

console.log('Bye There');   
*/

/*
console.log('Hi there');

fetch('https://api/imdb/23456')
	.then(function cbT() {
		console.log('CBT');
	})

setTimeout(function cb() {
	console.log('cb');
}, 1000);

console.log('Bye There');  
*/

/*
    * Topics:
		1. JavaScript Engine: which runs our JavaScript code. 
		2. event loop, callback queue, microtask queue, web api, browser resource
*/


