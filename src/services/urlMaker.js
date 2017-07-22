angular.module('video-player')
.service('urlMaker', function() {
  return function(id) {
    return 'https://www.youtube.com/embed/' + id;
  };
});
