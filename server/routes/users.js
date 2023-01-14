const { json } = require("express");
const express = require("express")
const usersRoutes = express.Router();
const fs = require('fs');
const dataPath = './data/database.json'
const getUserData = () => {
    return JSON.parse(fs.readFileSync(dataPath))
}
const saveUserData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
}


usersRoutes.get('/users', (req, res) => {
    res.send(getUserData())
});
usersRoutes.get('/users/:id', (req, res, next) => {
    let existUsers = getUserData().users
    const userId = req.params['id']
    res.send(existUsers[userId - 1])
})
let newUser = {
    id: getUserData().users.length + 1,
    login: "Smith.Adamd12d1",
    first_name: "Smith",
    last_name: "Adam",
    email: "Smith.Adam@email.com"
}
usersRoutes.post('/users/create', (req, res) => {
    const data = getUserData()
    data.users[data.users.length] = newUser
    saveUserData(data)
    res.send({ success: true, msg: 'User data added successfully' })
})

usersRoutes.delete('/users/delete/:id', (req, res) => {
    let existUsers = getUserData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
        const userId = req.params['id'];

        delete existUsers[userId];
        saveUserData.users(existUsers);
        res.send(`accounts with id ${userId} has been deleted`)
    }, true);
})
module.exports = usersRoutes