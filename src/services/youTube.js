angular.module('video-player')
.service('youTube', function($http) {
  
  return function(query, max, callback) {
    if (!query || !callback) {
      console.log('need a query and callback', query, callback);
      return;
    }
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
