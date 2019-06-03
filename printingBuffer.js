function getAndPrintHTMLChunks () {

    var https = require('https'); 

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };
    
    https.get(requestOptions, function (response) {
        let buffer = '' 

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
      
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            buffer += data;
          console.log('All Chunks Received:', buffer);
        });

    });
      
}

getAndPrintHTMLChunks();