'use strict';

/**
 * @ngdoc overview
 * @name mobiApp
 * @description
 * # mobiApp
 *
 * Main module of the application.
 */
angular
    .module('mobiApp', [
        //'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    /*
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    }); */

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('project', {
                url: '/project',
                templateUrl: 'views/project.html'
            })
            .state('form', {
                url: '/form',
                templateUrl: 'views/form.html',
                controller: 'formController'
            })

            // nested states 
            .state('project.createProject', {
                url: '/createProject',
                templateUrl: 'views/create-project.html'
            })

            .state('project.addMarker', {
                url: '/addMarker',
                templateUrl: 'views/add-marker.html'
            })

            .state('project.addMedia', {
                url: '/addMedia',
                templateUrl: 'views/add-media.html'
            })
            .state('project.edit', {
                url: '/edit',
                templateUrl: 'views/edit.html'
            })
            .state('project.publish', {
                url: '/publish',
                templateUrl: 'views/publish.html'
            });
    })

    .controller('formController', function($scope) {

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function() {
            console.log('awesome!');
        };

    })
    .controller('edit',function($scope){
    $(document).ready(function() {
       $("#content-slider").lightSlider({
           loop:true,
           keyPress:true
       });
       $('#image-gallery').lightSlider({
           gallery:true,
           item:1,
           thumbItem:9,
           slideMargin: 0,
           speed:500,
           auto:true,
           loop:true,
           onSliderLoad: function() {
               $('#image-gallery').removeClass('cS-hidden');
           }  
       });
   });

    })
    
    ;