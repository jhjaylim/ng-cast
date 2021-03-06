angular.module('video-player')
.service('youTube', function($http) { // takes query, max, and callback(handler)
  
  this.search = (query, callback, max = 5) => {
    $http({
      'url': 'https://www.googleapis.com/youtube/v3/search', 
      'method': 'GET',
      'params': {
        part: 'snippet',
        key: YOUTUBE_API_KEY,
        q: query,
        maxResults: max,
        type: 'video',
        videoEmbeddable: 'true'
      }
    }).then(function successCallback(result) {
      console.log('result', result);
      callback(result.data.items);
    }, function errorCallback(response) {
      console.log('error', response);
    });

  };
  
});