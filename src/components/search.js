angular.module('video-player')

.component('search', {

  controller: function(youTube) {
  
    this.youTube = youTube;
    this.clickHandler = function() {
      this.youTube(this.query, 5, this.searcher);
    };
    this.keyUpHandler = function() {
      console.log("fired");
      this.youTube(this.query, 5, this.searcher);
    };
    
  },

  bindings: {
    searcher: '<'
    
  },

  templateUrl: '/src/templates/search.html'
});
