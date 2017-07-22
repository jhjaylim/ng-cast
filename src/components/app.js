angular.module('video-player')
  // have controller
.component('app', {
  
  controller: function() {
    this.videos = exampleVideoData;
    this.selection = exampleVideoData[0];
    this.select = function(video) {
      this.selection = video;
    };
    this.selectHandler = this.select.bind(this);
  },
  templateUrl: '/src/templates/app.html'
  // TODO
});
