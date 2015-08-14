angular.module('app.usershow', [])

.controller('UserShowController', function($scope, $stateParams, Restangular){

	var User = Restangular.one('user', $stateParams['id']);

	var getUser = function(){
		$scope.user = User.get().$object;
	};

	var getGuestReviews = function(){
		$scope.guest_reviews = User.getList('guest_reviews').$object;
	}

	var getHostReviews = function(){
		$scope.host_reviews = User.getList('host_reviews').$object;
	}

	var initialize = function(){
		getUser();
		getGuestReviews();
		getHostReviews();
	};

	initialize();

});
