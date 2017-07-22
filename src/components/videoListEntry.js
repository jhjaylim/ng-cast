angular.module('video-player')
.component('videoListEntry', {
  controller: function(urlMaker) {
    
    this.url = urlMaker;
    this.clickHandler = function () {
      this.onClick(this.video);
    };

  },
  bindings: {
    video: '<',
    onClick: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
