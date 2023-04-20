const express = require('express')
const app = express()
const port = 1000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port \x1b[34mhttp://127.0.0.1:${port}\x1b[0m`);
})