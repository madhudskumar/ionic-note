app.controller('listCtrl', function ($scope, noteStoreFactory) {
  $scope.notes = noteStoreFactory.list();

  $scope.remove = function (noteId) {
    noteStoreFactory.deleteNote(noteId);
  };

  $scope.showOrder = false;
  $scope.showOrderSet = function () {
    $scope.showOrder = !$scope.showOrder;
  };

  $scope.move = function (note, $fromIndex, $toIndex) {
    noteStoreFactory.move(note, $fromIndex, $toIndex);
  }
});
