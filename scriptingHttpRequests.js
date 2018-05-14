var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log('Data:', data);
    });
    response.on('error', function(error) {
      console.log('Error:', error);
    });
    response.on('end', function(end) {
      console.log('End:', end);
    });
    response.on('finish', function(finish) {
      console.log('Finish:', finish);
    });
  });
}
getAndPrintHTMLChunks();

/*
Which of the stream function options ('data', 'error', 'end', 'finish')
do you need to use to log the data chunks as they come in?
*/