var handler = require('./../handler.js');
var input = require('./../events/postMessage.json');

var callback = function(err, data ) {
    if(err) {
        console.warn(data);
    } else {
        console.log(data);
    }
};

handler.postMessage(input, null, callback);
