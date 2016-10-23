module.exports = function subscribe(dataObj, cb) {
    var config = require('../config');
    var sendpulse = require("../vendor/sendpulse-rest-api-node.js/api/sendpulse.js");

    var API_USER_ID = config.sendpulse.userId;
    var API_SECRET = config.sendpulse.secret;
    var TOKEN_STORAGE="file";
    var addressbookId = config.sendpulse.addressbookId;

    sendpulse.init(API_USER_ID,API_SECRET,TOKEN_STORAGE);

    var answerGetter = function answerGetter(data){
        console.log(data);
    };

    console.log('email: ' + dataObj.email);
    console.log('name: ' + dataObj.name);
    console.log('book: ' + addressbookId);

    var contact = {
        "email" : dataObj.email,
        "variables" : {
            "name" : dataObj.name,
        },
    };

    cb(sendpulse.addEmails(answerGetter, addressbookId, [contact]));
};
