
angular.module('app.listings', [])

.controller('ListingsController', function($scope){
	
	var getListings = function(){

		$scope.listings = [
			{
				"id": "1",
				"title": "Cozy Place",
				"status": "Listed"
			},
			{
				"id": "2",
				"title": "Warm Studio",
				"status": "NotListed"
			}
		]
	}

	getListings();

});