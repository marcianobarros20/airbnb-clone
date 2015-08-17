angular.module('app.inbox-detail', [])

.controller('InboxDetailController', function($scope, $stateParams, Restangular, $http){



	var getMessage = function(){
    $scope.results = Restangular.one('messages', $stateParams.id).get().$object;
	}


  var message = {};
  var status  = {};

  $scope.submitChat = function (inbox) {
    message['bookings_id']	  = $stateParams.id;
    message['content']        = inbox.body;
    
    var Messages = Restangular.all('messages');
    Messages.post(message);
  };

  $scope.updateBooking = function(state){
    status['status'] = state;
    console.log(status);
    $http.put('/api/v1/bookings/' + $stateParams.id, status);
  }

	var initialize = function(){
		getMessage();
	};

	initialize();

});
