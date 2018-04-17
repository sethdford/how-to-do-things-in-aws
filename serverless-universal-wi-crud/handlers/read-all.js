'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('../s3config.js')())
var s3_bucket = "universal-id";

module.exports = (event, callback) => {
    S3.listObjectsV2({
        Bucket: s3_bucket,
    }, (err, res) => {
        if (res.Contents) {
            const length = res.Contents.length;
            let count = 0;
            res.FileContents = {};
            res.Contents.forEach((item) => {
                const key = item.Key;
                S3.getObject({
                    Bucket: s3_bucket,
                    Key: key,
                }, (err, data) => {
                    count++;
                    data.body = data.Body.toString()
                    res.FileContents[key] = data;
                    if (count === length) {
                        callback(err, res);
                    }
                })
            })
        } else {
            callback(err, res)
        }
    })
}