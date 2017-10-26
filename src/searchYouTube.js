var searchYouTube = (options, callback) => {
  // TODO
  
  //request = request.split(' ').join('+');
  options = options || {key: window.YOUTUBE_API_KEY, query: 'game of thrones', max: 10};

  var url = 'https://www.googleapis.com/youtube/v3/search';
  var results = 'hello world';

  //$.ajaxSetup({ async: false });

  var request = $.ajax({
    url: url,
    type: 'GET',
    data: {
      'part': 'snippet',
      'maxResults': options.max,
      'q': options.query,
      'key': options.key
    },
    success: function(data) {
      //console.log('success', data.items);
      //results = data.items;
      return data;
    },
    error: function(data) {
      console.log('error', data);
    }

  });

  request.done(function(data) {
    results = data.items;
  });

  console.log(results);
  return results;
};

window.searchYouTube = searchYouTube;
