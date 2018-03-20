const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

var firebase = require('firebase')
var config = {
    apiKey: "AIzaSyBaJjjj7KIgiQzpFvhwqRkKldmqkQX7E5k",
    authDomain: "midterm-native.firebaseapp.com",
    databaseURL: "https://midterm-native.firebaseio.com",
    projectId: "midterm-native",
    storageBucket: "midterm-native.appspot.com",
    messagingSenderId: "1012338930480"
  };
  firebase.initializeApp(config);
  var database = firebase.database()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('Hello Express And Node js')
  })
  
app.get('/test', async (req,res) => {
    let province = []
    await database.ref('Metropolis').once('value').then(snapshot => {
      province = snapshot.val()
    })
  
    res.send(province)
  
})


app.listen(3300, () => {
    console.log('Express start in port ' + 3300);
  })

