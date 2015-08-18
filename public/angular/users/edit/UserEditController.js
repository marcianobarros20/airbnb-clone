angular.module('app.useredit', [])

.controller('UserEditController', function($scope, Restangular, $state, $http, $upload){


	var user = Restangular.one('user').get().$object;

	$scope.user = user;

	$scope.saveUser = function(){
		$http.put('/api/v1/user', $scope.user);
		$state.reload();
		$scope.alerts.push({
            content: 'You have successfully updated your user information.',
            animation: 'fadeZoomFadeDown',
            type: 'success',
            duration: 3
        });
	};


	$scope.upload = function(){

		 $upload.upload({
		  url: "https://api.cloudinary.com/v1_1/world-lens/upload",
		  data: {upload_preset: 'y5t7m24f'},
		  file: $scope.file
		}).progress(function (e) {
		  file.progress = Math.round((e.loaded * 100.0) / e.total);
		  file.status = "Uploading... " + file.progress + "%";
		  if(!$scope.$$phase) {
		    $scope.$apply();
		  }
		}).success(function (data, status, headers, config) {
			console.log($scope.user);
		  	data.context = {custom: {photo: $scope.title}};
			file.result = data;
			$scope.user['images'] = data['url'];

		  if(!$scope.$$phase) {
		    $scope.$apply();
		  }
		}).error(function(data, status, headers, config){
		  console.log('error' + status + ' data' + headers);
		});

	};
	

});
