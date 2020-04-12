const functions = require('firebase-functions');
const admin = require('firebase-admin');

// express and parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// cors
const cors = require('cors')({origin: true});
app.use(cors);

admin.initializeApp();
app.get('/', (req, res) => {
  const query = admin.database().ref("sections_1");
  query.once("value").then(snapshot => {
    return res.send(snapshot);
  }).catch(error => {
      // eslint-disable-next-line no-alert
      alert(error);
      res.status(404).send('No data available.');
    });
});

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
