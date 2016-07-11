app.controller('listCtrl', function ($scope, noteStoreFactory) {
  $scope.notes = noteStoreFactory.list();

  $scope.remove = function (noteId) {
    noteStoreFactory.deleteNote(noteId);
  };

  $scope.move = function (note, $fromIndex, $toIndex) {
    noteStoreFactory.move(note, $fromIndex, $toIndex);
  }
});
