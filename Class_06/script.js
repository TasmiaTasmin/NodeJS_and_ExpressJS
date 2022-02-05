//Example of Hoisting
/*
print();
a();

function print(){
    console.log('Tasmia1');
}

function print(){
    console.log('Tasmia2');
}
*/

//Example of first class function and callback function
/*
var a = (flag, callback) => {
	if(flag === 'Success'){
		callback('Successfully executed.');
	}
    else{
		callback('Rejected.');
	}
}

function notify(msg){
    console.log(msg);
}

a('Success', notify);
*/

/*
//closure
//draw call stack

function a(){
	var c = 10; 
	function b(){
		console.log(c);
	}
	return b;
}

var d = a();
 
d();   //b function + lexical environment of b will be returned
*/

/*
function a(){
	var c = 10; 
	function b(){
		var d = 100;
		function e(){
			console.log(c, d);
		}
		return e;
	}
	return b();
}

var d = a();
 
d();
*/

/*
function a(){
	var c = 10; 

	function b(){
		var d = 100;

		return function e(){
			console.log(c, d);
		}
	}
	return b();
}

var d = a();
 
d();
*/

/*
function a(){
	var c = 10; 
	
	function b(){
		var d = 100;

		return function e(){
			console.log(c, d);
		}
	}
	return b();
}
(a())();
*/

/*
function a(){
	var c = 10; 
	
	function b(){
		var d = 100;

		return function e(){
			console.log(c, d);
		}
	}
	return b();
}
a()();
*/

/*
function a(){
	var c = 10; 
	var f = 1000;
	var aa = 100;
	var bb = 200;

	function b(){
		var d = 100;

		return function e(){
			console.log(c, d, f);
		}
	}
	return b();
}
(a())();

//closure(a): c, f
//closure(b): d
*/

/*
function a() {
    var c = 10;
    var f = 1000;
    var aa = 100;
    var bb = 200;

    function b() {
        var d = 100;
        
        return function e() {
            var m  = 1000;
            return function f() {
                console.log(c, f, d, m);
            }
        }
    }

    return b;
}

var p = a();
var q = p();
var r = q();

r();
*/

/*
    * Topics: 
		1. closure: function along with it's lexical environment forms a closure.
*/