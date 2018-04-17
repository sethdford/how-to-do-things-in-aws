# Serverless CRUD service which provides a basic CRUD service using S3 to create a human readable universal ID. This project demonstrates a great way to use visual studio to debug code. 

[Serverless](https://serverless.com/) service which provides a basic CRUD service using S3 to create a human readable universal ID. Open up one of the handles, set a break point and run the "Launch via NPM" debug configuration via visual studio code. 

## Installation

1. Run `serverless install --url https://github.com/xtraclabs/serverless-universal-id-crud` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-universal-id-crud`
3. Run `npm install`
4. Deploy with `serverless deploy`

## Development

Make sure to create the path `./data/universal-id` for the local server to work.

Works with Visual Studio Code for Debugging https://code.visualstudio.com/

## How to use

Simply perform requests against the exposed endpoints:

### Create

```bash
curl -X POST https://XXXX.execute-api.region.amazonaws.com/universal-id/dev --data '{ "body" : "metadata" }'
curl -X POST http://localhost:3000/universal-id/dev --data '{ "body" : "metadata" }'
```

### List


```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/universal-id
```

### ReadOne

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/universal-id/<id>
```

### ReadAll

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/universal-id/readAll
```

### Update

```bash
curl -X PUT https://XXXX.execute-api.region.amazonaws.com/dev/universal-id/<id> --data '{ "body" : "metadata" }'
```

### Delete

```bash
curl -X DELETE https://XXXX.execute-api.region.amazonaws.com/dev/universal-id/<id>
```

## AWS services used

- Lambda
- API Gateway
- S3
