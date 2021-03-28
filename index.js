// First Steps
const express = require('express')
const app = express()

// Cors
const cors = require('cors')
app.use(cors())

// Body Perser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Second Steps
const friends = ['sabbir', 'rofik', 'salam', 'jabar', 'kabir', 'achad']
app.get('/banana', (req, res) =>{
  res.send({fruit:'banana', quantity: 1200, price:234 })
})

// Daynamic API
app.get('/friend/:id', (req, res) =>{
  const friendId = req.params.id
  const name = friends[friendId]
  res.send({friendId, name})
})

// Post man
app.post('/addFriends', (req, res) =>{
  // Save to Database
  const friend = req.body;
  friend.id = 34;
  res.send(friend)
  console.log('hello post', req.body);
})

// Thired Steps
app.listen(4000, () => {
  console.log(`listening Visit Live Website: http://localhost:${4000}`)
})