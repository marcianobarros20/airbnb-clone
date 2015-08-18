angular.module('app.inbox-detail', [])

.controller('InboxDetailController', function($scope, $state, $stateParams, Restangular, $http, stripe){



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
    $state.reload();
  };

  $scope.updateBooking = function(state){
    status['status'] = state;
    console.log(status);
    $http.put('/api/v1/bookings/' + $stateParams.id, status);
  };

  $scope.book = function(){
    $state.go('payments/:id', {'id': 5});
  }


	var initialize = function(){
		getMessage();
	};

	initialize();

});
