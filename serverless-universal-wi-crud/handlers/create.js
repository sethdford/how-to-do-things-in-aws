'use strict'

const aws = require('aws-sdk')
const s3 = new aws.S3(require('../s3config.js')())

var moment = require('moment');
var s3_bucket = "universal-id";

//create a unique pattern similar t0 W112594-08AUG13
var fileNumber = function() {
    var start = "W";
    var sixDigitValue = shortid();
    var dash = "-";
    var d = new Date();
    var date = moment(d).format('DDMMMYY');
    var workitem = start + sixDigitValue + dash + date;
    return workitem.toUpperCase();
};

//workitem id pattern similar to W112594-08AUG13
var shortid = function() {
    return 'xxxxxxx'.replace(/x/g, function(c) {
        return (Math.random() * 36 | 0).toString(36);
    });
};


module.exports = (event, callback) => {

    // Dev QA Prod etc....
    var stage = event.pathParameters.stage;

    var retry = 0; // try at most 3 times to create unique id

    var done = function(id, error) {
        var response = {
            statusCode: 200,
            body: JSON.stringify({
                "workitem_number": id,
                "stage": stage,
                "error": error
            })
        };
        callback(null, response);
    };

    var check_and_create_id = function(stage, key) {
        s3.headObject({
            Bucket: s3_bucket,
            Key: stage + '/' + key
        }, function(err, data) {
            if (err) {
                // we should normall have a NotFound error showing that the id is not already in use
                if (err.code === 'NotFound') {
                    // normal execution path
                    s3.putObject({
                            Bucket: s3_bucket,
                            Key: stage + '/' + key,
                            Body: '',
                            ServerSideEncryption: 'AES256',
                            ContentType: 'text/plain'
                        },
                        function(err, data) {
                            if (err) {
                                done('', err.message)
                            } else {
                                console.log('Success, id = ' + key);
                                done(key, '');
                            }
                        });
                } else {
                    // treat all other errors as fatal
                    done('', 'Could not find an suitable name, error: ' + err.code)
                }
            } else {
                // we found a duplicate, let's retry a limited number of times
                retry += 1;
                if (retry <= 3) {
                    check_and_create_id(stage, key);
                } else {
                    // abort after 3 tries
                    done('', 'Cannot find an unused id, aborting.');
                }
            }
        })
    }

    check_and_create_id(stage, fileNumber())
}