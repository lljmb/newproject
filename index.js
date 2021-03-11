require('dotenv').config()

console.log('where the nappy tap at')
const express = require('express');

const server = express();

server.use(express.json());

if (process.env.NODE_ENV === 'development') {
const cors = require('cors');
server.use(cors());
}

server.use('*', (req, res) => {
    res.send('<h1>hey it worked</h1>')
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})