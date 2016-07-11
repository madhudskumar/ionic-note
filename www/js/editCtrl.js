app.controller('editCtrl',function($scope, $state, noteStoreFactory){
  $scope.note = angular.copy(noteStoreFactory.getNote($state.params.noteId));

  $scope.save = function () {
    noteStoreFactory.updateNote($scope.note);
    $state.go('list');
  }
});
