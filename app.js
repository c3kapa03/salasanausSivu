//The base code from https://expressjs.com/ and modified
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`The password app listening on port ${port}`)
  console.log('Editing the code')
})
