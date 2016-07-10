app.controller('editCtrl',function($scope, $state){
  $scope.note = angular.copy(getNote($state.params.noteId));

  $scope.save = function () {
    updateNote($scope.note);
    $state.go('list');
  }
});
