/* ------Viva Start------ */
/* ------------ */
//closure
/*
function a(){
	var c = 10; 
	function b(){
		console.log(c);
	}
	return b;
}

var d = a();
 
d();   //b function + lexical environment of a will be returned and will create closure
*/

/*
function a(){
	var c = 10; 
	return function b(){
		console.log(c);
	}
}

var d = a(); 
d();   
*/

/*
function a(){
	return b;
	var c = 10; 
	function b(){
		console.log(c);
	}
}

var d = a(); 
d();   
*/

/*
function a(){	
	var c = 10; 
	return function (){
		console.log(c);
	}
}

var d = a(); 
d();   
*/

/*
function a(){	
	var c = 10;
	return b;    // reference error
	var b = function (){
		console.log(c);
	}
}

var d = a(); 
d();   
*/

/*
function a(){	
	var c = 10;
	var b = function (){
		console.log(c);
	}
	return b; 
}

var d = a(); 
d();   
*/

/* ------------ */

/*  
var arr = [1, 2, 3, 4, 5]
var newarr = arr;
*/

/*  
function a(){
	return function b(){
		console.log(b);
	}
	b();
}
a();    
*/

/*  
function a(){
	return function b(){
		console.log("b");
	}
	b();
}
a(); 
*/

/* 
function a(){
	function b(){
		console.log("b");
	}
	b();
}
a();  
*/

/* ------------ */

/* 
function a(c){
	function b(){
		console.log(c);
	}
	b();
}
a(5);   //closure will be created
*/

/*  
function a(){
	var c = 100;
	return function d(){
		++c;
		console.log(c);
	}
}
var b = a(); 
b();
b();
b();
b();
b();
//closure will be created. closure(a)
*/

/*  
function a(){
	var money = 100;
	return function b(deposit){
		money+=deposit;
		console.log(money);
	}
}
var d = a(); 
d(10);
d(12);
d(67);
d(8);
d(3);
//JavaScript has no private variable. So, whenever we need private variable we will use closure.
*/

/* ------------ */
//
/*  
function a(){
	var x = 3;
	//x exists in the lexical environment of a.
	//x lexically exists in a.
	function b(){    
		
	} 
	//b() lexically exists in a.
}
*/
/* ------Viva End------ */