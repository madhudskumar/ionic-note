var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('newNote',{
    url:'/add',
    templateUrl:'templates/edit.html',
    controller:'newNoteCtrl'
  });

  $stateProvider.state('list',{
    url:'/list',
    templateUrl:'templates/list.html'
  });

  $stateProvider.state('edit',{
    url:'/edit/:noteId',
    templateUrl:'templates/edit.html',
    controller: 'editCtrl'
  });

  $urlRouterProvider.otherwise("/list");
});
