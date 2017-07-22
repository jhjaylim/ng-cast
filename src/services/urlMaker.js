angular.module('video-player')
.service('urlMaker', function() {
  return function(id) {
    return !id ? null : 'https://www.youtube.com/embed/' + id;
  };
});
