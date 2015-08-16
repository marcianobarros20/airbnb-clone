angular.module('app.inbox-detail', [])

.controller('InboxDetailController', function($scope, $stateParams, Restangular){

	$scope.id = $stateParams.id;

	var getMessage = function(id){
    
    $scope.results = Restangular.one('messages', 1).get().$object;
    console.log($scope.results);
	}


  var message = {};

  $scope.submitChat = function (inbox) {
    message['bookings_id']	  = 1;
    message['content']        = inbox.body;
    
    var Messages = Restangular.all('messages');
    Messages.post(message);
  };

	var initialize = function(){
		getMessage();
	};

	initialize();

});
