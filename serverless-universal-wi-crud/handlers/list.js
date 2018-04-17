'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('../s3config.js')())
var s3_bucket = "universal-id";

module.exports = (event, callback) => {
    S3.listObjectsV2({
        Bucket: s3_bucket,
    }, (err, res) => {
        console.log(err, res)
        callback(err, res)
    })
}