angular.module('consumeRestApp', ['ngResource'])
.controller('MainCtrl', function($scope, $http) {
    $http.get('http://localhost:8080/extract').
        then(function(response) {
		
			$scope.extracts = response.data;
            $scope.listaControleLancamento = $scope.extracts.listaControleLancamento;
		
		}, function(err) {
            console.error("Error occured: ", err);
        });
});