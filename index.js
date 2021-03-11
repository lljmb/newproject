require('dotenv').config()
const path = require('path')

console.log('where the nappy tap at')
const express = require('express');

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, 'client/build')))

if (process.env.NODE_ENV === 'development') {
const cors = require('cors');
server.use(cors());
}

server.get('/api/hello', (req, res) => {
    res.json({message: 'hello'})
})

// catch all that sends back index.html
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})