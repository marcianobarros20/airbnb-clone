
angular.module('app.home', [])

.controller('HomeController', function($scope, $state, $stateParams, Restangular){

	$scope.search = function(loc, checkin, checkout){
		$state.go('search/:location', {
			'location': loc,
			'checkin' : Date.parse(checkin),
			'checkout' : Date.parse(checkout)
		});
	}

  $scope.cities = ['Chicago', 'Los Angeles', 'New York', 'San Francisco'];

	$scope.today = function() {
    $scope.checkin = new Date();
    $scope.checkout = '';
  };

  $scope.open = function($event, open) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope[open] = true;
  };

  $scope.today();

});

