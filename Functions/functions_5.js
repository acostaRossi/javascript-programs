(() => {

	var promise = new Promise(function(resolve, reject) {

		const x = "geeksforgeeks";
		const y = "geeksforgeeks";

		setTimeout(function(){
			resolve();
		}, 2000);
		
	});

	promise.
		then(function () {
			console.log('Success, You are a GEEK');
		}).
		catch(function () {
			console.log('Some error has occurred');
		});

	console.log('faccio altro');

})();