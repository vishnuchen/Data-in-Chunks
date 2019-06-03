
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };


function getAndPrintHTML (options) {

    var https = require('https'); 
    
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
            console.log('All Data Received:', buffer);
        });


    });
      
}

getAndPrintHTML(requestOptions);