var app= angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login',{templateUrl:'partials/login.html'})
	.when('/dashboard',{templateUrl:'partials/dash.html'})
	.when('/bucketslist',{templateUrl:'partials/bucketsList.html'})
	.when('/show/user/:id',{templateUrl:'partials/show.html'})
	.otherwise({redirectTo:'/login'})
})