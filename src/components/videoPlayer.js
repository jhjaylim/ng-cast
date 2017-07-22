angular.module('video-player')

.component('videoPlayer', {
  controller: function(urlMaker) {
    this.url = urlMaker;
    this.show = function() {
      return Boolean(this.video);
    };
  },      
  bindings: {
    video: '<',
  },
  templateUrl: 'src/templates/videoPlayer.html',
});

//