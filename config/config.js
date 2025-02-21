//require("dotenv").config({path:"../.env"})
require("dotenv").config()

const settings = {
    database: process.env.DB_NAME ,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    defaultDatabase: process.env.DEFAULT_DB,
    host: process.env.DB_HOST
    

}

module.exports = settings