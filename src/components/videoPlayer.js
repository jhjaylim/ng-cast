angular.module('video-player')

.component('videoPlayer', {
  templateUrl: '/src/templates/videoPlayer.html',
  controller: function(urlMaker) {
    this.url = urlMaker;  
  },
  bindings: {
    video: '<',
  },
});
