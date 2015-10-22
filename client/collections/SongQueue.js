// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.firstChecker, this);
    this.on('ended dequeue', this.dequeue, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  firstChecker: function() {
    if (this.length === 1) {
      this.playFirst();
    } 
  },

  removeSong: function() {
    this.remove(this.at(0));
    if (this.at(0)) {
      this.playFirst();
    }
  },

  dequeue: function() {
    this.removeSong();
  }

});