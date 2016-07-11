app.controller("newNoteCtrl", function ($scope, $state, noteStoreFactory) {
  $scope.note = {
    id: new Date().getTime().toString(),
    title:'',
    desc:''
  };

  $scope.save = function () {
    noteStoreFactory.createNote($scope.note);
    $state.go('list')
  }
});
