angular.module('app.room', [])
.controller('RoomController', function($scope, $stateParams, Restangular){

  $scope.checkin  = new Date(parseInt($stateParams['checkin']));
  $scope.checkout = new Date(parseInt($stateParams['checkout']));

	
  var getList = function(){
		$scope.list = Restangular.one('listing', $stateParams['id']).get().$object;
	};

	var getListReviews = function(){
		$scope.listing_reviews = [
			{
				"guest": "John Doe",
				"comment": "Great location",
				"from": "Los Angeles",
				"created_at": "June 6th",
				"rating": 4
			},
			{
				"guest": "John Doe",
				"comment": "It was okay.",
				"from": "Los Angeles",
				"created_at": "June 6th",
				"rating": 5
			}
		];
	};

  $scope.book = function(){
    console.log($scope.list['id']);
    console.log(Date.parse($scope.checkin) + ' to ' + Date.parse($scope.checkout));
  }

  $scope.open = function($event, open) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope[open] = true;
  };
  

  var initialize = function(){
    getList();
    getListReviews();
  };

  initialize();
});
