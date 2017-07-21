angular.module('video-player')
.component('videoListEntry', {
  controller: function(urlMaker) {
    this.url = urlMaker;
    this.clickHandler = function() {
      this.select(this.video);
    };
  },
  bindings: {
    video: '<',
    select: '&'
  },

  templateUrl: '/src/templates/videoListEntry.html'
});
