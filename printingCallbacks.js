var https = require('https'); 

function getHTML (options, callback) {

    /* Add your code here */
    https.get(options, function (response) {
        let buffer = ''; // what other data type can I use???

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
        console.log('Response stream complete.');
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            buffer += data;          
        });
        
        response.on('end', function() {
            callback(buffer);
        });
  
  })
}
  
  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML);
  