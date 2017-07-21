angular.module('video-player')
.service('urlMaker', function() {
  // TODO
  return function(id) {
    return 'https://www.youtube.com/embed/' + id;
  };
});
