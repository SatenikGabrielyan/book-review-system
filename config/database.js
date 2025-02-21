const { Pool, Client } = require("pg")
const settings = require("./config")


const {defaultDatabase, database, ...configs } = settings
console.log("database", database)
const ensureDatabaseExists = () => {
    const client = new Client({database: defaultDatabase, ...configs})
    
    return client.connect()
    .then(() => {
        console.log("Connected to default database...")
        return client.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [database])
        .then((res) => {
           
           
            if(res.rowCount === 0){
                console.log(`"${database}" database does not exist, creating...`)
                return client.query(`CREATE DATABASE "${database}"`)
                .then(() => {
                    console.log(`Database ${database} created successfully`)
                })
            } else {
                console.log(`Database "${database}" already exists`)
            }
        })
    })
    .catch((err) => {
        console.error("error creating the database")
    })
    .finally(() => {
        return client.end().then(() => {
            console.log("connection to default database closed")
        })
    })
}

const pool = new Pool({database, ...configs})

const query = (text, params) => {
    return pool.query(text, params)
}

module.exports = {query, ensureDatabaseExists}