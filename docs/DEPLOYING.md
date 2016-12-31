# Deploying

## Table of Contents

* [Initial Setup](#initial-setup)
* [Deploy Steps](#deploy-steps)

## Initial Setup

This project uses [S3](https://aws.amazon.com/s3/) to store the generated static site files. You must create an S3 bucket that 
  - has static website hosting enabled
  - uses `index.html` as both its index and error documents

## Deploy Steps

Get S3 credentials to deploy your site. Either ask a project admin for or [generate](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey) the following :

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET`
- `AWS_REGION`

#### Manual Deployment From Host Machine

* Update AWS credentials and `NODE_ENV` in your `.envrc` file
* Run `grunt deploy`
