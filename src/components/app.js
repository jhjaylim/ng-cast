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
    this.search = function(data) {
      this.videos = data;
      this.selection = data.length > 0 ? data[0] : this.selection;
      console.log('search from APP');
    };
    this.searchHandler = this.search.bind(this);
  },
  templateUrl: '/src/templates/app.html'
});
