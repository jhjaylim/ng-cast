angular.module('video-player')
.component('videoList', {
  // TODO
  controller: function() {
  	console.log('LIST =------------', this);
  	


  },
  bindings: {
    videos: '<',
    select: '<'
  },

  templateUrl: '/src/templates/videoList.html'
});
