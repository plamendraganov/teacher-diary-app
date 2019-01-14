'use strict';

angular.module('studentRegisterForm', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/form', {
            templateUrl: 'components/student_register_form/student-register-form.html',
            controller: 'StudentRegisterForm'
        });
    }])
    .controller('StudentRegisterForm', [
        '$scope',
        'demo',
        function($scope, demo) {
            $scope.student = {
                number: '',
                firstName: '',
                lastName: '',
                gender: '',
                address: '',
                phone: '',
                email: '',
                notes: ''
            }
            $scope.studentList = [];

            // $scope.separateObj = function(obj) {
            //     function stringifyObj(obj) {
            //         return JSON.stringify(obj);
            //     }
            //     function parseString(str) {
            //         return JSON.parse(str);
            //     }
            //     return {
            //         stringify: function(obj) {
            //             return JSON.parse(stringifyObj(obj));
            //         },
            //         parse: function(obj) {
            //             return parseString(obj);
            //         }
            //     }
            // }

            $scope.registerStudent = function(student) {
                var newStudent = JSON.parse(JSON.stringify(student));
                $scope.studentList.push(newStudent)
            }

            $scope.sampleData = "";

            $scope.arr = ['John', 'Bob', 'Paul'];

            $scope.sendData = function(data) {
                var data = $scope.sampleData;
                demo.setData(data);
            }
        }
    ])
    .service('demo', function() {
        this.tempData = '';

        this.setData = function(data) {
            this.tempData = data;
            console.log(this.tempData);
        }

        this.getData = function() {
            return this.tempData;
        }
    });