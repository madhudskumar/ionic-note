var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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
    templateUrl:'templates/list.html',
    controller:'listCtrl'
  });

  $stateProvider.state('edit',{
    url:'/edit/:noteId',
    templateUrl:'templates/edit.html',
    controller: 'editCtrl'
  });

  $urlRouterProvider.otherwise("/list");
});
