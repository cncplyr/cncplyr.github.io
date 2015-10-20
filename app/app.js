var myApp = angular.module('cncplyr', ['ui.router', 'gridshore.c3js.chart'])
		.controller('MainController', function($scope) {
			$scope.message = 'Hello World';
		});

myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home/home.html'
		})
		.state('gaming', {
			url: '/gaming',
			templateUrl: 'partials/gaming/gaming.html'
		})
		.state('programming', {
			url: '/programming',
			templateUrl: 'partials/programming/programming.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partials/about/about.html'
		});
});