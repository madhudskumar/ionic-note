app.controller('listCtrl', function ($scope, noteStoreFactory) {
  $scope.notes = noteStoreFactory.list();

  $scope.remove = function (noteId) {
    noteStoreFactory.deleteNote(noteId);
  }
});
