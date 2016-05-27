angular.module('myApp', ['ngAnimate'])
/*
.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
})
*/

.controller('myController', function($scope, $http, $sce) {
    $scope.keyword="cats";
    
    $scope.clearSearch = function(){
            $scope.keyword = "";
            $scope.results = [];
            console.log('reset!');
    };
    
	$scope.searchInstaGram = function(){
        
		var url = "https://api.instagram.com/v1/tags/" + $scope.keyword + "/media/recent"  +"?callback=JSON_CALLBACK&client_id=97a493656416448891fba171c5f9747d";

		$http.jsonp(url)
 			.success(function(response) {
				console.log(response.data);
				$scope.results = response.data;

    })
			.error(function(error) {
			console.log("error");

			});

	};
    
    $scope.searchInstaGram();
    
    $scope.columnBreak = 2;
    
    $scope.startNewRow = function(index, count){
        return((index)%count)===0;
    };
    
});
