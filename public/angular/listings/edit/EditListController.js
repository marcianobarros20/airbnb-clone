angular.module('app.editlisting', ['ui.calendar'])
.controller('EditListController', function($scope, $state, $http, $upload, $stateParams, $rootScope, $anchorScroll, $location, Restangular, uiCalendarConfig){

  var id = $stateParams['id'];
  var getList = function(){
		$scope.list = Restangular.one('listings', id).get().$object;
	};

  $scope.list = {
    'images': []
  };

  $scope.scrollTo = function(id){
    $location.hash(id);
    $anchorScroll();
  }

  $scope.updateList = function(){
    if (!id){
      var Listings = Restangular.all('listings');
      Listings.post($scope.list);
      $location.path('/listings');
    } else {
      $http.put('api/v1/listings/' + id, $scope.list);
      $state.reload();
    }
  }

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  /* event source that pulls from google.com */
  $scope.eventSources = 
      {
          events: [
              {title: 'John Doe', start: new Date(y, m, 17), end: new Date(y, m, 24),allDay: false},
              {title: 'Suzy Cae', start: new Date(y, m, 28), end: new Date(y, m, 30), url: 'http://google.com/'}
          ],
          color: '#666F7A',
          textColor: 'black',
          backgroundColor: '#e2e2e2' 
      }
  ;
  
  $scope.$watch('files', function() {
      if (!$scope.files) return;
      $scope.files.forEach(function(file){
        $scope.upload = $upload.upload({
          url: "https://api.cloudinary.com/v1_1/world-lens/image/upload",
          data: {upload_preset: 'gxramofi', tags: 'myphotoalbum', context:'photo=' + $scope.title},
          file: file
        }).progress(function (e) {
          file.progress = Math.round((e.loaded * 100.0) / e.total);
          file.status = "Uploading... " + file.progress + "%";
          if(!$scope.$$phase) {
            $scope.$apply();
          }
        }).success(function (data, status, headers, config) {
          data.context = {custom: {photo: $scope.title}};
          file.result = data;
          $scope.list.images.push(data)
          if(!$scope.$$phase) {
            $scope.$apply();
          }
        }).error(function(data, status, headers, config){
          console.log('error' + status + ' data' + config);
        });
      });
  });

  /* Modify the look and fill of the dropzone when files are being dragged over it */
  $scope.dragOverClass = function($event) {
      var items = $event.dataTransfer.items;
      var hasFile = false;
      if (items != null) {
        for (var i = 0 ; i < items.length; i++) {
          if (items[i].kind == 'file') {
            hasFile = true;
            break;
          }
        }
      } else {
        hasFile = true;
      }
      return hasFile ? "dragover" : "dragover-err";
    };

  /* config object */
  $scope.uiConfig = {
    calendar:{
      height: 450,
      editable: true,
      header:{
        left: 'title',
        center: '',
        right: 'today prev,next'
      }
    }
  };


  var initialize = function(){
    if (id) {
      $scope.status = true;
      getList();
    }
  };

  initialize();
});