// index.js
const express = require('express')
// import { MongoClient, ObjectId } from 'mongodb'
// import cors from 'cors'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs'
// import dotenv from 'dotenv'

const app = express()
const PORT = 4000





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