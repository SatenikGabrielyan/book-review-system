
const UserModel = require("../models/seqUserModel")


const UserService = {
    createUser: (name, email, password) => {
        if(!name || !email || !password){
            return Promise.reject(new Error("All fields are required"))
        }
        return UserModel.create({name, email, password})
    },

    getAllUsers: () => {
        return UserModel.findAll()
    },

    getUserById: (id) => {
        if(!id){
            return Promise.reject(new Error("User id is required"))
        }
        return UserModel.getUserById(id)
    },

    deleteUserById: (id) => {
        if(!id){
            return Promise.reject(new Error("User id is required"))
        }
        return UserModel.deleteById(id)
    }


}

module.exports = UserService