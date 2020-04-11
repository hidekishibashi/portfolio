const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

admin.initializeApp();
exports.sections = functions.https.onRequest((req, res) => {
  const ref = admin.database().ref('sections');
  ref.once("value", (data) => {
    res.send(data);
  });
});

exports.sections_1 = functions.https.onRequest((req, res) => {
  const ref = admin.database().ref('sections_1');
  ref.once("value", (data) => {
    res.send(data);
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
