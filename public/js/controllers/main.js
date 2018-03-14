angular.module('bhiveController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Datas','Language', function($scope, $http, Datas, Language) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.languages = ["English", "Arabic", "Japanes"];
		$scope.selectedValue = $scope.languages[0];

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Datas.get($scope.selectedValue)
			.success(function(data) {
				$scope.datas = data;
				console.log(data);
			});
$scope.changeLanguage = function(item) {
		$scope.selectedValue = item;
		Language.get(item)
			.success(function(data) {
				$scope.languages = data;
				console.log(data);
			});
    };
	

		
	}]);