angular.module('app.useredit', [])

.controller('UserEditController', function($scope, Restangular, $http){


	var user = Restangular.one('user').get().$object;


	$scope.user = user;

	$scope.saveUser = function(){
		console.log($scope.user);
		$http.put('/api/v1/user', $scope.user);
	};

});
