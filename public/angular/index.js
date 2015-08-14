
angular.module('index', [])

.controller('index', function($scope, $auth, $modal){

	$scope.alerts = [];
	$scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	};
	$scope.layout = 'login'
	// auth
	$scope.login = function(){
		$auth.login({email: $scope.email, password: $scope.password})
		.then(function() {
          $scope.alerts.push({
            content: 'You have successfully logged in',
            animation: 'fadeZoomFadeDown',
            type: 'success',
            duration: 3
          });
        })
        .catch(function(response) {
          $scope.alerts.push({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'danger',
            duration: 3
          });
        });
	}

	$scope.signup = function() {
      $auth.signup({
        displayName: $scope.displayName,
        email: $scope.email,
        password: $scope.password
      }).catch(function(response) {
        if (typeof response.data.message === 'object') {
          angular.forEach(response.data.message, function(message) {
            $scope.alerts.push({
              content: message[0],
              animation: 'fadeZoomFadeDown',
              type: 'success',
              duration: 3
            });
          });
        } else {
          $scope.alerts.push({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'danger',
            duration: 3
          });
        }
      });
    };

	$scope.authenticate = function(provider){
		$auth.authenticate(provider);
	}

	$scope.isAuthenticated = function(){
	  return $auth.isAuthenticated();
	}

	// LoginModal

	$scope.cancel = function () {
	  $scope.modalInstance.dismiss('cancel');
	};

	
	$scope.loginModal = function (size) {
	  $scope.modalInstance = $modal.open({
	    animation: $scope.animationsEnabled,
	    templateUrl: 'angular/_shared/login.html',
	    size: size,
	    scope: $scope
	  });
	}; 

	// global date formats
	$scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
  	$scope.format = $scope.formats[1];

  	$scope.dateOptions = {
    	formatYear: 'yy',
    	startingDay: 1
  	};

  	$scope.DATE_TODAY = new Date();

});