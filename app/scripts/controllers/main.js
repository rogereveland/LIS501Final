'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
	.controller('MainCtrl', function ($scope, $location, $anchorScroll) {
		$scope.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
		};
	});
