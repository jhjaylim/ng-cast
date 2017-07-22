angular.module('video-player')
  // have controller
.component('app', {
  
  controller: function(youTube) {
    this.videos = [];
    this.currentVideo = null;
    this.select = function(video) {
      this.currentVideo = video;
    };
    this.selectVideo = this.select.bind(this);
    this.search = function(data) {
      this.videos = data;
      this.currentVideo = data[0];
    };
    this.searchResults = this.search.bind(this);
    this.youTubeSearch = youTube.search;
    this.youTubeSearch('what does the fox say?', this.searchResults, 5);
  },
  templateUrl: 'src/templates/app.html'
});
