var myApp = angular.module('myApp', [
  'ngRoute', // ngRoute for deep linking in angular
  'contactManager',  // the javascript which will handle this module
    'contactFactory',
     'ngSanitize', 'mgcrea.ngStrap', 'ngAnimate', 'firebase'
]);


myApp.config(['$routeProvider', // routeProvider Service
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/list.html', // when the page url is this
        controller: 'DetailsController' // Defining which controller to use for this route
      }).
      when('/add-Contact', {
        templateUrl: 'partials/add-Contact.html', // when the page url is this
        controller: 'DetailsController' // Defining which controller to use for this route
      }).
      when('/contact/:contactId', {
        templateUrl: 'partials/contact-Details.html', // when the page url is this
        controller: 'DetailsController' // Defining which controller to use for this route
      }).
      // when('/details/:detailId', {
      //   templateUrl: 'partials/details.html',
      //   controller: 'DetailsController'
      // }).
      otherwise({ // defining the home page
        redirectTo: '/list'
      });
  }]);

