<!DOCTYPE html>
<html>
<head>
  <title>Ummaspot</title>
</head>
<body ng-app="app">
	<div ng-controller="index">
		<ui-view></ui-view>
		<footer>
			
		</footer>
	</div>

	<!-- Application Dependencies -->
    <script type="text/javascript" src="bower/angular/angular.js"></script>
    <script type="text/javascript" src="bower/angular-bootstrap/ui-bootstrap.js"></script>
    <script type="text/javascript" src="bower/angular-ui-router/release/angular-ui-router.js"></script>
    <script type="text/javascript" src="bower/angularjs-slider/dist/rzslider.min.js"></script>
    <script type="text/javascript" src="bower/restangular/src/restangular.js"></script>
    <script type="text/javascript" src="bower/satellizer/satellizer.js"></script>
    <script type="text/javascript" src="bower/angular-ui-calendar/src/calendar.js"></script>
    <script type="text/javascript" src="bower/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <script type="text/javascript" src="bower/lodash/lodash.js"></script>
    <script type="text/javascript" src="bower/moment/moment.js"></script>

    <!-- Application Scripts -->
    <script type="text/javascript" src="angular/app.js"></script>
    <script type="text/javascript" src="angular/index.js"></script>
    <script type="text/javascript" src="angular/home/HomeController.js"></script>
    <script type="text/javascript" src="angular/inbox/InboxController.js"></script>
    <script type="text/javascript" src="angular/inbox/inboxDetailController.js"></script>
    <script type="text/javascript" src="angular/listings/ListingController.js"></script>
    <script type="text/javascript" src="angular/listings/edit/EditListController.js"></script>
    <script type="text/javascript" src="angular/listings/room/RoomController.js"></script>
    <script type="text/javascript" src="angular/reservations/ReservationsController.js"></script>
    <script type="text/javascript" src="angular/search/SearchController.js"></script>
	<script type="text/javascript" src="angular/users/show/UserShowController.js"></script>
	<script type="text/javascript" src="angular/users/edit/UserEditController.js"></script>  
</body>
</html>