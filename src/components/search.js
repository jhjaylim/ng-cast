angular.module('video-player')

.component('search', {

  controller: function(youTube) {
  
    this.youTube = youTube.search;
    this.clickHandler = function() {
      this.youTube(this.query, this.result);
    };
    this.keyUpHandler = function() {
      console.log('fired');
      this.youTube(this.query, this.result);
    };
    
  },

  bindings: {
    result: '<'
  },

  templateUrl: 'src/templates/search.html'
});
