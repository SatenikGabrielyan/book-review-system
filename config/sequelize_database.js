const {Sequelize} = require("sequelize")
const settings = require("./config")
const sequelize = new Sequelize(settings.database, settings.user, settings.password, {
    host: settings.host,
    port: settings.port,
    dialect: "postgres",
    logging: false
})

sequelize.authenticate()
.then(() => {
    console.log("Connecting to postgreSQl using Sequelize")
})
.catch((err) => {
    console.log("Unable to connext ", err.message)
})
module.exports = sequelize