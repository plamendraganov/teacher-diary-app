'use strict';

angular.module('studentList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'components/student_list/student_list.html',
    controller: 'StudentList'
  });
}])

.controller('StudentList', [
    '$scope',
    function($scope) {
		console.log($scope);
    }	
]);