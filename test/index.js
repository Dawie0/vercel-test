// index.js
import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000
app.use(cors())




app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API