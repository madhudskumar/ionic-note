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
  $stateProvider.state('list',{
    url:'/list',
    templateUrl:'templates/list.html'
  });

  $stateProvider.state('edit',{
    url:'/edit/:noteID',
    templateUrl:'templates/edit.html'
  });

  $urlRouterProvider.otherwise("/list");
});

var notes = [
  {
    id:1,
    title:'firstNote',
    desc:'some notes on first Note'
  },
  {
    id:2,
    title:'SecondNote',
    desc:'stupid to create second'
  }
];
