const e = require("express");
const express = require("express")
const usersRoutes = express.Router();
const fs = require('fs');
const { join } = require("path");
const dataPath = './data/database.json'

const getUserData = () => JSON.parse(fs.readFileSync(dataPath))
const saveUserData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))

usersRoutes.get('/users', (req, res) => {
    try { res.status(200).send(getUserData()) }
    catch (e) { res.status(500).json(e) }
});
usersRoutes.get('/user/:id', (req, res, next) => {
    const existUsers = getUserData().users
    try {
        existUsers[req.params['id'] - 1] === undefined ?
            res.status(400).json({ message: `User with ${req.params['id']} not found` }) :
            res.status(200).send(existUsers[req.params['id'] - 1])
    } catch (e) { res.status(500).json(e) }
})
usersRoutes.post('/user/create', (req, res) => {
    const existUsers = getUserData()
    let userId = {
        id: `${existUsers.users.length + 1}`
    }
    try {
        existUsers.users[existUsers.users.length] = req.body
        saveUserData(existUsers)
        res.status(201).send({ success: true, message: 'User data added successfully' })
    } catch (e) { res.status(500).json(e) }
})
usersRoutes.put('/user/edit/:id', (req, res) => {
    const existUsers = getUserData()
    try {
        existUsers.users[req.params['id'] - 1] = req.body
        saveUserData(existUsers)
        res.status(200).send({ message: `User with id ${req.params['id']} has been edit`, })
    } catch (e) { res.status(500).json(e) }
})
usersRoutes.delete('/user/delete/:id', (req, res) => {
    const existUsers = getUserData()
    const usersId = req.params['id']
    try {
        if (!existUsers.users[usersId - 1]) {
            res.status(400).json({ message: `User with ${usersId} not found` })
        } else {
            console.log(existUsers.users[usersId - 1])
            delete existUsers.users[usersId - 1];
            saveUserData(existUsers);
            res.status(200).send({ message: `User with id ${usersId} has been deleted`, })
        }
    } catch (e) { res.status(500).json(e) }
})
module.exports = usersRoutes