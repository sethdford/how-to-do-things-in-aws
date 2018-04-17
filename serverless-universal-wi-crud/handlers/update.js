'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('../s3config.js')())
var s3_bucket = "universal-id";

module.exports = (event, callback) => {
    S3.upload({
        Bucket: s3_bucket,
        Key: event.pathParameters.stage + "/" + event.pathParameters.key,
        Body: event.body
    }, (err, res) => {
        console.log(err, res);
        callback(err, res);
    })
}