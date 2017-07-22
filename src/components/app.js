angular.module('video-player')
  // have controller
.component('app', {
  
  controller: function($window, youTube) {
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    };
    this.youTubeSearch = youTube.search;

    this.youTubeSearch('what does the fox say?', this.searchResults, 5);
  },
  templateUrl: 'src/templates/app.html'
});
