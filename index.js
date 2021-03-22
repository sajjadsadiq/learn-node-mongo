const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Update, Thank You For Prot Caling me')
  })

app.listen(3000, () => console.log('listenting to Prot 3000'))