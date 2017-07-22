angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    select: '<'
  },

  templateUrl: '/src/templates/videoList.html'
});
