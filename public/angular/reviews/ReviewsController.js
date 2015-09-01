angular.module('app.payments', [])

.controller('PaymentController', function($scope, $stateParams, $http, stripe, $state, Restangular){

	var getResults = function(){
    $scope.results = Restangular.one('messages', $stateParams.id).get().$object;
	}


	var initialize = function(){
		getResults();
	};

	initialize();

});