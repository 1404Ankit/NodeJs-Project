var detailCtrl = angular.module('detailCtrl', []);
detailCtrl.controller('detailController', function($scope, $http, $routeParams){
	$scope.scrapeimages = {};
	//get the id to query the db and retrieve the correct scrapeimages
	var id = $routeParams.id;
	$http.get('/scrapeimages/' + id)
		.success(function(data){
			console.log(JSON.stringify(data));
			$scope.scrapeimages = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});		
});