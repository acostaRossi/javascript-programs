(() => {

	function processUserInput(callback) {
		console.log('processing user input ...');
		let name = 'Alberto';
		callback(name);
	}

	processUserInput((name) => {
		console.log('Hello ' + name);
	});
	
})();