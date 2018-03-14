angular.module('dataService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Datas', ['$http',function($http) {
		var temp = 'English';
		return {
			get : function(temp) {
				return $http.get('/api/datas/'+temp);
			}
		}
	}])
	.factory('Language', ['$http',function($http) {
		return {
			get : function(value) {
				return $http.get('/api/languages/'+ value);
			}
		}
	}]);