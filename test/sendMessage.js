var handler = require('./../handler.js');
var input = require('./../events/sendMessage.json');

var callback = function(err, data ) {
    if(err) {
        console.warn(data);
    } else {
        console.log(data);
    }
};

handler.sendMessage(input, null, callback);
