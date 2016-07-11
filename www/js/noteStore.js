app.factory('noteStoreFactory', function () {
  var notes = angular.fromJson(window.localStorage['notes'] || '[]');

  function persist(){
    window.localStorage['notes'] = angular.toJson(notes);
  }

  return {
    list:function(){
      return notes;
    },

    getNote: function(noteId){
      for(var i = 0; i < notes.length; i++){
        if(notes[i].id == noteId){
          console.log(notes[i]);
          return notes[i];
        }
      }
      return undefined;
    },

    updateNote: function (note){
      for(var i = 0; i < notes.length; i++) {
        if (notes[i].id == note.id) {
          notes[i] = note;
        }
      }
      persist();
    },

   createNote: function (note){
     notes.push(note);
     persist();
    },

    deleteNote: function(noteId){
      for(var i = 0; i < notes.length; i++) {
        if (notes[i].id == noteId) {
          notes.splice(i, 1);
        }
      }
      persist();
    }
  }
});
