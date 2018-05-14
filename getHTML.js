var https = require('https');

function getHTML (options, callback) {

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
      callback(bufferedStrings);
    });
    response.on('finish', function(finish) {
      bufferedStrings += finish;
    });
  });
}
function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getHTML(requestOptions,printHTML);