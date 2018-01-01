var galleryCtrl = angular.module('galleryCtrl', []);
galleryCtrl.controller('galleryController', function($scope, $http){
	$scope.scrapeimages = [];
	//Retrieve all the scrapeimages to show the gallery
	$http.get('/scrapeimages')
		.success(function(data){
			console.log(JSON.stringify(data));
			$scope.scrapeimages = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	
});