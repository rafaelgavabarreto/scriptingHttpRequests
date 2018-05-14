var https = require('https');

function getAndPrintHTML(options) {

  var bufferedStrings = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');
    response.on('data', function(data) {
      bufferedStrings += data;
    });
    response.on('error', function(error) {
      bufferedStrings += error;
    });
    response.on('end', function(end) {
      bufferedStrings += end;
      console.log(bufferedStrings);
    });
    response.on('finish', function(finish) {
      bufferedStrings += finish;
    });
  });
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};
getAndPrintHTML(requestOptions);