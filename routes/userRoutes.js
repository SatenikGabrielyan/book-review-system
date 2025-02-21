const express = require("express")
const {validateUser} = require("../middlewares/validation")

const UserService = require("../services/userService")


const router = express.Router()

router.post("/",validateUser, (req, res) => {
    const {name, email, password } = req.body
    UserService.createUser(name, email, password)
    .then((user) => {
        res.status(201).json(user.rows[0])
    })
    .catch((err) => {
        res.status(400).json({error: err.message})
    })
})

router.get("/", (req, res) => {
    UserService.getAllUsers()
    .then((users) => res.status(200).json(users.rows))
    .catch((err) => res.status(500).json({error: err.message}))
})

module.exports = router