(() => {

	function fnWithCallback(callback) {
		callback();
	}

	fnWithCallback(() => {
		console.log('callback 1 executed');
	});

	fnWithCallback(function() {
		console.log('callback 2 executed');
	});

	function callback() {
		console.log('callback 3 executed');
	}

	fnWithCallback(callback);

})();
