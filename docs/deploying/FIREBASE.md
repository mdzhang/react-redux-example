# Deploying with Firebase

Deploy by uploading static assets and index.html to [Firebase](https://www.firebase.com/docs/hosting/).

## Table of Contents

- [Initial Setup](#initial-setup)
- [Deploy Steps](#deploy-steps)

## Initial Setup

Create a Firebase app from the [console](https://console.firebase.google.com/)

- add project name to `.firebaserc`

*NB*: `hosting.public` in `firebase.json` must match `deployPath` in `grunt.config`

## Deploy Steps

Get Firebase credentials to deploy your site. Either ask a project admin for or the following :

- `FIREBASE_TOKEN`
- `FIREBASE_URL`

You can generate a `$FIREBASE_TOKEN` yourself using: `firebase login:ci`

#### Manual Deployment From Host Machine

- Update Firebase credentials in your `.envrc` file
- Run `grunt deploy:firebase`
