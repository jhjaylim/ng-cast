angular.module('video-player')
.component('videoList', {
  // TODO
  controller: function() {
  },
  bindings: {
    videos: '<',
    select: '&'
  },

  templateUrl: '/src/templates/videoList.html'
});
