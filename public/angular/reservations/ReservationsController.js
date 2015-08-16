angular.module('app.reservations', [])

.controller('ReservationsController', function($scope, Restangular, $location){
	
	var getReservations = function(){
		$scope.results = Restangular.one('user').getList('reservations').$object;
	}

	var getTrips = function(){
		$scope.results = Restangular.one('user').getList('trips').$object;
	}

	console.log($location);

	if ($location.$$url == '/reservations'){
		getReservations();
		$scope.pageName = 'Reservations';
		$scope.recipient = 'Guest';
	} else {
		getTrips();
		$scope.pageName = 'Trips';
		$scope.recipient = 'Host';
	}

});