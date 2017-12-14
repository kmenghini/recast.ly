var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    type: 'GET',
    data: {maxResults: options.max,
      q: options.query,
      key: options.key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
    },
    success: function(data) {
      console.log('successful search!');
      callback(data);
    },
    error: function (error) {
      console.log('error' + error);
    },
  });
};

window.searchYouTube = searchYouTube;
