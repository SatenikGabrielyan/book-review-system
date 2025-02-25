const db = require("../config/database")
const sequelize = require("../config/sequelize_database")
const createBooksTable = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    publishedData DATE,
    addByUserId INT REFERENCES users(id) on DELETE CASCADE
    );
    `
    return db.query(query).then(() => {
        console.log("Books table ensured to exist")
    })
    .catch((err) => {
        console.error(`Error creating books table ${err}`)
    })
}

const createUsersTable = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL
    );
    `
    return db.query(query).then(() => {
        console.log("Users table ensured to exist")
    })
    .catch((err) => {
        console.error(`Error creating users table ${err}`)
    })
}

const createReviewsTable = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS reviews(
    id SERIAL PRIMARY KEY,
    book_id INT REFERENCES books(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    review TEXT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `
     return db.query(query).then(() => {
        console.log("reviews table ensured to exist")
    })
    .catch((err) => {
        console.error(`Error creating reviews table ${err}`)
    }) 
}

const initializeTables = () => {
    // createUsersTable()
    // .then(createBooksTable)
    // .then(createReviewsTable)
    // .then(() => {
    //     console.log("All tables ensured to exist")
    // })
    // .catch((err) => {
    //     console.error("Error initializing tables", err.message)
    // })
    sequelize.sync().then(() => {
        console.log("Database & tables are rfeady")
    })
    .catch((err) => {
        console.log("Database sync error", err.message)
    })
}

module.exports = {initializeTables}