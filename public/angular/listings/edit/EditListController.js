angular.module('app.editlisting', ['ui.calendar'])
.controller('EditListController', function($scope, $stateParams, $anchorScroll, $location, Restangular, uiCalendarConfig){

  var id = $stateParams['id']
  var getList = function(){
		$scope.list = Restangular.one('listing', id).get().$object;
	};

  $scope.scrollTo = function(id){
    $location.hash(id);
    $anchorScroll();
  }

  $scope.updateList = function(){
    console.log($scope.list);

    var Listings = Restangular.all('listings');

    Listings.post($scope.list);
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
  console.log($scope.eventSources);

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
      getList();
    }
  };

  initialize();
});