
function PrintInConsole_1(text) {
	console.log(text);
}

PrintInConsole_1('Function with name');

var PrintInConsole_2 = function(text) {
	console.log(text);
}

PrintInConsole_2('Anonymus function saved in a variable');

// flat arrow anonymous functions introduced from ES6

var PrintInConsole_3 = (text) => {
	console.log(text);
}

PrintInConsole_3('Anonymus function with flat arrow saved in variable');

((text) => {
	console.log(text);
})('Anonymus function with flat arrow immediatly invoked');
