var spaApp = angular.module('spaApp',[]);


// setting Routes using $routeProvider
spaApp.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl	: 'pages/Home.html',
		controller  : 'mainController'
	})
	.when('/about',{
		templateUrl : 'pages/About.html',
		controller  : 'aboutController'
	})
	.when('/contact',{
		templateUrl : 'pages/Contact.html',
		controller  : 'contactController'
	});
});

// setting appropriate Controller Actions

spaApp.controller('mainController', function($scope){
		$scope.message = "Home Page - mainController injects";
}); 

spaApp.controller('aboutController', function($scope){
		$scope.message = "About Us Page - aboutController injects";
});

spaApp.controller('contactController', function($scope){
		$scope.message = "Contact Us Page - contactController injects";
});