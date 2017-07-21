angular.module('video-player')
  // have controller
.component('app', {
  templateUrl: '/src/templates/app.html',
  controller: function() {
    this.videos = exampleVideoData;
    this.selection = exampleVideoData[0];
    this.select = function(video) {
      this.selection = video;
    };
    this.clickHandler = this.select.bind(this);
  },
  // TODO
});
