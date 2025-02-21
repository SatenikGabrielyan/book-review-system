const express = require("express")
const { ensureDatabaseExists } = require("./config/database")
const {initializeTables} = require("./models/initTables")
const userRoutes = require("./routes/userRoutes")
const app = express()

ensureDatabaseExists()
initializeTables()
app.use(express.json())
app.use("/users", userRoutes)


app.listen(3001, () => {
    console.log("Server is running")
})
