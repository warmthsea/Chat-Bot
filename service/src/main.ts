import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 1000


// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/27017').then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err)
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Middleware to log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next()
})

app.listen(port, () => {
  console.log(`Example app listening on port \x1b[34mhttp://127.0.0.1:${port}\x1b[0m`);
})

export default app