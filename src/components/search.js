angular.module('video-player')

.component('search', {

  controller: function(youTube) {
    this.youTube = youTube;
    this.clickHandler = function() {
      console.log('handler--------------', this);
      this.youTube(this.query, 5, this.test);
    };
    this.test = function(data) {
      this.videos = data;
      this.selection = data.length > 0 ? data[0] : this.selection;
      console.log('search from APP');
    };
  },

  bindings: {
    searchHandler: '<',
    selection: '=',
    vidoes: '='
  },

  templateUrl: '/src/templates/search.html'
});
