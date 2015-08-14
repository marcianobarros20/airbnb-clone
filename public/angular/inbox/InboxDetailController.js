angular.module('app.inbox-detail', [])

.controller('InboxDetailController', function($scope, $stateParams){

	$scope.id = $stateParams.id;

	var getMessage = function(id){

		$scope.messages = [
      {
        "postId": 1,
        "id": 3,
        "created_at": "10 min ago",
        "avatar": "http://placehold.it/50/55C1E7/fff&text=U",
        "name": "Jane",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        "postId": 1,
        "id": 1,
        "created_at": "10 min ago",
        "avatar": "http://placehold.it/50/FA6F57/fff&text=ME",
        "name": "Tom",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        "postId": 1,
        "userId": 3,
        "created_at": "10 min ago",
        "avatar": "http://placehold.it/50/55C1E7/fff&text=U",
        "name": "Jane",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
        "postId": 1,
        "userId": 1,
        "created_at": "10 min ago",
        "avatar": "http://placehold.it/50/FA6F57/fff&text=ME",
        "name": "Tom",
        "email": "Lew@alysha.tv",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        "postId": 1,
        "userId": 3,
        "created_at": "10 min ago",
        "avatar": "http://placehold.it/50/55C1E7/fff&text=U",
        "name": "Jane",
        "email": "Hayden@althea.biz",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      },
      {
        "postId": 1,
        "userId": 1,
        "name": "Tom",
        "avatar": "http://placehold.it/50/FA6F57/fff&text=ME",
        "created_at": "10 min ago",
        "email": "Presley.Mueller@myrl.com",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
      }];
	};

  $scope.submitChat = function (message) {
    message['postId']	  = 1;
    message['from_id'] 	  = 1;
    message['created_at'] = Date.now();
    console.log(message);
    $scope.messages.push(message);
    getMessage();
  };

	var initialize = function(){
		getMessage();
	};

	initialize();

});
