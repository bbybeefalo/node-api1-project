// BUILD YOUR SERVER HERE

const express = require('express');
const User = require('../api/users/model');
const server = express();
server.use(express.json());

server.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: 'something went wrong' })
    }
})

server.get('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (!user) {
            res.status(404).json( {message: `Error retrieving user with ID ${id}`})
        } else { 
             res.status(200).json(user)
        }
       
    } catch (err) {
        res.status(500).json({ message: `Error fetching user ${req.params.id}`})
    }
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
