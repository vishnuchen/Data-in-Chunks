function getAndPrintHTML () {

    var https = require('https'); 

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
    
    https.get(requestOptions, function (response) {
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

        //why not outputing???

    });
      
}

getAndPrintHTML();