var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var bufferedStrings = 'a';

  https.get(requestOptions, function(response) {

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
getAndPrintHTML();