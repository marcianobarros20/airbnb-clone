angular.module('app.editlisting', ['ui.calendar'])
.controller('EditListController', function($scope, $state, $http, $upload, $stateParams, $rootScope, $anchorScroll, $location, Restangular, uiCalendarConfig){

  var id = $stateParams['id'];
  var getList = function(){
		$scope.list = Restangular.one('listings', id).get().$object;
	};

  var newbooked = [];
  var booked = {};

  var bookings = function(){
      $http.get('api/v1/bookings' + id).success(function(data){
        $scope.bookings = data;
      });
  }

  console.log(bookings());
 
  
  console.log($scope.bookings);
  //console.log(newbooked);

  $scope.list = {
    'images': []
  };

  
  var book = [
    {
      "id": 2,
      "user_id": 2,
      "host_id": 1,
      "listing_id": 2,
      "checkin": "1439825178000",
      "checkout": "1440478800000",
      "status": "Listed",
      "total": 0,
      "created_at": "2015-08-17 15:27:17",
      "updated_at": "2015-08-20 18:43:21",
      "title": "Comfortable Place in Streeterville",
      "price_cents": 89,
      "summary": "An awesome place",
      "beds": 0,
      "home_type": "One Bedroom",
      "city": "Chicago, IL",
      "address": "North Rush Street, Chicago, IL 60611, USA"
    }, 
    {
      "id": 2,
      "user_id": 2,
      "host_id": 4,
      "listing_id": 2,
      "checkin": "1439825178000",
      "checkout": "1440478800000",
      "status": "Listed",
      "total": 0,
      "created_at": "2015-08-17 15:27:17",
      "updated_at": "2015-08-20 18:43:21",
      "title": "Comfortable Place in Streeterville",
      "price_cents": 89,
      "summary": "An awesome place",
      "beds": 0,
      "home_type": "One Bedroom",
      "city": "Chicago, IL",
      "address": "North Rush Street, Chicago, IL 60611, USA"
    }
  ];

  angular.forEach(book, function(key, value){
    console.log(key['checkin']);
    booked['start'] = new Date(Number(key['checkin']));
    booked['end']   = new Date(Number(key['checkout']));
    booked['title'] = key['name'];
    booked['url']   = '#/inbox/' + key['id'];
  });

  //console.log(booked);

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
  
  $scope.eventSources = 
      {
          events: [
              booked
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
          data: {upload_preset: 'gxramofi'},
          file: file
        }).progress(function (e) {
          file.progress = Math.round((e.loaded * 100.0) / e.total);
          file.status = "Uploading... " + file.progress + "%";
          if(!$scope.$$phase) {
            $scope.$apply();
          }
        }).success(function (data, status, headers, config) {
          $scope.list.images.push(data)
          if(!$scope.$$phase) {
            $scope.$apply();
          }
        }).error(function(data, status, headers, config){
          console.log('error');
        });
      });
  });

  $scope.getLocation = function(val) {
      return $.ajax('http://maps.googleapis.com/maps/api/geocode/json?address=' + val + '&sensor=false', {
        method: 'GET',
        type: 'json'
      }).then(function(response){
        return response.results.map(function(item){
          return item.formatted_address;
        });
      });
  };

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