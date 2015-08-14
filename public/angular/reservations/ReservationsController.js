angular.module('app.reservations', [])

.controller('ReservationsController', function($scope){
	
	var getReservations = function(){

		$scope.reservations = [
			{
				"id": "1",
				"title": "Cozy Place",
				"date" : "Aug 1 - Aug 10",
				"status": "Accepted",
				"details": "399",
				"host": 
					{
						"name": "John Mayne",
						"phone": "733-222-3333" 
					}
				
			},
			{
				"id": "2",
				"title": "Warm Studio",
				"date": "Sep 10 - Sep 24",
				"status": "Declined",
				"details": "233",
				"host": 
					{
						"name": "Sue Tay",
						"phone": "733-222-3333" 
					}
				
			}
		]
	}

	getReservations();

});