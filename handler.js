'use strict';
var TelegramBot = require('node-telegram-bot-api');
var config = require('./config');
var token = config.token;
var chatId = config.chatId;
var bot = new TelegramBot(token);

function sendMessage(msg, callback) {
    bot.sendMessage(chatId, msg, {
        'parse_mode': 'HTML',
        'disable_web_page_preview': true
    }).then(()=> {
        console.log('Send Success');
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Notification sent!'
            }),
        };
        callback(null, response);
    }).catch((err)=> {
        console.error('Internal Server Error', err);
        const response = {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal Server Error!'
            }),
        };
        callback(null, response);
    });
}

module.exports.sendMessage = (event, context, callback) => {
    const msg = event.queryStringParameters.msg;
    sendMessage(msg, callback);
};

module.exports.postMessage = (event, context, callback) => {
    const body = JSON.parse(event.body);
    sendMessage(body.msg, callback);
};